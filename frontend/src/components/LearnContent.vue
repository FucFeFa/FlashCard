<template>
    <div class="learn-content">
        <div class="top-learn">
            <div class="top-learn-right">
                <div class="top-learn-item n-learn">
                    24
                </div>
                <div class="top-learn-item s-learn">
                    Still learning
                </div>
            </div>

            <div class="top-learn-left">
                <div class="top-learn-item know">
                    Know
                </div>
                <div class="top-learn-item n-know">
                    10
                </div>
            </div>
        </div>

        <!-- Thẻ lật với hiệu ứng xoay -->
        <div class="card-container" @click="flipCard" :class="['card', { flipped: isFlipped }]">
            <!-- Mặt trước của thẻ -->
            <div class="card-face card-front">
                <div class="body-learn">
                    <div class="body-learn-top">
                        <div class="body-learn-item">
                            <i class="fa-solid fa-lightbulb"></i>Get a hint
                        </div>
                        <div class="body-learn-item"></div>
                    </div>
                    <div class="body-learn-content">Ochinpou</div>
                </div>
            </div>

            <!-- Mặt sau của thẻ -->
            <div class="card-face card-back">

                <div class="body-learn">
                    <div class="body-learn-top">
                        <div class="body-learn-item">
                            <i class="fa-solid fa-lightbulb"></i>Get a hint
                        </div>
                        <div class="body-learn-item">

                        </div>
                    </div>
                    <div class="body-learn-content">
                        CON CA
                    </div>
                </div>

            </div>
        </div>

        <div class="bottom-learn"></div>
    </div>
</template>



<script>
export default {
  data() {
    return {
      isFlipped: false,
    };
  },
  methods: {
    flipCard() {
      this.isFlipped = !this.isFlipped;
    },
  },
};
</script>

<style scoped>

.card {
  /* position: relative; */
  transform-style: preserve-3d;
  transition: transform 0.6s;
}

.flipped {
  transform: rotateY(180deg); 
}

.card-face {
  position: absolute;
  width: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-back {
  transform: rotateY(180deg); /* Mặt sau xoay ngược 180 độ */
}


/* top-learn */
.learn-content {
    width: 72%;
    font-weight: 400;
    line-height: 1.3333333333333333;
    display: flex;
    flex-direction: column;
    padding-left: 7%;
}

.top-learn {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.top-learn-right,
.top-learn-left {
    display: flex;
}

.top-learn-item {
    font-size: 18px;
    margin: 16px 5px;
    align-items: center;
}

.n-learn,
.n-know {
    border: 1px solid ;
    border-radius: 16px;
    padding: 3px 12px;
}

.s-learn,
.know {
    padding: 3px 0px;
}

.n-learn,
.s-learn {
    color: #d05700;
}

.n-learn {
    background: #fff6ef;
}

.n-know {
    background: #e6fcf4;
}

.know,
.n-know {
    color: #18ae79;
}

/* body-learn */


.body-learn {
    width: 100%;
    box-shadow: 0 0 2rem 0 #282e3e1f;
    height: 500px;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}

.body-learn-top {
    width: 90%;
    display: flex;
}

.body-learn-content {
    font-size: 24px;
}
</style>
