<template>
  <div id = "app">
        <p>
          图片示例：
          <input type="file" @change="handleFileUpload" />  
          对应台账：
          <select>
              <option value="钢筋机械连接">钢筋机械连接</option>  
              <option value="钢筋机械连接">钢筋机械连接</option>  
              <option value="钢筋机械连接">钢筋机械连接</option>  
              <option value="钢筋机械连接">钢筋机械连接</option>  
          </select>
        </p>
        <p>
            模版名称：
            <input type="text" style="width: 500px;">  
        </p>
        <p>
            公司名称：
            <input type="text" style="width: 200px">
            报告名称：
            <input type="text" style="width: 200px">
        </p>
        <table>
          <tr>
            <th>x1</th>
            <th>y1</th>
            <th>x2</th>
            <th>y2</th>
            <th>项</th>
            <th>操作</th>
          </tr>
          <tr v-for="(item,index) in exp" :key="index">
              <td>{{item.index1}}</td>
              <td>{{item.index2}}</td>
              <td>{{item.index3}}</td>
              <td>{{item.index4}}</td>
              <td>
                <select class="select2" v-model="item.name">  
                  <option value="工程名称">工程名称</option>  
                  <option value="工程部位">工程部位</option>  
                  <option value="报告编号">报告编号</option>  
                  <option value="检查日期">检查日期</option>  
                  <option value="样品日期">样品日期</option>
                </select>  
                </td>
              <td><button class="btn5" @click="del(index)">删除</button></td>
          </tr>
        </table>
        <p class="total-container">
            表格坐标 （0,120） 至（110,2233）
            <button class="blue-btn1" @click="add">添加项</button>
            <button class="blue-btn2">表格坐标划定</button>
        </p>
        <p style="display: flex; gap: 10px;">
            <button class="blue-btn3" @click="save">保存</button>  
            <button class="btn4" @click="cancel">取消</button>  
        </p>
    </div>
</template>

<script>
export default {
   name: "Template",
   data(){
    return {
      exp:[  
        {index1:'100', index2:'203', index3:'1073', index4:'233', name:'工程名称'},  
        {index1:'103', index2:'253', index3:'1073', index4:'283', name:'工程名称'},  
        {index1:'869', index2:'103', index3:'1123', index4:'136', name:'工程名称'},  
        {index1:'820', index2:'701', index3:'999', index4:'731', name:'工程名称'},  
      ],  
      backupExp: [], // 添加备份数组  
      // 添加临时变量，用于新建  
      index1: '',  
      index2: '',  
      index3: '',  
      index4: '',  
      name: ''  
    }
   },
   methods(){
    return {
      handleFileUpload(event) {  
        const file = event.target.files[0];  
        if (file) {  
          alert('已选择文件：' + file.name);    
        } 
      },   
      add(){ // 添加项点了右边拉一个框，然后表格里就多出来一行记录，选对应台账里哪一项 
      // if(this.index1=='' || this.index2=='' || this.index3=='' || this.index4==''){  
      //   alert('不能为空');  
      //   return;  
      // }  
      // let newmsg = {  
      //   index1: this.index1,  
      //   index2: this.index2,  
      //   index3: this.index3,  
      //   index4: this.index4,  
      //   name: this.name || '工程名称'  
      // };  
      // this.exp.push(newmsg);  
      // // 清空临时变量  
      // this.index1='';  
      // this.index2='';  
      // this.index3='';  
      // this.index4='';  
      // this.name='';  
      },  
      del(index){  
        console.log('删除索引:', index);  
        this.exp.splice(index, 1);  
      },  
      save() {  
        localStorage.setItem('tableData', JSON.stringify(this.exp));  
        alert('已保存！');  
        this.backupExp = JSON.parse(JSON.stringify(this.exp));  
      },  
      cancel() {  
        this.exp = JSON.parse(JSON.stringify(this.backupExp));  
        alert('已取消，已还原！');  
      }  
    }
  }
}
</script>

<style>
  /* #app {  
    max-width: 700px;  
    margin: 20px auto; 
  }   */
  #app p {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
  }
  table{
    width:600px;
    border:none;
    border-collapse: collapse;
  }
  table th {  
    background-color: #f2f2f2;
  } 
  table tr {  
    border-bottom: 1px solid #ccc;  
  }  
  table tr td{
    text-align: center;
  }
  .blue-btn1 {  
    background-color: #2d8cf0;
    height:25px;
    width: 80px;
  } 
  .blue-btn2 {  
    background-color: #2d8cf0;
    height:25px;
    width:120px;
  } 
  .blue-btn3 {  
    background-color: #2d8cf0;
    height: 35px;
    width: 90px;
  } 
  .btn4 {  
    background-color: rgb(176, 178, 180);
    height: 35px;
    width: 90px;
  }
  .btn5 {
    color: crimson;
    background: none;
  } 
  button {  
    border: none; 
    border-radius: 2px;
    color: #fff;
  }  
  .select2 {  
    height: 30px;
    width: 100px;
    font-size: 16px; 
  }  
  .total-container {  
    display: flex; /* 使用 Flexbox 布局*/  
    justify-content: space-between; /* 在两端对齐 */ 
    width: 600px; /* 为了与表格的宽度一致 */  
    align-items: center; /* 垂直居中对齐 */  
  }    
</style>