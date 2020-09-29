<template>
    <div id='HomeSwiper'>
        <el-carousel class="swiperStyle"  :interval="2000" type="card"    :height="bannerHeight +'px'" >
            <el-carousel-item v-for="item in 4" :key="item">
                <img class="myswiper_img" src="../../assets/hezhao1.jpg" alt="">
            </el-carousel-item>
        </el-carousel>
        <!-- <swiper :options="swiperOption"  ref = "mySwiper">
            <swiper-slide>
                
            </swiper-slide>
            <swiper-slide>
                <img class="myswiper_img" src="../../assets/hezhao2.jpg" alt="">
            </swiper-slide>
            <div class="swiper-scrollbar"></div>
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div> 
            <div class="swiper-pagination"></div> 
        </swiper> -->
    </div>
</template>

<script>


export default {
    data(){
        return{
            bannerHeight:"",
        }
    },
    mounted(){
        this.setSize();
        const that = this;

        window.addEventListener('resize', function() {
            that.screenWidth = $(window).width();
            that.setSize();
        }, false);

    },
    methods:{
        setSize(){
            console.log(this.bannerHeight);
            this.bannerHeight = 740 / 2560 * this.screenWidth;
            if(this.bannerHeight > 740){
                this.bannerHeight = 740
            }
            if(this.bannerHeight < 600)
            {
                this.bannerHeight = 600
            }
        }
    }


    
}
</script>


<style lang="less" scoped>
#HomeSwiper{
    padding-left: 6%;
    padding-right: 4%;
   
    width: 90%;
    .swiperStyle{

        width: 60%;
    }
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
.myswiper_img{
    height: 90%;
    width: 100%;
}
</style>