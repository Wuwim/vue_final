<template>
  <div class="d-flex flex-column py-3" style="fontSize:12px">
    <!-- 全选 -->
    <div class="d-flex align-items-center">
      <input type="checkbox" v-model="checkAll" @change="selectAll" />全选
    </div>
    <!-- 购物车内容 -->
    <div>
      <div v-for="(item,i) of list" :key="i" class="d-flex align-items-center">
        <!-- 是否选中 -->
        <div class="col-1">
          <input type="checkbox" v-model="item.cb" @change="changedCheckItem" />
        </div>
        <!-- 商品名称 -->
        <div class="col-5">{{item.title}}</div>
        <!-- 商品数量 -->
        <div class="col-2">
          <button class="btn btn-outline-secondary p-0 border-0" type="button" @click="item.count--">-</button>
          <input
            type="text"
            class="form-control p-1"
            aria-label="Small"
            v-model="item.count"
            aria-describedby="inputGroup-sizing-sm"
          />
          <button class="btn btn-outline-secondary p-0 border-0" type="button" @click="item.count++">+</button>
        </div>
        <!-- 价格 -->
        <div class="col-2">￥{{item.price}}</div>
        <!-- 按钮 -->
        <div class="col-2">
          <mt-button @click="deleteItem(item.iid)">删</mt-button>
        </div>
      </div>
    </div>

    <div>
      <span>购物车数量：{{count}}</span>
      <mt-button @click="delcheckedItems()">删除选中的商品</mt-button>
      <mt-button @click="delAll">清空购物车</mt-button>
      <mt-button @click="$router.back()">返回</mt-button>
    </div>
  </div>
</template>

<script>
import { listCart, deleteCart,cartUpdateCount} from "@/assets/js/apis/cart.js";
export default {
  data() {
    return {
      list: [],
      checkAll: false
    };
  },
  created() {
    this.loadMore();
  },

  methods: {
    delcheckedItems() {
      //提示用户  如果购物车没有商品
      if (this.list.length == 0) {
        this.$messagebox("提示", "当前没有可以删除的商品！");
        return;
      }
      //生成编号以逗号分隔的参数
      let str_iids = "";
      //循环
      for (let item of this.list) {
        if (item.cb) {
          str_iids += item.iid + ",";
        }
      }
      if (str_iids.length == 0) {
        this.$messagebox("提示", "当前没有选中的商品！");
        return;
      }
      //要去掉最后的那个“,”
      str_iids = str_iids.substring(0, str_iids.length - 1);
      //调用删除单个
      this.deleteItem(str_iids);
    },
    async delAll() {
      // console.log("delAll方法调用，待完成。。。。。。")
      try {
        await this.$messagebox.confirm("是否删除全部商品");
        //全部选中
        this.checkAll = true;
        for (let item of this.list) {
          item.cb = true;
        }
        this.delcheckedItems();
        this.checkAll = false;
      } catch (error) {
        console.log("你选择了Cancel");
      }
    },
    selectAll() {
      // console.log("selectAll方法调用，待完成。。。。。。")
      for (let item of this.list) {
        item.cb = this.checkAll; //把全选检测框的值赋值给list的框
      }
    },
    changedCheckItem() {
      // console.log("changedCheckItem方法调用，待完成。。。。。。")
      //处理商品前面的检测框选中与否
      //计算被选中的个数 如果个数》0  =0 影响全选检测框的值
      let sum = 0;
      for (let item of this.list) {
        if (item.cb == true) sum++;
      }

      //判断选中个数是否等于全部
      if (sum == this.list.length) {
        this.checkAll = true;
      } else {
        this.checkAll = false;
      }
    },
    async deleteItem(iid) {
      // console.log("deleteItem方法调用，待完成。。。。。。")
      // 功能：删除iid对应的购物车商品
      try {
        //提示：是否真的删除？
        await this.$messagebox.confirm("确定是否删除指定编号的商品？" + iid);
        // console.log("你选择了Confirm");
        //准备好参数
        let params = { iid };
        //发送请求进行异步调用
        let result = await deleteCart(params);
        console.log(result);
        //判断返回参数
        if (result.code == 300) {
          this.$toast("请登录！");
          this.$router.push("/login");
          return;
        }
        //处理返回数据
        if (result.code == 200) {
          this.$toast("删除成功！");
          this.loadMore(); //重新加载数据
          return;
        } else {
          this.$messagebox("错误", result.msg);
          return;
        }
      } catch (error) {
        console.log("你选择了Cancel");
      }
    },
    // async cartUpdateCounti(iid){
    //   try {
    //     let params = { iid };
    //     let result = await cartUpdateCounti(params);
    //     if (result.code == 300) {
    //       this.$toast("请登录！");
    //       this.$router.push("/login");
    //       return;
    //     }
    //     //处理返回数据
    //     if (result.code == 200) {
    //       this.$toast("删除成功！");
    //       this.loadMore(); //重新加载数据
    //       return;
    //     } else {
    //       this.$messagebox("错误", result.msg);
    //       return;
    //     }
    //   } catch (error) {
    //     console.log("你选择了Cancel");
    //   }
    // },
    async cartUpdateCount(iid){
      try {
        // let count = item.count;
        let params = { iid };
        let result = await cartUpdateCount(params);
        if (result.code == 300) {
          this.$toast("请登录！");
          this.$router.push("/login");
          return;
        }
        //处理返回数据
        if (result.code == 200) {
          this.$toast("删除成功！");
          this.loadMore(); //重新加载数据
          return;
        } else {
          this.$messagebox("错误", result.msg);
          return;
        }
      } catch (error) {
        console.log("你选择了Cancel");
      }
    },
    // async cartUpdateCountd(iid){
    //   try {
    //     let params = { iid };
    //     let result = await cartUpdateCountd(params);
    //     if (result.code == 300) {
    //       this.$toast("请登录！");
    //       this.$router.push("/login");
    //       return;
    //     }
    //     //处理返回数据
    //     if (result.code == 200) {
    //       this.$toast("删除成功！");
    //       this.loadMore(); //重新加载数据
    //       return;
    //     } else {
    //       this.$messagebox("错误", result.msg);
    //       return;
    //     }
    //   } catch (error) {
    //     console.log("你选择了Cancel");
    //   }
    // },
    async loadMore() {
      //加载购物车列表调用是没有参数的
      let result = await listCart();
      console.log(result);
      if (result.code == 300) {
        //需要用户登录session
        this.$toast("请先登录！");
        this.$router.push("/login");
        return;
      }
      if (result.code == 200) {
        //处理返回后的数据   保存到list   添加一个check属性
        let rows = result.data;
        for (let item of rows) {
          item.cb = false;
        }
        this.list = rows; //将添加check属性的数组保存到list
      } else {
        this.$messagebox("添加失败", result.msg);
        return;
      }
    }
  },
  computed: {
    count() {
      return this.list.length;
    }
  }
};
</script>

<style>
.mint-button {
  font-size: 12px;
}
</style>