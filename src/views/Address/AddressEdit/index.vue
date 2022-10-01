<template>
  <div class="addressEdit">
    <Header :title="isEdit ? '编辑地址' : '添加地址'" path='/address'> </Header>
    <div class="address">
      <van-address-edit
        :area-list="areaList"
        show-set-default
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        v-show="!isEdit"
      />

      <van-address-edit
        :area-list="areaList"
        :address-info="AddressInfo"
        :isDefault="$route.params.isDefault"
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        @save="onUpdate"
        @delete="onDelete"
        v-show="isEdit"
      />
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
export default {
  name: "AddressEdit",
  components: { Header },
  data() {
    return {
      areaList: {
        province_list: {
          110000: "北京市",
          120000: "天津市",
          130000: "广东省",
        },
        city_list: {
          110100: "东城区",
          110200: "西城区",
          120100: "天津市",
          130100: "广州市",
          130200: "佛山市",
          130300: "东莞市",
          130400: "重视市",
        },
        county_list: {
          130101: "海珠区",
          130102: "天河区",
          130103: "花都区",
          130201: "顺德区",
          130202: "南海区",
          130203: "禅城区",
        },
      },
      searchResult: [],
      isEdit: true, //  默认编辑状态
      AddressInfo: {},
    };
  },
  created() {
    // 编辑地址 跳转过来会携带参数，默认是编辑地址
    // 如果是添加地址，params是个空对象
    // 空对象不为false或null，所以用parmas里面的id字段来判断
    this.isEdit = this.$route.params.id ? true : false;
    this.AddressInfo = this.$route.params;
    this.AddressInfo['isDefault'] = this.AddressInfo['isDefault']=='true'?true:false
  },
  methods: {
    onSave(content) {
      this.$store.dispatch("addAddress", content).then((res) => {
        console.log(res);
        this.$toast(res.msg);
        this.$router.push("/address");
      });
    },

    onDelete($event) {
      // console.log($event.id);
      this.$store.dispatch('deleteAddress',{id:$event.id})
        .then(res=>{
          console.log(res);
          this.$toast(res.msg);
        this.$router.push("/address");
      })
    },

    onUpdate($event) {
      // console.log($event);
      // let ad = this.AddressInfo
      this.$store.dispatch('updateAddress',$event)
        .then(res=>{
          console.log(res);
          this.$toast(res.msg);
        this.$router.push("/address");
      })
    },
  },
};
</script>

<style scoped lang="scss">
.addressEdit {
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #f6f6f6;
}

.address {
  .van-address-edit {
    padding: 0;
    font-size: 0.48rem;

    ::v-deep .van-button--danger {
      width: 4rem;
      height: 1rem;
      margin: 0 auto;
      font-size: 0.48rem;
      background-color: #b0352f;
    }

    ::v-deep .van-button--default {
      width: 4rem;
      height: 1rem;
      margin: 0.4rem auto;
      font-size: 0.48rem;
      color: #fff;
      background-color: #000;
    }
  }
}
</style>
