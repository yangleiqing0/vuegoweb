<template>
        <div class="edit">
            <div class="_edit edit-inner">
              <div style="margin: 20px;"></div>
              <el-form :label-position="labelPosition" label-width="80px" :model="Form" size="small" status-icon :rules="rules" ref="Form">
                <el-form-item label="分组名称" prop="name">
                  <el-input v-model="Form.name"></el-input>
                </el-form-item>
                <el-form-item label="分组备注" prop="description">
                  <el-input v-model="Form.description"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="submitForm('Form')">提交</el-button>
                  <el-button @click="resetForm('Form')">重置</el-button>
                  <el-button @click="back">后退</el-button>
                </el-form-item>
              </el-form>
            </div>
        </div>
<!--      </div>-->
<!--  </div>-->
</template>
<script>
  export default {
    name:'group_edit',
    data() {
      var checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('不能为空'));
        }else {
            this.$axios.post('/api/group/name_validate', {
                name: value,
                id: this.Form.id})
                .then(res=>{
                    if(res) {
                        callback();
                    }else{
                        return callback(new Error('名称已存在'));
                    }
                });
        }
      };
        return {
            Form: {
              name: '',
              description: ''
            },
            rules: {
              name: [
                { validator: checkName, trigger: 'blur' }
              ]
            },
            labelPosition: 'right'
        };
      },
      methods:{
          getParams(){//接收函数
              if (this.$route.params.row) {
                  this.Form = this.$route.params.row;
              }
              if (this.$route.params.id && this.$route.params.row === undefined){
                  this.my_get_data(this.$route.params.id, 'group/detail', this)
                  console.log('group_edit_refresh', this.Form);
              }
          },
          submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
                this.$axios.post('/api/group/edit', this.Form)
                    .then(()=> {
                    this.$router.push('/group_list');

                })
            }else {
              return false;
            }
          });
        },
          resetForm(formName) {
            this.$refs[formName].resetFields();
          },
          back(){
              this.$router.go(-1);//返回上一层
          },
        },
      created() {//在模板编译进路由前调用created方法，触发接收函数
          this.getParams();
      }
  }
</script>
