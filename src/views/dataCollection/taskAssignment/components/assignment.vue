vue
	<template>
	  <div>
	    <el-row :gutter="10">
	      <el-col :span="6">
	        <el-card class="pro-card">
	          <el-row :gutter="2" class="spaced-row">
	            <el-col :span="10">
	              <div class="card-item">单位工程</div>
	            </el-col>
	            <el-col :span="14">
	              <div class="card-item-name">{{ unitProjectName }}</div>
	            </el-col>
	          </el-row>
	          <el-row :gutter="2" class="spaced-row">
	            <el-col :span="10">
	              <div class="card-item">检验批部位</div>
	            </el-col>
	            <el-col :span="14">
	              <div class="card-item-name">{{ inspectionBatchLocation }}</div>
	            </el-col>
	          </el-row>
	          <el-row :gutter="2" class="spaced-row">
	            <el-col :span="10">
	              <div class="card-item">检验批类别</div>
	            </el-col>
	            <el-col :span="14">
	              <div class="card-item-name">{{ inspectionBatchCategory }}</div>
	            </el-col>
	          </el-row>
	        </el-card>
	      </el-col>
	      <el-col :span="10">
	        <el-card class="sub-card">
	          <el-row :gutter="5" class="spaced-row">
	            <el-col :span="10">
	              <div class="card-item">分包单位</div>
	            </el-col>
	            <el-col :span="12">
	              <el-input v-model="data1" placeholder="请输入分包单位" class="card-item-name" size="mini"></el-input>
	            </el-col>
	          </el-row>
	          <el-row :gutter="5" class="spaced-row">
	            <el-col :span="10">
	              <div class="card-item">分包单位项目负责人</div>
	            </el-col>
	            <el-col :span="12">
	              <el-input v-model="data2" placeholder="请输入项目负责人" class="card-item-name" size="mini"></el-input>
	            </el-col>
	          </el-row>
	          <el-row :gutter="5" class="spaced-row">
	            <el-col :span="10">
	              <div class="card-item">分包单位技术负责人</div>
	            </el-col>
	            <el-col :span="12">
	              <el-input v-model="data3" placeholder="请输入技术负责人" class="card-item-name" size="mini"></el-input>
	            </el-col>
	          </el-row>
	        </el-card>
	      </el-col>
	      <el-col :span="8">
	        <el-card class="build-card">
	          <el-row :gutter="2" class="spaced-row">
	            <el-col :span="8">
	              <div class="card-item">施工规范</div>
	            </el-col>
	            <el-col :span="14">
	             <el-input v-model="data4" placeholder="请输入施工规范" size="mini"></el-input>
	            </el-col>
	          </el-row>
	          <el-row :gutter="2" class="spaced-row">
	            <el-col :span="8">
	              <div class="card-item">检验批容量</div>
	            </el-col>
	            <el-col :span="10">
	              <div class="card-item-name">{{ inspectionBatchSource }} ：{{ inspectionNum }}</div>
	            </el-col>
	            <el-col :span="4">
	              <el-button type="warning" @click="dialogFormVisible1 = true">编辑</el-button>
	              <el-dialog title="检验批容量编辑" :visible.sync="dialogFormVisible1" :show-close="false">
	                <el-table :data="tempGridData1">
	                  <el-table-column property="source" label="来源" width="180" align="center">
	                    <template slot-scope="scope">
	                      <el-select v-model="scope.row.distribute" placeholder="" style="width: 150px;">
	                        <el-option
	                          v-for="item in optionsEdit"
	                          :key="item.value"
	                          :label="item.label"
	                          :value="item.value">
	                        </el-option>
	                      </el-select>
	                    </template>
	                  </el-table-column>
	                  <el-table-column property="count" label="数量" width="180" align="center">
	                    <template slot-scope="scope">
	                      <el-input v-model="scope.row.count" placeholder="" style="width: 150px;"></el-input>
	                    </template>
	                  </el-table-column>
	                  <el-table-column property="info" label="其他信息" width="180" align="center">
	                    <template slot-scope="scope">
	                      <el-input v-model="scope.row.info" placeholder="" style="width: 150px;"></el-input>
	                    </template>
	                  </el-table-column>
	                  <el-table-column property="operation" label="操作" align="center">
	                    <template slot-scope="scope">
	                      <el-button type="danger" @click.stop="cancelRow1(scope)">删除</el-button>
	                    </template>
	                  </el-table-column>
	                </el-table>
	                <div slot="footer" class="dialog-footer">
	                  <el-button type="primary" @click="confirm1()">确 定</el-button>
	                  <el-button @click="cancelDialog1()">取 消</el-button>
	                </div>
	              </el-dialog>
	            </el-col>
	          </el-row>
	          <el-row :gutter="2" class="spaced-row">
	            <el-col :span="8">
	              <div class="card-item">验收规范</div>
	            </el-col>
	            <el-col :span="14">
	              <div class="card-item-name">{{ data6 }}</div>
	            </el-col>
	          </el-row>
	        </el-card>
	      </el-col>
	    </el-row>
	    <el-table
	      :data="tableData"
	      stripe
	      style="width: 100%"
	      :row-class-name="rowClassName"
	    >
	      <!-- 复选框列 -->
	      <el-table-column label="是否采集" width="80" align="center">
	        <template slot-scope="scope">
	          <el-checkbox v-model="scope.row.isChecked"></el-checkbox>
	        </template>
	      </el-table-column>
	      <!-- 其他列 -->
	      <el-table-column
	        prop="project"
	        label="验收项目"
	        width="160"
	        align="center"
	      >
	      </el-table-column>
	      <el-table-column
	        prop="require"
	        label="设计要求及规范规定"
	        width="160"
	        align="center"
	      >
	      </el-table-column>
	      <el-table-column prop="value" label="变量的值" width="160" align="center">
	      </el-table-column>
	      <el-table-column prop="sum" label="样本总数" width="160" align="center">
	      </el-table-column>
	      <el-table-column
	        prop="min"
	        label="最小抽样批量"
	        width="160"
	        align="center"
	      >
	      </el-table-column>
	      <el-table-column
	        prop="distribute"
	        label="分发岗位"
	        width="160"
	        align="center"
	      >
	        <template slot-scope="scope">
	          <el-select
	            v-model="scope.row.distribute"
	            placeholder=""
	            style="width: 150px"
	          >
	            <el-option
	              v-for="item in options"
	              :key="item.value"
	              :label="item.label"
	              :value="item.value"
	            >
	            </el-option>
	          </el-select>
	        </template>
	      </el-table-column>
	      <el-table-column label="设计值" align="center">
	        <template slot-scope="scope">
	          <el-button type="warning" @click="dialogTableVisible2 = true"
	            >编辑</el-button
	          >
	          <!-- 设计值编辑弹窗 -->
	          <el-dialog title="设计值编辑" :visible.sync="dialogTableVisible2" :show-close="false">
	            <el-table :data="tempGridData2">
	              <el-table-column
	                property="count"
	                label="采样部位"
	                width="220"
	                align="center">
	                <template slot-scope="scope">
	                      <el-input v-model="scope.row.part" placeholder="" style="width: 150px;"></el-input>
	                    </template>
	              </el-table-column>
	              <el-table-column
	                property="count"
	                label="设计值"
	                width="220"
	                align="center"
	              >
	                <template slot-scope="scope">
	                      <el-input v-model="scope.row.value" placeholder="" style="width: 150px;"></el-input>
	                    </template>
	              </el-table-column>
	              <el-table-column property="operation" label="操作" align="center">
	                <template slot-scope="scope">
	                  <el-button type="danger" @click.stop="cancelRow2(scope)">删除</el-button>
	                </template>
	              </el-table-column>
	            </el-table>
	            <div slot="footer" class="dialog-footer">
	              <el-button type="primary" @click="confirm2()">确 定</el-button>
	              <el-button @click="cancelDialog2()">取 消</el-button>
	            </div>
	          </el-dialog>
	        </template>
	      </el-table-column>
	    </el-table>
	    <div style="margin-right: 8px; margin-top: 30px;">
	      <el-button type="primary">分发</el-button>
	      <el-button @click="cancel()">取消</el-button>
	    </div>
	  </div>
	</template>

	<script>
	import {
	getInspectItemBytaskId,
	} from '@/api/collection'
	export default {
	  data() {
	    return {
	      unitProjectName: "保利心语佳苑1#楼",
	      inspectionBatchLocation: " -2层1施工段墙柱",
	      inspectionBatchCategory: "钢筋原材",
	      inspectionBatchSource: "钢筋",
	      inspectionNum: "6批",
	      data1: "",
	      data2: "",
	      data3: "",
	      data4: "",
	      data6: "《混凝土结构工程施工质量验收规范》GB50204-2015",
	      build: "",
	      optionsEdit: [
	        {
	          value: "选项1",
	          label: "墙",
	        },
	        {
	          value: "选项2",
	          label: "板",
	        },
	        {
	          value: "选项3",
	          label: "梁",
	        },
	        {
	          value: "选项4",
	          label: "柱",
	        },
	        {
	          value: "选项5",
	          label: "电梯井",
	        },
	        {
	          value: "选项6",
	          label: "钢筋",
	        },
	        {
	          value: "选项7",
	          label: "混凝土",
	        },
	        {
	          value: "选项8",
	          label: "机械连接",
	        },
	        {
	          value: "选项9",
	          label: "独立基础",
	        },
	      ],
	      distribute: "", // 状态选择器值
	      tempGridData1: [],  // 临时存储编辑中的数据
	      tempGridData2: [],  // 临时存储编辑中的数据
	      originalGridData1: [],  // 存储原始数据用于取消时恢复
	      originalGridData2: [],  // 存储原始数据用于取消时恢复
	      gridData1: [
	        {
	          distribute: "",
	          count: "",
	          info: ""
	        },
	      ],
	      gridData2: [
	        {
	          part: "HRB400E",
	          value: "6"
	        },
	        {
	          part: "HRB400E",
	          value: "12"
	        }
	      ],
	      dialogFormVisible1: false,
	      tableData: [
	        {
	          isChecked: false,
	          project: "钢筋力学性能和重量偏差检验",
	          require: "第5.2.1条",
	          value: "",
	          sum: "6",
	          min: "全",
	        },
	        {
	          isChecked: false,
	          project: "钢筋力学性能和重量偏差检验",
	          require: "第5.2.1条",
	          value: "",
	          sum: "6",
	          min: "全",
	        },
	        {
	          isChecked: false,
	          project: "钢筋力学性能和重量偏差检验",
	          require: "第5.2.1条",
	          value: "",
	          sum: "6",
	          min: "全",
	        },
	        {
	          isChecked: false,
	          project: "钢筋力学性能和重量偏差检验",
	          require: "第5.2.1条",
	          value: "",
	          sum: "6",
	          min: "全",
	        },
	      ],
	      options: [
	        {
	          value: "选项1",
	          label: "台账采集员",
	        },
	        {
	          value: "选项2",
	          label: "测量采集员",
	        },
	      ],
	      distribute: "", // 状态选择器值
	      dialogTableVisible2: false,
	    };
	  },
	  computed: {
	    curId() {
	      return this.$route.params.id;
	    },
	  },
	  created() {
	    console.log("任务分发", this.curId);

	    // 初始化数据
	    this.tempGridData1 = JSON.parse(JSON.stringify(this.gridData1));
	    this.tempGridData2 = JSON.parse(JSON.stringify(this.gridData2));
	    this.originalGridData1 = JSON.parse(JSON.stringify(this.gridData1));
	    this.originalGridData2 = JSON.parse(JSON.stringify(this.gridData2));

		this.getInspectItemBytaskId();
	  },
	  mounted() {
	    this.setCardHeights();
	    this.$nextTick(() => {
	      const editButtons = document.querySelectorAll('.el-button[type="warning"]');
	      editButtons.forEach(button => {
	        if (button.textContent.includes('编辑')) {
	          const oldClick = button.onclick || button.getAttribute('onclick');
	          if (oldClick) {
	            button.removeEventListener('click', oldClick);
	          }
	          button.addEventListener('click', (e) => {
	            e.stopPropagation();
	            if (button.textContent.includes('检验批容量')) {
	              this.openDialog1();
	            } else {
	              this.openDialog2();
	            }
	          });
	        }
	      });
	    });
	  },
	  methods: {
		async getInspectItemBytaskId() {
		console.log("获取全部数据getInspectItemBytaskId")
		try {
			const res = await getInspectItemBytaskId(1)
			if (res.code == 200) {
			console.log('采集数据状态', res)
			this.data6 = res.message
			console.log(this.tableData)
			} else {
			throw new Error(res.message || '获取所有采集数据状态失败')
			}
		} catch (error) {
			console.log(error)
			this.$message.error('出错啦，请稍后重试！')
		}
		},

	    rowClassName({ row }) {
	      return row.isChecked ? "checked-row" : "unchecked-row";
	    },

	    // 卡片高度统一
	    setCardHeights() {
	      const cards = document.querySelectorAll('.pro-card, .sub-card, .build-card');
	      let maxHeight = 0;
	      cards.forEach(card => {
	        const height = card.offsetHeight;
	        if (height > maxHeight) {
	          maxHeight = height;
	        }
	      });

	      cards.forEach(card => {
	        card.style.height = `${maxHeight}px`;
	      });
	    },

	    // 如果卡片内容可能变化，可以在更新后重新计算高度
	    updated() {
	      this.setCardHeights();
	    },

	    // 打开第一个弹窗时初始化数据
	    openDialog1() {
	      this.originalGridData1 = JSON.parse(JSON.stringify(this.gridData1));
	      this.tempGridData1 = JSON.parse(JSON.stringify(this.gridData1));
	      this.dialogFormVisible1 = true;
	    },

	    // 打开第二个弹窗时初始化数据
	    openDialog2() {
	      this.originalGridData2 = JSON.parse(JSON.stringify(this.gridData2));
	      this.tempGridData2 = JSON.parse(JSON.stringify(this.gridData2));
	      this.dialogTableVisible2 = true;
	    },

	    // 确认第一个弹窗
    confirm1() {
      // 在保存前将 value 转换为 label
      this.gridData1 = this.tempGridData1.map(item => {
        const option = this.optionsEdit.find(opt => opt.value === item.distribute);
        return {
          ...item,
          distribute: option ? option.label : item.distribute
        };
      });
      
      this.dialogFormVisible1 = false;
      // 更新检验批容量显示
      this.updateInspectionBatchDisplay();
    },
 

	    // 确认第二个弹窗
	    confirm2() {
	      this.gridData2 = JSON.parse(JSON.stringify(this.tempGridData2));
	      this.dialogTableVisible2 = false;
	    },

	    // 取消第一个弹窗
	    cancelDialog1() {
	      this.tempGridData1 = JSON.parse(JSON.stringify(this.originalGridData1));
	      this.dialogFormVisible1 = false;
	    },

	    // 取消第二个弹窗
	    cancelDialog2() {
	      this.tempGridData2 = JSON.parse(JSON.stringify(this.originalGridData2));
	      this.dialogTableVisible2 = false;
	    },

	    // 删除第一弹窗中的行（清空）
	    cancelRow1(scope) {
	      this.$confirm('确定要清空这行吗?', '提示', {
	        confirmButtonText: '确定',
	        cancelButtonText: '取消',
	        type: 'warning'
	      }).then(() => {
	        if (scope.$index >= 0 && scope.$index < this.tempGridData1.length) {
	          // 使用 Vue.set 确保响应式更新
	          this.$set(this.tempGridData1, scope.$index, {
	            distribute: "",
	            count: "",
	            info: ""
	          });

	          // 更新检验批容量显示
	          this.updateInspectionBatchDisplay();
	        }
	      }).catch(() => {
	        // 用户取消操作
	      });
	    },

	    // 删除第二弹窗中的行（清空）
	    cancelRow2(scope) {
	      this.$confirm('确定要清空这行吗?', '提示', {
	        confirmButtonText: '确定',
	        cancelButtonText: '取消',
	        type: 'warning'
	      }).then(() => {
	        if (scope.$index >= 0 && scope.$index < this.tempGridData2.length) {
	          // 使用 Vue.set 确保响应式更新
	          this.$set(this.tempGridData2, scope.$index, {
	            part: "",
	            value: ""
	          });
	        }
	      }).catch(() => {
	        // 用户取消操作
	      });
	    },

      // 更新检验批容量显示
    updateInspectionBatchDisplay() {
      if (this.gridData1.length > 0) {
        // 获取所有唯一的 distribute 值
        const sources = [...new Set(this.gridData1.map(item => item.distribute).filter(Boolean))];
        
        // 将 value 转换为 label
        const labels = sources.map(value => {
          const option = this.optionsEdit.find(opt => opt.value === value);
          return option ? option.label : value;
        });
        
        const counts = this.gridData1.map(item => item.count).filter(Boolean);
        
        if (labels.length > 0) {
          this.inspectionBatchSource = labels.join('、');
          this.inspectionNum = counts.reduce((sum, current) => {
            const num = parseInt(current) || 0;
            return sum + num;
          }, 0) + '批';
        } else {
          this.inspectionBatchSource = '';
          this.inspectionNum = '0批';
        }
      } else {
        this.inspectionBatchSource = '';
        this.inspectionNum = '0批';
      }
    },

	    cancel() {
	      this.$router.push({ name: 'CollectionManage' })
	      .catch(err => {
	        console.error('路由跳转失败:', err);
	        this.$router.push('/');
	      });
	    }
	  },
	};
	</script>

	<style>
	.unchecked-row {
	  color: #a9a9a9;
	}
	.spaced-row {
	  display: flex;
	  margin-top: 1em;
	}
	.sub-card.card-item {
	  background-color: red;
	  display: flex;
	}
	.sub-card.card-item-name .el-input__inner {
	  height: 1em;
	}
	</style>