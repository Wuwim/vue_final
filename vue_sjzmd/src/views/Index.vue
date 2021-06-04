<template>
  <main id="main" class="container">
    <carousel></carousel>
    <div>
      <h3 class="pb-3">
        <nav class="navbar navbar-light border-bottom border-secondary pb-0 mb-2">
          <a class="navbar-brand" href="#">
            <img src="/img/index/computer_icon.png" class="d-inline-block align-top" alt />
            首页推荐 / 1F
          </a>
        </nav>
        <div class="row mb-2">
          <div id="p1" class="col-md-7">
            <div class="card border-0 flex-md-row box-shadow h-md-250">
              <div class="card-body d-flex flex-column align-items-start">
                <h5 class="d-inline-block mb-2">{{p1.title}}</h5>
                <h6 class="mb-5">
                  <a class="text-dark" href="javascript:;">{{p1.details}}</a>
                </h6>
                <span class="text-primary" v-cloak>{{p1.price.toFixed(2)}}</span>
                <!-- <a class="btn btn-primary" href="product_details.html?lid=1">查看详情</a> -->
                <router-link
                  class="btn btn-primary"
                  :to="`/product/detail/${p1.href.split('=')[1]}`"
                >查看详情</router-link>
              </div>
              <img
                class="card-img-right flex-auto d-none d-md-block"
                data-src="holder.js/200x250?theme=thumb"
                alt="Thumbnail [200x250]"
                :src="p1.pic"
                data-holder-rendered="true"
              />
            </div>
          </div>
          <div id="p2" class="col-md-5 pl-0">
            <div class="card border-0 flex-md-row box-shadow h-md-250">
              <div class="card-body d-flex flex-column align-items-start">
                <h5 class="d-inline-block mb-2">{{p2.title}}</h5>
                <h6 class="mb-5">
                  <a class="text-dark" href="javascript:;">{{p2.details}}</a>
                </h6>
                <span class="text-primary" v-cloak>{{p2.price.toFixed(2)}}</span>
                <!-- <a class="btn btn-primary" href="product_details.html?lid=5">查看详情</a> -->
                <router-link
                  class="btn btn-primary"
                  :to="`/product/detail/${p2.href.split('=')[1]}`"
                >查看详情</router-link>
              </div>
              <img
                class="card-img-right flex-auto d-none d-md-block mt-5"
                data-src="holder.js/200x250?theme=thumb"
                alt="Thumbnail [200x250]"
                :src="p2.pic"
                data-holder-rendered="true"
              />
            </div>
          </div>
        </div>
        <div class="row mb-2">
          <div id="p3" class="col-md-5">
            <div class="card border-0 flex-md-row box-shadow h-md-250">
              <div class="card-body d-flex flex-column align-items-start">
                <h5 class="d-inline-block mb-3">{{p3.title}}</h5>
                <span class="text-primary" v-cloak>{{p3.price.toFixed(2)}}</span>
                <!-- <a class="btn btn-primary" href="product_details.html?lid=9">查看详情</a> -->
                <router-link
                  class="btn btn-primary"
                  :to="`/product/detail/${p3.href.split('=')[1]}`"
                >查看详情</router-link>
              </div>
              <img
                class="card-img-right flex-auto d-none d-md-block mt-5"
                data-src="holder.js/200x250?theme=thumb"
                alt="Thumbnail [200x250]"
                :src="p3.pic"
                data-holder-rendered="true"
              />
            </div>
          </div>
          <div class="col-md-7 pl-0">
            <div id="others" class="row pr-3">
              <div class="col-md-4 p-0 pl-2" v-for="(p,i) of others" :key="i">
                <div class="card border-0 text-center">
                  <img
                    class="card-img-top"
                    :src="p.pic"
                    alt="Card image cap"
                    style="height:128px;weight:200px"
                  />
                  <div class="card-body p-0 pr-1 pl-1">
                    <span class="d-inline-block">{{p.title}}</span>
                    <br />
                    <span class="text-primary small">{{p.price.toFixed(2)}}</span>
                    <!-- <a class="btn btn-sm btn-primary" href="product_details.html?lid=13">查看详情</a> -->
                    <router-link
                      class="btn btn-primary"
                      :to="`/product/detail/${p.href.split('=')[1]}`"
                    >查看详情</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </h3>
      <h3 class="pb-3">
        <nav class="navbar navbar-light border-bottom border-secondary pb-0 mb-2">
          <a class="navbar-brand" href="#">
            <img src="/img/index/computer_icon.png" class="d-inline-block align-top" alt />
            最新上架 / 2F
          </a>
        </nav>
        <div class="row mb-2">
          <div class="col-md-7">
            <div class="card border-0 flex-md-row box-shadow h-md-250">
              <div class="card-body d-flex flex-column align-items-start">
                <h5 class="d-inline-block mb-2">{{p4.title}}</h5>
                <h6 class="mb-5">
                  <a class="text-dark" href="javascript:;">{{p4.details}}</a>
                </h6>
                <span class="text-primary">{{p4.price.toFixed(2)}}</span>
                <router-link
                  class="btn btn-primary"
                  :to="`/product/detail/${p4.href.split('=')[1]}`"
                >查看详情</router-link>
              </div>
              <img
                class="card-img-right flex-auto d-none d-md-block"
                data-src="holder.js/200x250?theme=thumb"
                alt="Thumbnail [200x250]"
                :src="p4.pic"
                data-holder-rendered="true"
              />
            </div>
          </div>
          <div class="col-md-5">
            <div class="card border-0 flex-md-row box-shadow h-md-250">
              <div class="card-body d-flex flex-column align-items-start">
                <h5 class="d-inline-block mb-2">{{p5.title}}</h5>
                <h6 class="mb-5">
                  <a class="text-dark" href="javascript:;">{{p5.details}}</a>
                </h6>
                <span class="text-primary">{{p5.price.toFixed(2)}}</span>
                <router-link
                  class="btn btn-primary"
                  :to="`/product/detail/${p5.href.split('=')[1]}`"
                >查看详情</router-link>
              </div>
              <img
                class="card-img-right flex-auto d-none d-md-block mt-5"
                data-src="holder.js/200x250?theme=thumb"
                alt="Thumbnail [200x250]"
                :src="p5.pic"
                data-holder-rendered="true"
              />
            </div>
          </div>
        </div>
        <div class="row mb-2">
          <div class="col-md-5">
            <div class="card border-0 flex-md-row box-shadow h-md-250">
              <div class="card-body d-flex flex-column align-items-start">
                <h5 class="d-inline-block mb-3">{{p6.title}}</h5>
                <span class="text-primary">{{p6.price.toFixed(2)}}</span>
                <router-link
                  class="btn btn-primary"
                  :to="`/product/detail/${p6.href.split('=')[1]}`"
                >查看详情</router-link>
              </div>
              <img
                class="card-img-right flex-auto d-none d-md-block mt-5"
                data-src="holder.js/200x250?theme=thumb"
                alt="Thumbnail [200x250]"
                :src="p6.pic"
                data-holder-rendered="true"
              />
            </div>
          </div>
          <div class="col-md-7">
            <div class="row pr-3">
              <div class="col-md-4 p-0 pl-2" v-for="(p,i) of others1" :key="i">
                <div class="card border-0 text-center">
                  <img
                    class="card-img-top"
                    :src="p.pic"
                    alt="Card image cap"
                    style="height:128px;weight:200px"
                  />
                  <div class="card-body p-0 pr-1 pl-1">
                    <span class="d-inline-block">{{p.title}}</span>
                    <span class="text-primary small">{{p.price.toFixed(2)}}</span>
                    <router-link
                      class="btn btn-primary"
                      :to="`/product/detail/${p.href.split('=')[1]}`"
                    >查看详情</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </h3>
      <h3 class="pb-3">
        <nav class="navbar navbar-light border-bottom border-secondary pb-0 mb-2">
          <a class="navbar-brand" href="#">
            <img src="/img/index/computer_icon.png" class="d-inline-block align-top" alt />
            热销单品 / 3F
          </a>
        </nav>
        <div class="row mb-2">
          <div class="col-md-7">
            <div class="card border-0 flex-md-row box-shadow h-md-250">
              <div class="card-body d-flex flex-column align-items-start">
                <h5 class="d-inline-block mb-2">{{p7.title}}</h5>
                <h6 class="mb-5">
                  <a class="text-dark" href="javascript:;">{{p7.details}}</a>
                </h6>
                <span class="text-primary">{{p7.price.toFixed(2)}}</span>
                <router-link
                  class="btn btn-primary"
                  :to="`/product/detail/${p7.href.split('=')[1]}`"
                >查看详情</router-link>
              </div>
              <img
                class="card-img-right flex-auto d-none d-md-block"
                data-src="holder.js/200x250?theme=thumb"
                alt="Thumbnail [200x250]"
                :src="p7.pic"
                data-holder-rendered="true"
              />
            </div>
          </div>
          <div class="col-md-5">
            <div class="card border-0 flex-md-row box-shadow h-md-250">
              <div class="card-body d-flex flex-column align-items-start">
                <h5 class="d-inline-block mb-2">{{p8.title}}</h5>
                <h6 class="mb-5">
                  <a class="text-dark" href="javascript:;">{{p8.details}}</a>
                </h6>
                <span class="text-primary">{{p8.price.toFixed(2)}}</span>
                <router-link
                  class="btn btn-primary"
                  :to="`/product/detail/${p8.href.split('=')[1]}`"
                >查看详情</router-link>
              </div>
              <img
                class="card-img-right flex-auto d-none d-md-block mt-5"
                data-src="holder.js/200x250?theme=thumb"
                alt="Thumbnail [200x250]"
                :src="p8.pic"
                data-holder-rendered="true"
              />
            </div>
          </div>
        </div>
        <div class="row mb-2">
          <div class="col-md-5">
            <div class="card border-0 flex-md-row box-shadow h-md-250">
              <div class="card-body d-flex flex-column align-items-start">
                <h5 class="d-inline-block mb-3">{{p9.title}}</h5>
                <span class="text-primary">{{p9.price.toFixed(2)}}</span>
                <router-link
                  class="btn btn-primary"
                  :to="`/product/detail/${p9.href.split('=')[1]}`"
                >查看详情</router-link>
              </div>
              <img
                class="card-img-right flex-auto d-none d-md-block mt-5"
                data-src="holder.js/200x250?theme=thumb"
                alt="Thumbnail [200x250]"
                :src="p9.pic"
                data-holder-rendered="true"
              />
            </div>
          </div>
          <div class="col-md-7">
            <div class="row pr-3">
              <div class="col-md-4 p-0 pl-2" v-for="(p,i) of others2" :key="i">
                <div class="card border-0 text-center">
                  <img
                    class="card-img-top"
                    :src="p.pic"
                    alt="Card image cap"
                    style="height:128px;weight:200px"
                  />
                  <div class="card-body p-0 pr-1 pl-1">
                    <span class="d-inline-block">{{p.title}}</span>
                    <span class="text-primary small">{{p.price.toFixed(2)}}</span>
                    <router-link
                      class="btn btn-primary"
                      :to="`/product/detail/${p.href.split('=')[1]}`"
                    >查看详情</router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </h3>
    </div>
    <ul class="nav nav-pills nav-fill mb-3">
      <li class="nav-item">
        <a class="nav-link" href="#">
          <img src="/img/footer/icon1.png" />
          <h6 class="text-muted">品质保障</h6>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <img src="/img/footer/icon2.png" />
          <h6 class="text-muted">私人订制</h6>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <img src="/img/footer/icon3.png" />
          <h6 class="text-muted">学员特供</h6>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <img src="/img/footer/icon4.png" />
          <h6 class="text-muted">专属特权</h6>
        </a>
      </li>
    </ul>
    <div class="btn-group-vertical position-fixed" role="group" aria-label="Basic example">
      <button
        type="button"
        class="btn btn-secondary btn-sm border-light border-left-0 border-right-0"
      >
        首页
        <br />推荐
      </button>
      <button
        type="button"
        class="btn btn-secondary btn-sm border-light border-left-0 border-right-0"
      >
        最新
        <br />上架
      </button>
      <button
        type="button"
        class="btn btn-secondary btn-sm border-light border-left-0 border-right-0"
      >
        热销
        <br />单品
      </button>
    </div>
  </main>
