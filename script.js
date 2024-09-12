      function generatePassword() {
        const characters =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
        let password = "";
        for (let i = 0; i < 12; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          password += characters[randomIndex];
        }
        document.getElementById("password").value = password;
      }

      function copyPassword() {
        const passwordField = document.getElementById("password");
        passwordField.select();
        document.execCommand("copy");
        alert("Password copied to clipboard!");
      }