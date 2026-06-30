chrome.runtime.onMessage.addListener(

  async (
    request,
    sender,
    sendResponse
  ) => {

    // ONLY SCAN REQUEST
    if (
      request.action !==
      "scanWebsite"
    ) {
      return;
    }

    try {

      console.log(
        "Scanning URL:",
        request.url
      );

      // API REQUEST
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

              userEmail:
                "chandrakantkumar1210@gmail.com",

              url: request.url,

              scanSource:
                "Extension",
            }),
          }
        );

      // CHECK RESPONSE
      if (!response.ok) {

        sendResponse({

          success: false,

          message:
            "Backend Request Failed",
        });

        return true;
      }

      // JSON DATA
      const data =
        await response.json();

      console.log(
        "Backend Response:",
        data
      );

      // FAILED
      if (!data.success) {

        sendResponse({

          success: false,

          message:
            data.message ||
            "Scan Failed",
        });

        return true;
      }

      // SAVE LATEST THREAT
      await chrome.storage.local.set({

        latestThreat:
          data.result,
      });

      // GET OLD HISTORY
      const storage =
        await chrome.storage.local.get(
          ["scanHistory"]
        );

      let history =
        storage.scanHistory || [];

      // ADD NEW RESULT
      history.unshift(
        data.result
      );

      // KEEP LAST 50
      history =
        history.slice(0, 50);

      // SAVE HISTORY
      await chrome.storage.local.set({

        scanHistory:
          history,
      });

      console.log(
        "Threat Saved Successfully"
      );

      // SHOW NOTIFICATION
      if (

        data.result.threatLevel ===
          "CRITICAL" ||

        data.result.threatLevel ===
          "DANGEROUS"

      ) {

        chrome.notifications.create({

          type: "basic",

          title:
            "⚠ Cyber Threat Detected",

          message:
            "Dangerous website detected!",
        });
      }

      // SUCCESS RESPONSE
      sendResponse({

        success: true,

        result:
          data.result,
      });

    } catch (error) {

      console.log(
        "BACKGROUND ERROR:",
        error
      );

      sendResponse({

        success: false,

        message:
          error.message ||
          "Extension Error",
      });
    }

    return true;
  }
);