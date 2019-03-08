<template>
    <div class="contact_wrap">
        <div class="contact">
            <el-card class="box-card">
                <div slot="header">
                    <span class="card_title">联系方式</span>
                </div>
                <div class="card-body">
                    <template>
                        <el-table :data="contactData" @show-header="false" style="width:100%" :show-header="false">
                            <el-table-column prop="type" label="类型"></el-table-column>
                            <el-table-column prop="value" label="内容"></el-table-column>
                        </el-table>
                    </template>
                </div>
            </el-card>
            <el-card class="box-card">
                <div slot="header">
                    <span class="card_title">联系我们</span>
                </div>
                <div class="card-body">
                    <el-form ref="contactForm" :model="contactForm" :rules="rules" label-width="80px" width="360px">
                        <el-form-item label="姓名" prop="name">
                            <el-input v-model="contactForm.name"></el-input>
                        </el-form-item>
                        <el-form-item label="手机" prop="phone">
                            <el-input v-model="contactForm.phone"></el-input>
                        </el-form-item>
                        <el-form-item label="电话">
                            <el-input v-model="contactForm.tel"></el-input>
                        </el-form-item>
                        <el-form-item label="电子邮箱">
                            <el-input v-model="contactForm.email"></el-input>
                        </el-form-item >
                        <el-form-item label="问题/需求" prop="content">
                            <el-input type="textarea" v-model="contactForm.content"></el-input>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="onSubmit">提交</el-button>
                            <el-button type="primary" @click="resetting">重置</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>
    import url from './../serviceAPI.config.js'

    export default {
        data() {
            return {
                showHeader:false,
                contactData:[
                    {
                        type: '公司名称',
                        value: '邯郸市壮达物资有限公司'
                    }, {
                        type: '公司地址',
                        value: '河北省邯郸市丛台区丛台西路25号鹿诚商务大厦C单元13层C1303'
                    }, {
                        type: '公司电话',
                        value: '0310-3120336'
                    }, {
                        type: '联系人',
                        value: '安经理'
                    },{
                        type: '手机号码',
                        value: '13831000156'
                    }
                ],
                contactForm:{
                    name:'',
                    phone:'',
                    tel:'',
                    email:'',
                    content:'',
                },
                rules:{
                    name:[{
                        required: true,
                        message: '不能为空',
                        trigger: 'blur'
                    }],
                    phone:[{
                        required: true,
                        message: '不能为空',
                        trigger: 'blur'
                    }],
                    content:[{
                        required: true,
                        message: '不能为空',
                        trigger: 'blur'
                    }],
                }
            }
        },
        created(){
            this.reqContactData();
        },
        methods:{
            reqContactData:function(){
                this.axios.get(url.contact)
                    .then((res)=>{
                        // console.log(res)
                        if(res.data.code==200){
                            console.log(res);
                            // this.companyIntroData = res.data.data[0]
                        }
                    })
            },
            onSubmit:function(){
                alert("success")
            },
            resetting:function(){
                this.$refs.contactForm.resetFields();

            }
        }
    }
</script>

<style scoped>
.contact_wrap{
    padding-top:150px;
}
.contact{
    width:1190px;
    margin:auto;
}
.box-card{
    font-size:18px;
}
.el-form{
    width:460px;
}
</style>