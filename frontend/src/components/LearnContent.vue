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
</style>
