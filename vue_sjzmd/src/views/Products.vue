<template>
  <main id="main" class="container">
    <div class="pb-2 text-center">
      <img class="d-block mx-auto mb-4 w-100" src="/img/index/index_guild.png" />
    </div>
    <div class="row">
      <div class="col-md-9">
        <h5 class="mb-3 p-2 text-muted">很多的手机，很便宜</h5>
        <div id="plist" class="row bg-white ml-1 mr-1 pt-2 pl-2">
          <div class="col-md-4 p-1" v-for="(item,i) of list" :key="i">
            <div class="card mb-4 box-shadow pr-2 pl-2">
              <a href="product_details.html?lid=1">
                <img class="card-img-top" :src="item.pic" style="height:150px;weight:150px" />
              </a>
              <div class="card-body p-0">
                <h5 class="text-primary">￥{{item.price}}</h5>
                <p class="card-text">
                  <a href="product_details.html?lid=1" class="text-muted small">{{item.title}}</a>
                </p>
                <div class="d-flex justify-content-between align-items-center p-2 pt-0">
                  <button class="btn btn-outline-secondary p-0 border-0" type="button">-</button>
                  <input type="text" class="form-control p-1" value="10" />
                  <button class="btn btn-outline-secondary p-0 border-0" type="button">+</button>
                  <a class="btn btn-primary float-right ml-1 pl-1 pr-1" @click="addCart(item.lid)">加入购物车</a>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex flex-warp">
            <button @click="jumpCart">查看购物车</button>
            <button @click="loadMore">加载更多</button>
          </div>
        </div>
      </div>
      <div class="col-md-3 pl-0">
        <h5 class="justify-content-between align-items-center mb-1 text-muted p-2">
          <img src="/img/foodstore/foodstore_icon2.png" alt /> 商家公告
        </h5>
        <div class="bg-white small p-4 text-muted mb-3">
          <p>本店推出全网最低价套餐，保证比其他平台的价格要低！</p>
          <p>不要葱、姜、蒜等这些忌口暂时无法坐不了，敬请谅解！</p>
          <p>晚上10点以后订餐需另加送餐费2元！谢谢合作！</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { getProductList } from "@/assets/js/apis/product.js";
import {addCart} from "@/assets/js/apis/cart.js"
export default {
  data() {
    return {
      list: [], //保存服务器返回的商品列表数据
      pno: 0, //当前页码
      pageSize: 3 //每页个数
    };
  },
  mounted() {
    this.loadMore();
  },
  methods: {
    jumpCart() {
      this.$router.push("/cart");
    },

    async loadMore() {
      this.pno++; //每次调用页码数加1
      let pno = this.pno;
      let pageSize = this.pageSize;
      let params = { pno, pageSize };
      let result = await getProductList(params);
      console.log(result);
      if (result.code == 300) {
        //需要用户登录session
        this.$router.push("/login");
        return;
      }
      let rows = this.list.concat(result.data); //返回商品列表数据追加
      this.list = rows;
    },
    async addCart(lid){
      //创建参数对象（如果有参数需要传递）
      let buyCount=1;//默认每次添加的数量是1
      let params = {lid,buyCount};
      //异步调用
      let result = await addCart(params);
      if(result.code==300){
        this.$router.push("/login")
        return;
      }
      if(result.code==200){
        this.$toast("添加成功！");
        return;
      }else{
        this.$messagebox("添加失败",result.msg);
        return;
      }
    },
  }
};
</script>

<style>
/*定制小购物车部分样式*/
#main > div.row > div > h5,
#main > div.row > div > h6,
#cart > li:first-child > h6 {
  background: linear-gradient(to bottom, #f0f0f0, #e0e0e0);
}
#cart .input-group-text {
  width: 90px;
}
#cart input.form-control {
  width: 25px !important;
  flex: none;
}
#cart .input-group .btn,
#plist button.btn {
  width: 20px;
  background: linear-gradient(to bottom, #f0f0f0, #e0e0e0);
}
#cart .input-group-append > .input-group-text {
  width: 80px;
}
#cart.position-fixed {
  top: 100px;
  right: 100px;
}

/*定制商品列表部分的样式*/
/*#plist button.btn{
}*/
#plist input.form-control {
  width: 30px;
}
#plist + h6 .page-link {
  border-color: #bbb;
}
#plist + h6 .page-link:hover {
  border-color: #007bff;
}
#plist + h6 .page-item.disabled {
  opacity: 0.5;
}
</style>