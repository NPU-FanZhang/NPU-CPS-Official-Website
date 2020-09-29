<template>
    <div id="TopTitleLogoBar">
        <div class="background" :style="backgroundDiv">
            <div class="Logo"   :style="LogoDiv">
        </div>
        </div>
    </div>
</template>

<script>
export default {

    mounted(){

    },
    data(){
        return{
            backgroundDiv:{
                backgroundImage:'url(' + require('../../assets/school.jpg') + ')',
                'background-size':'cover',
                'background-repeat': 'no-repeat'
            },
            LogoDiv:{
                backgroundImage:'url(' + require('../../assets/SchoolLogo.png') + ')',
               
                'background-size':'95% 90%',
                'background-repeat': 'no-repeat'
            }

        }
    }
}
</script>
<style lang="less" scoped>
#TopTitleLogoBar{
    height: 15%;
    width: 100%;
    
    .background{
        height: 100%;
        width: 100%;
        z-index:0;
        position:relative;
    }
    .Logo{
        height: 60%;
        width: 28%;
        margin-left: 3%;
        
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
}
</style>
