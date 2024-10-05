<template>
    <div class="contentCreate">
            <div class="leftBar">
                <ul class="leftBar-content leftNav-content">
                    <li class="leftBar-item navContent-item navContent-itemInfor">
                        <i class="fa-solid fa-star"></i> 
                    </li>
                    <li class="leftBar-item navContent-item">
                        <i class="fa-regular fa-folder-open"></i>
                    </li>
                    <li class="leftBar-item navContent-item">
                        <i class="fa-solid fa-bell"></i>
                    </li>
                    <li class="leftBar-item navContent-item">
                        <i class="fa-solid fa-tags"></i>
                    </li>
                </ul>
            </div>

            <div class="bodyContent">
                <div class="topContent">
                    <div class="topContent-left">
                        <h2>Create a new flashcard set</h2>
                    </div>
    
                    <div class="topContent-right">
                        <a class="btn">Create</a>
                        <a class="btn btn-01">Create and practice</a>
                    </div>

                </div>


                <form action="">
                    <div class="create-info">
                        <div class="create-item">
                            <input type="text" class="create-title" placeholder="Enter a title">
                            <label></label>
                        </div>
    
                        <div class="create-item">
                            <input type="text" class="create-description" placeholder="Subject">
                            <label></label>
                        </div>
                        
                        <div class="create-item description-expand">
                            <input type="text" class="create-subject" placeholder="Add a description">
                            <label></label>
                        </div>
    
                    </div>
                </form>

                <form action="">
                    <div class="create-card">
                        <div class="create-card-item">
                            <div class="create-card-top">
                                <div><span>1</span></div>
                                <div><i class="fa-solid fa-trash"></i></div>
                            </div>
    
                            <div class="create-card-body">
                                <input type="text" placeholder="Enter your question" class="create-card-input">
                                <input type="text" placeholder="Enter your anwser" class="create-card-input">
                            </div>

                            <div class="create-card-bottom">
                                <span>TERM</span>
                                <span>DEFINITION</span>
                            </div>
                        </div>                       
                    </div>
                </form>
                
                <form action="">
                    <div class="create-card">
                        <div class="create-card-item">
                            <div class="create-card-top">
                                <div><span>1</span></div>
                                <div><i class="fa-solid fa-trash"></i></div>
                            </div>
    
                            <div class="create-card-body">
                                <input type="text" placeholder="Enter your question" class="create-card-input">
                                <input type="text" placeholder="Enter your anwser" class="create-card-input">
                            </div>

                            <div class="create-card-bottom">
                                <span>TERM</span>
                                <span>DEFINITION</span>
                            </div>
                        </div>                       
                    </div>
                </form>

                <form action="">
                    <div class="create-card">
                        <div class="create-card-item">
                            <div class="create-card-top">
                                <div><span>1</span></div>
                                <div><i class="fa-solid fa-trash"></i></div>
                            </div>
    
                            <div class="create-card-body">
                                <input type="text" placeholder="Enter your question" class="create-card-input">
                                <input type="text" placeholder="Enter your anwser" class="create-card-input">
                            </div>

                            <div class="create-card-bottom">
                                <span>TERM</span>
                                <span>DEFINITION</span>
                            </div>
                        </div>                       
                    </div>
                </form>

                <form action="">
                    <div class="create-card">
                        <div class="create-card-item">
                            <div class="create-card-top">
                                <div><span>1</span></div>
                                <div><i class="fa-solid fa-trash"></i></div>
                            </div>
    
                            <div class="create-card-body">
                                <input type="text" placeholder="Enter your question" class="create-card-input">
                                <input type="text" placeholder="Enter your anwser" class="create-card-input">
                            </div>

                            <div class="create-card-bottom">
                                <span>TERM</span>
                                <span>DEFINITION</span>
                            </div>
                        </div>                       
                    </div>
                </form>
                
            </div>
            
            <div class="bottomContent">
                <div class="create-card">
                    <span>Add Card</span>
                </div>
            </div>

        </div>
</template>

<script>



import '@/assets/css/contentCreate.css';


export default {
    data() {
        return {
            lastScrollPosition: 0, // Lưu vị trí cuộn trước đó
            hideLeftBar: false     // Trạng thái hiển thị của leftBar
        };
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll); // Don't forget to remove the listener when component is destroyed
    },
    methods: {
        handleScroll() {
            const topContent = document.querySelector('.topContent');
            const leftBar = document.querySelector('.leftBar');
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const targetTop = 0;  // Vị trí mục tiêu là top: 0
            const topOffset = 50; // Khoảng cách ban đầu từ top của trang

            if (!topContent || !leftBar) {
                
                return;  // Thoát an toàn nếu các phần tử không tồn tại
            }

            // Khi cuộn, nếu chưa đến top: 0, cập nhật vị trí
            if (scrollTop > topOffset) {
                topContent.style.position = 'fixed';
                topContent.style.top = Math.max(targetTop, topOffset - scrollTop) + 'px';
                topContent.style.zIndex = 10; // Đảm bảo nó nổi trên các thành phần khác
                topContent.style.boxShadow = '20px 20px 15px #e8e8ec'

                leftBar.classList.add('hidden');
            } else {
                topContent.style.position = 'relative';
                topContent.style.top = 'initial';
                topContent.style.zIndex = 0;
                topContent.style.boxShadow = 'none'

                leftBar.classList.remove('hidden');
            }
        }
    },
};

</script>


<style scoped>


</style>