<template>
  <div class="dateControl">
    <span
      v-for="(item,index) in dateSpecific"
      :class="{ color:indexColor == index}"
      @click="colorIndex(index)"
    >{{item.name}}</span>
    <!-- 年 -->
    <DatePicker
      style="width:80px;text-align:right"
      v-if="type=='year'"
      transfer
      :open="open"
      :value="yearData"
      type="year"
      :options="options"
      @on-change="yearChange"
    >
      <a
        href="javascript:void(0)"
        @click="open=!open"
      >
        {{ yearData }}
        <Icon type="md-arrow-dropdown" />
      </a>
    </DatePicker>
    <!-- 月 -->
    <DatePicker
      style="width:80px;text-align:right"
      v-else-if="type=='month'"
      :open="open"
      :value="monthData"
      transfer
      :options="options"
      type="month"
      @on-change="monthChange"
    >
      <a
        href="javascript:void(0)"
        @click="open=!open"
      >
        {{ monthData }}
        <Icon type="md-arrow-dropdown" />
      </a>
    </DatePicker>
    <!-- 日 -->
    <DatePicker
      style="width:80px;text-align:right"
      v-else
      :open="open"
      :value="dayData"
      :options="options"
      transfer
      type="date"
      @on-change="dateChange"
    >
      <a
        href="javascript:void(0)"
        @click="open=!open"
      >
        {{ dayData }}
        <Icon type="md-arrow-dropdown" />
      </a>
    </DatePicker>
  </div>
</template>

<script>

export default {
  name: "DateSpecific",
  data() {
    return {
      open: false,
      options: {
        disabledDate(date) {
          return date && date.valueOf() > Date.now();
        }
      },
      yearData: '2019',
      monthData: '',
      dayData: '',
      year_show: true,
      month_show: false,
      day_show: false,
      indexColor: 0,
      type: 'year',
      value: '',
      dateSpecific: [{
        id: 1,
        name: '年'
      }, {
        id: 2,
        name: '月'
      }, {
        id: 3,
        name: '日'
      }],
      dataOptions: {
        disabledDate(date) {
          const disabledDay = date.getDate();
          return disabledDay === 15;
        }
      },
    }
  },
  created() {
    this.yearData = String(new Date().getFullYear())
    this.monthData = `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}`
    this.dayData = `${this.monthData}-${String(new Date().getDate()).padStart(2, '0')}`
  },
  methods: {
    closePicker() {
      this.open = false;
    },
    colorIndex: function (index) {
      this.indexColor = index;
      this.open = false;
      if (index == 0) {
        this.year_show = true
        this.month_show = false
        this.day_show = false
        this.type = "year"
        let obj = {
          type: this.type,
          value: this.yearData
        }
        this.$emit('change', obj)
      } else if (index == 1) {
        this.year_show = false
        this.month_show = true
        this.day_show = false
        this.type = "month"
        let obj = {
          type: this.type,
          value: this.monthData
        }
        this.$emit('change', obj)
      } else {
        this.year_show = false
        this.month_show = false
        this.day_show = true
        this.type = "day"
        let obj = {
          type: this.type,
          value: this.dayData
        }
        this.$emit('change', obj)
      }
    },
    yearChange(year) {
      this.yearData = year;
      this.open = false;
      let obj = {
        type: this.type,
        value: year
      }
      this.$emit('change', obj)
    },
    monthChange(month) {
      this.monthData = month;
      this.open = false;
      let obj = {
        type: this.type,
        value: month
      }
      this.$emit('change', obj)
    },
    dateChange(date) {
      this.dayData = date;
      this.open = false;
      let obj = {
        type: this.type,
        value: date
      }
      this.$emit('change', obj)
    },
  }
}
</script>

<style scoped>
span {
  display: inline-block;
  width: 48px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  margin-right: 15px;
  border-radius: 3px;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
  background-color: #fff;
}
.color {
  background: rgba(53, 81, 250, 1);
  border: none;
  color: #fff;
}
</style>
