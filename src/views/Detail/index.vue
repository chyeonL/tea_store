<template>
  <keep-alive>
    <div id="detail">    
    <Header :opac='opacity' :showHeader='showHeader'/>

    <section ref="wrapper">
      <div class="content">
        <Swiper :swiperList='swiperList'/>

        <div class="brief">
          <div class="title">
            <h3>{{goods.name}}</h3>
            <h5 class="description">{{goods.content}}</h5>
          </div>
          <div class="price">
            <div class="new">
              <span class="coin">￥</span>
              <span>{{goods.price}}</span>
            </div>
            <div class="old">价格￥<span>{{goods.oldPrice}}</span></div>
          </div>
        </div>

        <div class="info">
          <dl class="teaCoin">
            <dt>茶币</dt>
            <dd>fasd dsaf</dd>
          </dl>
          <dl class="service">
            <dt>服务</dt>
            <dd>满99元包邮</dd>
            <dd>退货包运费</dd>
          </dl>
        </div>

        <div class="detail">
          <div class="headliner">商品详情</div>
          <h2><img v-lazy="goods.imgUrl" alt="" /></h2>
        </div>        

        <div class="recommend">
          <div class="headliner">商品推荐</div>
          <h2><img v-lazy="goods.imgUrl" alt="" /></h2>
        </div>
      </div>
    </section>

    <Footer />
  </div>
  </keep-alive>
</template>

<script>
import Footer from "@/components/Detail/Footer";
import Swiper from "@/components/Detail/Swiper";
import Header from "@/components/Detail/Header";

import BetterScroll from "better-scroll";
import {mapState,mapGetters} from 'vuex'

export default {
  name: "Detail",
  components: { Footer, Swiper, Header },
  data() {
    return {
      bs: null,
      opacity: 0,
      showHeader: true,
      id:0
    };
  },
  computed: {
    ...mapState('Detail',['goods']),
    ...mapGetters('Detail',['swiperList'])
  },
  created() {
    this.getData()
  },
  activated(){
    if(this.id != this.$route.query.id) {
      this.getData()
      this.id = this.$route.query.id
    }
    else return
  },
  methods: {
    async getData(){
      // mock
      await this.$mock.mockDetail().then(res=>{
        // console.log(res);
        this.$store.commit('Detail/GETDETAIL',res.data)
      })

      // await this.$store.dispatch('Detail/getDetail',this.$route.query.id)

      this.$nextTick(() => {
      this.bs = new BetterScroll(this.$refs.wrapper, {
        mouseWheel: true,
        movable:true,   //拉拽效果
        click: true,
        bounce: false, //阻止回弹效果
        probeType: 3,
      });                

      this.bs.on("scroll", (pos) => {
        let y = Math.abs(pos.y);
        this.opacity = y / 400;

        if (y < 200) this.showHeader = true;
        else this.showHeader = false;
      });
      // console.log(this.bs);
    });
    }
  },
};
</script>

<style lang="scss" scoped>
#detail {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background-color: #f0eded;

  Header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 1.2rem;
    z-index: 999;
  }

  section {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .brief {
      width: 100%;
      // height: 3.5rem;
      padding: 0.2667rem;
      margin-bottom: 0.4rem;
      background-color: #fff;
      .title {
        padding-bottom: 0.1333rem;
        border-bottom: 1px solid #ccc;
        h3 {
          font-weight: normal;
          font-size: .5333rem;
        }
        h5 {
          color: #999;
          font-weight: normal;
          font-size: .4rem;
          margin: .1667rem 0 0;
        }
      }

      .new {
        margin-top: .2667rem;
        color: red;
        font-size: .6rem;
        .coin {
          font-size: 0.45rem;
          margin-right: 0.3rem;
        }
      }

      .old {
        font-size: .4rem;
        color: #999;
        span {
          text-decoration: line-through;
        }
      }
    }

    .info {
      width: 100%;
      margin-bottom: 0.4rem;
      background-color: #fff;
      padding: 0.1rem 0.2667rem;
      dl {
        display: flex;
        align-items: center;
        width: 90%;
        padding: 0.2667rem 0;
        font-size: 0.45rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        dt {
          color: #706f6f;
          margin-right: 0.6rem;
        }
        dd {
          margin-right: 0.4rem;
        }
      }

      .teaCoin {
        border-bottom: 1px solid #ccc;
      }
    }

    .detail {
      width: 100%;
      margin-bottom: 0.4rem;
      background-color: #fff;
      .headliner {
        font-size: 0.48rem;
        padding: 0.4rem 0 0.2667rem 0.2667rem;
        border-left: 0.1rem solid #9e0d0d;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }

    .recommend {
      width: 100%;
      margin-bottom: 0.4rem;
      background-color: #fff;
      .headliner {
        font-size: 0.48rem;
        padding: 0.4rem 0 0.2667rem 0.2667rem;
        border-left: 0.1rem solid #9e0d0d;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
