<template>
    <div id="TopMsgBar">
        <div id = "TimeInfo">
            {{NowDate}}
        </div>
    </div>
</template>

<script>
export default {
    //半夜打开网页未更新
    mounted(){
        this.NowDate = this.$moment(new Date()).format('YYYY-MM-DD')
    },
    data(){
        return{
            NowDate:""
        }
    }
}
</script>
<style lang="less" scoped>
#TopMsgBar{
    height: 6%;
    width: 100%;
    background-color: #202f5b;
    #TimeInfo{
        height: 100%;
        display:flex;
        padding-left: 5%;
        text-align: left;
        align-items:center;
        font-family: 'Work Sans', sans-serif;
        font-size: 26px;
        color: white;
    }
}
</style>
