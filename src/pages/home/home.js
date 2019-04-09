const peidata = {
  data: [{
      name: '太阳能设备一',
      value: 19000,
      unit: '1234元 1453kW·h'
    },
    {
      name: '太阳能设备二',
      value: 12000,
      unit: '1234元 吨'

    },
    {
      name: '太阳能设备三',
      value: 15000,
      unit: '1234元 1453立方米'
    }
  ]
}

const paneldata = {
  total: 3000,
  name: '2019年1月能耗总费用',
  dian: 25,
  qi: 60,
  shui: 15
}


const linedata = {
  xData: ['一月 ', '二月', '三月', '四月', '五月', '六月', '七月', '八月 ', '九月', '十月', '十一月', '十二月'],
  yData: [1000, 1400, 1300, 2000, 1800, 5000, 3000, 1000, 1400, 1300, 5000, 3000]
}

const bardata = {
  xData: ['3号教学楼 ', '图书馆', '体育馆', '教学楼2', '科技楼', '办公楼', '水楼'],
  yData: [1000, 1400, 1300, 2000, 1800, 5000, 3000]
}


// 多色折现图，柱形图
const allbar = {
  xData: ['3号教学楼 ', '图书馆', '体育馆', '教学楼2', '科技楼', '办公楼', '水楼', '图书馆', '3号教学楼', '图书馆'],
  yData: [{
      name: '电',
      data: [1000, 1400, 1300, 2000, 1800, 5000, 3000]
    },
    {
      name: '水',
      data: [1400, 1000, 3000, 1300, 2000, 1800, 5000]
    },
    {
      name: '气',
      data: [1300, 1000, 1400, 2000, 5000, 1800, 3000]
    }
  ]
}

function randomNum(minNum, maxNum) {
  return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
}

export const firstData = function (type = 'year', value) {
  let pieData = [...peidata.data]
  let panelData = Object.assign({}, paneldata)

  if (type == 'year') {
    pieData.forEach(item => {
      item.value = randomNum(13000, 33000)
    })
  } else if (type == 'month') {
    pieData.forEach(item => {
      item.value = randomNum(9000, 13000)
    })
  } else {
    pieData.forEach(item => {
      item.value = randomNum(500, 2000)
    })
  }
  // 水电气
  panelData.total = 0;
  pieData.forEach(item => {
    panelData.total += item.value
  })
  panelData.shui = (pieData[0].value / panelData.total * 100).toFixed(2)
  panelData.dian = (pieData[1].value / panelData.total * 100).toFixed(2)
  panelData.qi = (pieData[2].value / panelData.total * 100).toFixed(2)
  return {
    pieData,
    panelData
  }
}
export const secondData = function (type = 'year', value) {
  let lineData = Object.assign({}, linedata)
  let arr = [];
  let valueArr = [];
  if (type == 'year') {
    for (let i = 1; i <= 12; i++) {
      valueArr.push(randomNum(1000, 8000))
    }

  } else if (type == 'month') {
    for (let i = 1; i < 31; i++) {
      arr.push(`${i}号`);
      valueArr.push(randomNum(100, 800))
    }
    lineData.xData = arr;

  } else {

    for (let i = 0; i < 24; i++) {
      arr.push(`${String(i).padStart(2, '0')}:00`)
      valueArr.push(randomNum(50, 200))
    }
    lineData.xData = arr;

  }
  lineData.yData = valueArr
  return lineData
}

export const threeData = function (type = 'year', value) {
  let barData = Object.assign({}, bardata)
  let arr = [];
  let valueArr = [];
  let m = null,
    n = null;
  if (type == 'year') {
    m = 1000;
    n = 8000;
  } else if (type == 'month') {
    m = 100;
    n = 800;
  } else {
    m = 50;
    n = 200;
  }
  for (let i = 0; i < 8; i++) {
    valueArr.push(randomNum(m, n))
  }
  valueArr.sort((a, b) => {
    return b - a
  })
  barData.yData = valueArr
  return barData
}


export const fourData = function (type = 'year', value) {
  let allBar = Object.assign({}, allbar)
  let valueArr1 = [];
  let valueArr2 = [];
  let valueArr3 = [];
  let m = null,
    n = null
  if (type == 'year') {
    m = 1000;
    n = 3000;
  } else if (type == 'month') {
    m = 100;
    n = 800;
  } else {
    m = 50;
    n = 200;
  }
  for (let i = 1; i < 11; i++) {
    valueArr1.push(randomNum(m, n))
    valueArr2.push(randomNum(m, n))
    valueArr3.push(randomNum(m, n))
  }
  valueArr1.sort((a, b) => {
    return b - a
  })
  valueArr2.sort((a, b) => {
    return b - a
  })
  valueArr3.sort((a, b) => {
    return b - a
  })
  allBar.yData[0].data = valueArr1
  allBar.yData[1].data = valueArr2
  allBar.yData[2].data = valueArr3
  return allBar
}
