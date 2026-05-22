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
            "http://https://ai-cyber-guardian.onrender.com/api/url/scan-url",

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

        const result =
          data.result;

        console.log(
          "Threat Result:",
          result
        );

        // SAVE LAST RESULT
        chrome.storage.local.set({
          latestThreat:
            result,
        });

        // REAL-TIME ALERT
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
              `Dangerous website detected:
              ${tab.url}`,
          });
        }

      } catch (error) {

        console.log(
          "Background Scan Error",
          error
        );
      }
    }
  }
);