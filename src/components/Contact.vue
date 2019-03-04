<template>
    <div class="contact_wrap">
        <div class="contact">
            <el-card class="box-card">
                <div slot="header">
                    <span class="contact_title">联系方式</span>
                </div>
                <div class="card-body">
                    <template>
                        <el-table :data="contactData" @show-header="false" style="">
                            <el-table-column
                                prop="type"
                                label="类型"
                                width="180">
                            </el-table-column>
                            <el-table-column
                                prop="value"
                                label="内容"
                                width="180">
                            </el-table-column>
                        </el-table>
                    </template>
                </div>
            </el-card>
            <el-card class="box-card">
                <div slot="header">
                    <span class="contact_title">在线留言</span>
                </div>
            </el-card>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                showHeader:false,
                contactData:[{
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
                }]
            }
        },
    }
</script>

<style scoped>
.contact_wrap{
    padding-top:150px;
}
.contact{
    width:1190px;
    margin:50px auto;
}
.box-card{
    font-size:18px;
}
</style>