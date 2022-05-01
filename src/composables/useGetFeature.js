export const FeatureList = async () => {
  return [
    {
      id: 1,
      title: "Robust school management system",
      description:
        "All users are able to effectively manage their activities from dashboards specially tailored to their needs.",
      imgPath: "../assets/robust.png",
      left: false,
    },
    {
      id: 2,
      title: "Student Id and debit card integration",
      description:
        "A wallet system is created for all users of the platform toward performing various financial transactions such as paying school fees, buying materials,staff salaries etc. This allows for proper financial management and tracking for students, staff, and the institution at large.",
      imgPath: "../assets/card.png",
      left: true,
    },
    {
      id: 3,
      title: "Unify student cards",
      description:
        "Debit cards linked to their wallets are issued to all users of the platform. These cards will be acceptable anywhere in Nigeria to make online payment, In-store Payments, ATM Withdrawals.",
      imgPath: "../assets/student-card.png",
      left: false,
    },
    {
      id: 4,
      title: "Timely Updates Through Newsletter",
      description:
        "Administrative staff can tailor engagement with faculty, departments,students or parents through newsletters or notifications. This allows for prompt and mass disbursement of information.",
      imgPath: "../assets/newsletter.png",
      left: true,
    },
  ];
};