</template>

<script>
import Carousel from "@/components/index/Carousel";
import { getIndex } from "@/assets/js/apis/index.js";
export default {
  data() {
    return {
      p1: { price: 0, href: "" },
      p2: { price: 0, href: "" },
      p3: { price: 0, href: "" },
      others: [],
      p4: { price: 0, href: "" },
      p5: { price: 0, href: "" },
      p6: { price: 0, href: "" },
      others1: [],
      p7: { price: 0, href: "" },
      p8: { price: 0, href: "" },
      p9: { price: 0, href: "" },
      others2: []
    };
  },
  created() {
    getIndex().then(res => {
      console.log(res.recommendedItems);
      var [p1, p2, p3] = res.recommendedItems;
      this.p1 = p1;
      this.p2 = p2;
      this.p3 = p3;
      this.others = res.recommendedItems.slice(3);
      var [p4, p5, p6] = res.newArrialItems;
      this.p4 = p4;
      this.p5 = p5;
      this.p6 = p6;
      this.others1 = res.newArrialItems.slice(3);
      var [p7, p8, p9] = res.topSaleItems;
      this.p7 = p7;
      this.p8 = p8;
      this.p9 = p9;
      this.others2 = res.topSaleItems.slice(3);
    });
  },
  components: {
    Carousel
  }
};
</script>

