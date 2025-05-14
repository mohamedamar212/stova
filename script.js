function changeLanguage(language) {
  const translations = {
    en: {
      home: "Home",
      shop: "Shop",
      about: "About Us",
      login: "Login",
      title: "Stova for Old Money Style",
      description: "The best fashion collections with a timeless old money style.",
      loginTitle: "Login",
      usernameLabel: "Username:",
      passwordLabel: "Password:",
      loginButton: "Login"
    },
    ar: {
      home: "الصفحة الرئيسية",
      shop: "المتجر",
      about: "من نحن",
      login: "تسجيل الدخول",
      title: "ستوفا لأناقة المال القديم",
      description: "أفضل تشكيلات الموضة بأسلوب المال القديم الدائم.",
      loginTitle: "تسجيل الدخول",
      usernameLabel: "اسم المستخدم:",
      passwordLabel: "كلمة المرور:",
      loginButton: "دخول"
    }
  };

  const lang = translations[language];
  if (!lang) return;

  document.querySelector('.home').textContent = lang.home;
  document.querySelector('.shop').textContent = lang.shop;
  document.querySelector('.about').textContent = lang.about;
  document.querySelector('.login').textContent = lang.login;
  document.querySelector('.title').textContent = lang.title;
  document.querySelector('.description').textContent = lang.description;
  document.querySelector('.login-title').textContent = lang.loginTitle;
  document.querySelector('.username-label').textContent = lang.usernameLabel;
  document.querySelector('.password-label').textContent = lang.passwordLabel;
  document.querySelector('.login-button').textContent = lang.loginButton;

  document.documentElement.setAttribute("lang", language);
  document.documentElement.setAttribute("dir", language === "ar" ? "rtl" : "ltr");
}
