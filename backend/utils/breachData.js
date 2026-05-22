const breachDatabase = [
  {
    email: "test@gmail.com",
    breaches: [
      {
        platform: "LinkedIn",
        leakedData: "Email + Password",
        severity: "High",
      },

      {
        platform: "Facebook",
        leakedData: "Email",
        severity: "Medium",
      },
    ],
  },

  {
    email: "admin@gmail.com",
    breaches: [
      {
        platform: "Twitter/X",
        leakedData: "Username + Password",
        severity: "Critical",
      },
    ],
  },
];

module.exports = breachDatabase;