<style>
/*定制每层楼中每张商品图片的大小*/
#main > div:nth-child(2) > h3 > div:nth-child(2) > div:first-child img {
  margin-left: -200px;
  height: 250px;
}
#main > div:nth-child(2) > h3 > div:nth-child(2) > div:last-child img {
  margin-left: -150px;
  height: 200px;
}
#main > div:nth-child(2) > h3 > div:nth-child(3) > div:first-child img {
  margin-left: -100px;
  height: 150px;
}
#main > div:nth-child(2) > h3 > div:nth-child(3) > div:first-child img {
  margin-left: -100px;
  height: 150px;
}
#main
  > div:nth-child(2)
  > h3
  > div:nth-child(3)
  > div:last-child
  .card-img-top {
  height: 95px;
}
#main
  > div:nth-child(2)
  > h3
  > div:nth-child(3)
  > div:last-child
  .card-body
  > span:first-child {
  font-size: 0.2em;
}
/*定制每张商品卡片的背景色*/
#main > div:nth-child(2) > h3 .card {
  background-color: #e8e8e8;
}
/*定制电梯按钮的样式*/
#main > .btn-group-vertical {
  top: 100px;
  left: 10px;
}
#main > .btn-group-vertical > .btn-secondary:hover {
  background-color: #e4393c;
  border-color: #e4393c;
}
</style>