<template>
    <div id="MainSwitchBar">
        <div class="SwitchBarStyle">
            <el-menu
                :default-active="activeIndex"
                style="padding-left:100px"
                class="el-menu-demo"
                mode="horizontal"
                @select="handleSelect"
                background-color="#202f5b"
                text-color="#6c757d"
                active-text-color="#fff">
                <el-menu-item index="1">首页</el-menu-item>
                <el-menu-item index="3">新闻动态</el-menu-item>
                <el-menu-item index="4">机构人员</el-menu-item>
                <el-menu-item index="5" >学术研究</el-menu-item>
                <el-submenu index="2">
                    <template slot="title">我的工作台</template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        <el-menu-item index="2-3">选项3</el-menu-item>
                    <el-submenu index="2-4">
                        <template slot="title">选项4</template>
                            <el-menu-item index="2-4-1">选项1</el-menu-item>
                            <el-menu-item index="2-4-2">选项2</el-menu-item>
                            <el-menu-item index="2-4-3">选项3</el-menu-item>
                        </el-submenu>
                </el-submenu>
                
            </el-menu>
        </div>
    
    </div>
</template>

<script>
export default {
    mounted(){
    },
    data(){
        return{
            activeIndex: '1'
        }
    },
    methods:{
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>
<style lang="less" scoped>

#MainSwitchBar{
    height: 5%;
    width: 100%;
    background-color:red;
    .SwitchBarStyle{
        height: 100%;
        .el-menu{
            height: 100%;
        }
        .el-submenu{
            height: 100%;
            width: 10%;
            font-family: '黑体', sans-serif;
            font-weight: bold;
            font-size: 20px;
            letter-spacing: 1px;
        }
        .el-menu-item {
                height: 100%;
                width: 10%;
                font-family: '黑体', sans-serif;
                font-weight: bold;
                font-size: 18px;
                letter-spacing: 2px;
            }
        
    }
}
</style>
