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

        <div class="body-learn">
            <div class="card-container" @click="flipCard" :class="['card', { flipped: isFlipped }]">
                <!-- Mặt trước của thẻ -->
                <div class="card-face card-front body-learn-card">

                    <div class="body-learn-top">
                        <div class="body-learn-item">
                            <i class="fa-solid fa-lightbulb"></i>Get a hint
                        </div>
                        <div class="body-learn-item"></div>
                    </div>
                    <div class="body-learn-content">Ochinpou</div>

                </div>

                <!-- Mặt sau của thẻ -->
                <div class="card-face card-back body-learn-card">

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

        <div class="bottom-learn">
            <div class="bottom-learn-reset">
                <i class="fa-solid fa-arrow-rotate-right"></i>
            </div>

            <div class="bottom-learn-next">
                <div class="bottom-learn-left btn02">
                    <i class="fa-solid fa-xmark"></i>
                </div>

                <div class="bottom-learn-right btn02">
                    <i class="fa-solid fa-check"></i>
                </div>
            </div>

            <div class="bottom-learn-edit">
                <i class="fa-solid fa-pen-to-square"></i>
            </div>
        </div>
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
</style>
