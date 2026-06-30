const resultDiv =
  document.getElementById(
    "result"
  );

const currentUrlText =
  document.getElementById(
    "currentUrl"
  );

const scanBtn =
  document.getElementById(
    "scanBtn"
  );

let currentTabUrl = "";

// GET CURRENT TAB
chrome.tabs.query(

  {
    active: true,
    currentWindow: true,
  },

  (tabs) => {

    // TAB CHECK
    if (
      !tabs ||
      !tabs[0]
    ) {

      currentUrlText.innerHTML =

        `
        Cannot detect tab
        `;

      return;
    }

    currentTabUrl =
      tabs[0].url;

    // BLOCK CHROME PAGES
    if (

      currentTabUrl.startsWith(
        "chrome://"
      ) ||

      currentTabUrl.startsWith(
        "chrome-extension://"
      )

    ) {

      currentUrlText.innerHTML =

        `
        <span style="color:red;">
          Cannot scan browser internal pages
        </span>
        `;

      scanBtn.disabled = true;

      return;
    }

    // SHOW URL
    currentUrlText.innerHTML =

      `
      <strong>Current Website:</strong>
      <br/>
      ${currentTabUrl}
      `;
  }
);

// BUTTON CLICK
scanBtn.addEventListener(

  "click",

  () => {

    // NO URL
    if (!currentTabUrl) {

      resultDiv.innerHTML =

        `
        <p style="color:red;">
          Invalid Website
        </p>
        `;

      return;
    }

    // LOADING
    resultDiv.innerHTML =

      `
      <p style="color:#06b6d4;">
        Scanning website...
      </p>
      `;

    // SEND MESSAGE
    chrome.runtime.sendMessage(

      {
        action: "scanWebsite",

        url: currentTabUrl,
      },

      (response) => {

        // EXTENSION ERROR
        if (
          chrome.runtime.lastError
        ) {

          resultDiv.innerHTML =

            `
            <p style="color:red;">
              Extension Error
            </p>
            `;

          console.log(
            chrome.runtime.lastError
          );

          return;
        }

        // FAILED
        if (

          !response ||

          !response.success

        ) {

          resultDiv.innerHTML =

            `
            <p style="color:red;">
              ${response?.message || "Scan Failed"}
            </p>
            `;

          return;
        }

        // RESULT
        const result =
          response.result;

        // COLOR
        let color = "#22c55e";

        if (
          result.threatLevel ===
          "CRITICAL"
        ) {

          color = "#ef4444";
        }

        else if (
          result.threatLevel ===
          "DANGEROUS"
        ) {

          color = "#f97316";
        }

        else if (
          result.threatLevel ===
          "SUSPICIOUS"
        ) {

          color = "#facc15";
        }

        // UI
        resultDiv.innerHTML =

          `
          <div
            style="
              background:#111827;
              padding:15px;
              border-radius:10px;
              margin-top:15px;
              color:white;
            "
          >

            <h2
              style="
                color:${color};
                margin-top:0;
              "
            >
              ${result.threatLevel}
            </h2>

            <p>
              <strong>URL:</strong>
              <br/>
              ${result.url}
            </p>

            <p>
              <strong>Malicious:</strong>
              ${result.maliciousCount}
            </p>

            <p>
              <strong>Suspicious:</strong>
              ${result.suspiciousCount}
            </p>

            <p>
              <strong>Source:</strong>
              ${result.scanSource}
            </p>

          </div>
          `;
      }
    );
  }
);