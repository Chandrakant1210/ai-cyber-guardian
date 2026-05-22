chrome.tabs.onUpdated.addListener(

  async (tabId, changeInfo, tab) => {

    // PAGE FULLY LOADED
    if (
      changeInfo.status === "complete" &&
      tab.url
    ) {

      try {

        console.log(
          "Scanning:",
          tab.url
        );

        // SEND URL TO BACKEND
        const response =
          await fetch(
            "https://ai-cyber-guardian.onrender.com/api/url/scan-url",

            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json",
              },

              body: JSON.stringify({
                url: tab.url,
              }),
            }
          );

        const data =
          await response.json();

        // CHECK RESPONSE
        if (!data.success) {

          console.log(
            "Threat Scan Failed"
          );

          return;
        }

        const result =
          data.result;

        console.log(
          "Threat Result:",
          result
        );

        // SAVE LATEST RESULT
        chrome.storage.local.set({
          latestThreat: result,
        });

        // SHOW ALERT
        if (
          result.threatLevel ===
            "CRITICAL" ||

          result.threatLevel ===
            "DANGEROUS"
        ) {

          chrome.notifications.create({

            type: "basic",

            iconUrl: "icon.png",

            title:
              "⚠ Cyber Threat Detected",

            message:
              "Dangerous website detected: " +
              tab.url,

            priority: 2,
          });
        }

      } catch (error) {

        console.log(
          "Background Scan Error:",
          error
        );
      }
    }
  }
);