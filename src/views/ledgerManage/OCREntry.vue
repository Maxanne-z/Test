<template>
    <div>
        <el-row>
            <span>项目名称</span>
            <el-select v-model="value1" placeholder="请选择">
                <el-option v-for="item in options1" :key="item.value1" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <span>单位工程（栋）</span>
            <el-select v-model="valu2e" placeholder="请选择">
                <el-option v-for="item in options2" :key="item.value2" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
            <span>工程号{{ projectNum }}</span>
        </el-row>
        <el-button type="primary">添加一行</el-button>
        <el-button type="primary">关闭OCR面板</el-button>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column fixed prop="date" label="报告编号" width="150">
            </el-table-column>
            <el-table-column prop="name" label="抗拉强度" width="200">
            </el-table-column>
            <el-table-column prop="province" label="断裂位置" width="200">
            </el-table-column>
            <el-table-column prop="city" label="断裂特征" width="200">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="200">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="primary" size="small">台账选择</el-button>
                    <el-button type="danger" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div>
            <el-button type="primary">完成</el-button>
            <el-button @click="cancel()">取消</el-button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            options1: [{
                value: '选项1',
                label: '项目A'
            }, {
                value: '选项2',
                label: '项目B'
            }, {
                value: '选项3',
                label: '项目C'
            }],
            value1: '',
            options2: [{
                value: '选项1',
                label: 'A'
            }, {
                value: '选项2',
                label: 'B'
            }, {
                value: '选项3',
                label: 'C'
            }],
            value2: '',
            projectNum: '12345',
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1518 弄',
                zip: 200333
            }, {
                date: '2016-05-04',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1517 弄',
                zip: 200333
            }, {
                date: '2016-05-01',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1519 弄',
                zip: 200333
            }, {
                date: '2016-05-03',
                name: '王小虎',
                province: '上海',
                city: '普陀区',
                address: '上海市普陀区金沙江路 1516 弄',
                zip: 200333
            }]
        }
    },
    methods: {
        handleClick(row) {
            console.log(row);
        },
        cancel() {
            this.$router.back();
        }
    }
}
</script>

<style></style>