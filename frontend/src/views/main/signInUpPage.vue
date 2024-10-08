<template>
    <div id="container" :class="{ 'right-panel-active': isActive }">
      <div class="container">
        <div class="form-container sign-up-container">
          <form action="" id="sign-up">
            <h1>Create Account</h1>
            <div class="social-container">
              <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
              <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your email for registration</span>
            <div class="infield">
              <input type="text" placeholder="Username" name="username"/>
              <label></label>
            </div>
            <div class="infield">
              <input type="email" placeholder="Email" name="email"/>
              <label></label>
            </div>
            <div class="infield">
              <input type="password" placeholder="Password" name="password" />
              <label></label>
            </div>
            <div class="infield">
              <input type="password" placeholder="Confirm Password" name="confirmPassword" />
              <label></label>
            </div>
            <span class="message-sign-up"></span>
            <div class="infield">
              <input id="date" type="hidden" placeholder="" name="date"/>
              <label></label>
            </div>
            <button>Sign Up</button>
          </form>
        </div>
  
        <div class="form-container sign-in-container">
          <form action="" id="sign-in">
            <h1>Sign in</h1>
            <div class="social-container">
              <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
              <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
              <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your account</span>
            <div class="infield">
              <input type="text" placeholder="Username" name="username"/>
              <label></label>
            </div>
            <div class="infield">
              <input type="password" placeholder="Password" name="password" />
              <label></label>
            </div>
            <span class="message-sign-in"></span>
            <a href="#" class="forgot">Forgot your password?</a>
            <button>Sign in</button>
          </form>
        </div>
  
        <div class="overlay-container" ref="overlayCon">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button @click="togglePanel">Sign In</button>
            </div>
            <div class="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button @click="togglePanel">Sign Up</button>
            </div>
          </div>
          <button ref="overlayBtn" @click="scaleButton" class="btnScaled"></button>
        </div>
      </div>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        isActive: false,
      };
    },

    mounted() {
      this.signUp();
      this.signIn();
    },

    methods: {
      togglePanel() {
        this.isActive = !this.isActive;
      },
      scaleButton() {
        const overlayBtn = this.$refs.overlayBtn;
        overlayBtn.classList.remove('btnScaled');
        window.requestAnimationFrame(() => {
          overlayBtn.classList.add('btnScaled');
        });
      },

      // Lay thoi gian hien tai
      
      getDate () {
        const now = new Date();

        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const day = String(now.getDate()).padStart(2, '0');

        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        const currentDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

        document.querySelector('#date').value = currentDateTime;
      },

      // form dang ky
      signUp () {
        const signUpForm = document.querySelector('#sign-up')
        signUpForm.addEventListener('submit', async (e) => {
          this.getDate()
          e.preventDefault()

          const formData = new FormData(signUpForm)
          const data = Object.fromEntries(formData.entries())
          console.log(formData)
          try {
            const response = await fetch('http://localhost:3000/api/v1/users/signup', {
              method: 'POST', 
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            })
            if (response.ok) {
              this.$router.push('/');
            } else {
              const errorText = await response.text()
              document.querySelector('.message-sign-up').innerHTML = JSON.parse(errorText).message
              e.preventDefault()
            }
          }

          catch (error) {
            console.log(error)
          }
        })
      },

      // form dang nhap
      signIn () {
        const signInForm = document.querySelector('#sign-in')
        signInForm.addEventListener('submit', async (e) => {
          e.preventDefault()

          const formData = new FormData(signInForm)
          const data = Object.fromEntries(formData.entries())
          console.log(formData)
          try {
            const response = await fetch('http://localhost:3000/api/v1/users/signin', {
              method: 'POST', 
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            })
            if (response.ok) {
              this.$router.push('/');
            } else {
              const errorText = await response.text()
              document.querySelector('.message-sign-in').innerHTML = JSON.parse(errorText).message
              e.preventDefault()
            }
          }

          catch (error) {
            console.log(error)
          }
        })
      },

    },
  };
</script>

<style scoped >
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
* {
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
}

body {
    height: 100vh;
    background: #f6f5f7;
    display: grid;
    place-content: center;
    font-family: 'Poppins', sans-serif;
}


#container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.container {
    position: relative;
    width: 850px;
    height: 500px;
    background-color: #fff;
    box-shadow: 25px 30px 55px #5557;
    border-radius: 13px;
    overflow: hidden;
    z-index: 1000;
}

.form-container {
    position: absolute;
    width: 60%;
    height: 100%;
    padding: 0px 40px;
    transition: all 0.6s ease-in-out;
}

.sign-up-container {
    opacity: 0;
    z-index: 1;
}

.sign-in-container {
    z-index: 2;
}

form {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0px 50px;
}

h1 {
    color: #141E30;
}

.social-container {
    margin: 20px 0px;
}

.social-container a {
    border: 1px solid #ddd;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0px 5px;
    height: 40px;
    width: 40px;
}

span {
    font-size: 12px;
}

.infield {
    position: relative;
    margin: 8px 0px;
    width: 100%;
}

input {
    width: 100%;
    padding: 12px 15px;
    background-color: #f3f3f3;
    border: none;
    outline: none;
}

label {
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translateX(-50%);
    width: 0%;
    height: 2px;
    background: linear-gradient(to right, #141E30, #243B55);;
    transition: 0.3s;
}

input:focus~label {
    width: 100%;
}

a {
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0px;
}

a.forgot {
    padding-bottom: 3px;
    border-bottom: 2px solid #eee;
}

button {
    border-radius: 20px;
    border: 1px solid #141E30;
    background: #243B55;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
}

.form-container button {
    margin-top: 17px;
    transition: 80ms ease-in;
}

.form-container button:hover {
    background: #fff;
    color: #141E30;
}

.overlay-container {
    position: absolute;
    top: 0;
    left: 60%;
    width: 40%;
    height: 100%;
    overflow: hidden;
    transition: transform 0.6s ease-in-out;
    z-index: 9;
}


#overlayBtn {
    cursor: pointer;
    position: absolute;
    left: 50%;
    top: 304px;
    transform: translateX(-50%);
    width: 143.67px;
    height: 40px;
    border: 1px solid #fff;
    background: transparent;
    border-radius: 20px;
}

.overlay {
    position: relative;
    background: linear-gradient(to right, #141E30, #243B55);;
    color: #fff;
    left: -150%;
    height: 100%;
    width: 250%;
    transition: transform 0.6s ease-in-out;
}

.overlay-panel {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0px 40px;
    text-align: center;
    height: 100%;
    width: 340px;
    transition: 0.6s ease-in-out
}

.overlay-left {
    right: 60%;
    transform: translateX(-12%);
}

.overlay-right {
    right: 0;
    transform: translateX(0%);
}

.overlay-panel h1 {
    color: #fff;

}

p {
    font-size: 14px;
    font-weight: 300;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 25px 0px 35px;

}

.overlay-panel button {
    border: 1px solid;
    background-color: transparent;
}

.right-panel-active .overlay-container {
    transform: translateX(-150%);
}

.right-panel-active .overlay {
    transform: translateX(50%);
}

.right-panel-active .overlay-left {
    transform: translateX(25%);
}

.right-panel-active .overlay-right {
    transform: translateX(35%);
}

.right-panel-active .sign-in-container {
    transform: translateX(20%);
    opacity: 0;
}

.right-panel-active .sign-up-container {
    transform: translateX(66.7%);
    opacity: 1;
    z-index: 5;
    animation: show 0.6s;
}

@keyframes show {

    0%,
    50% {
        opacity: 0;
        z-index: 1;
    }

    50.1%,
    100% {
        opacity: 1;
        z-index: 5;
    }
}

.btnScaled {
    animation: scaleBtn 0.6s;
}

@keyframes scaleBtn {
    0% {
        width: 143.67px;
    }

    50% {
        width: 250px;
    }

    100% {
        width: 143.67px;
    }
}

.message-sign-in,
.message-sign-up {
  width: 100%;
  color: #f6406c;
}
</style>