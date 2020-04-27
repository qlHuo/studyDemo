(function () {
    // 1.实例化对象
    let myChart = echarts.init(document.querySelector(".bar .chart"));
    // 2.指定配置项和数据
    let option = {
        color: ["#2f89cf"],
        tooltip: {
            trigger: "axis",
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: "0",
            right: "0",
            bottom: "4%",
            top: "10px",
            containLabel: true
        },

        xAxis: [
            {
                type: "category",
                data: [
                    "旅游行业",
                    "教育培训",
                    "游戏行业",
                    "医疗行业",
                    "电商行业",
                    "社交行业",
                    "金融行业"
                ],
                axisTick: {
                    alignWithLabel: true
                },
                // 设置x轴标签文字样式
                // x轴的文字颜色和大小
                axisLabel: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: "12"
                },
                //  x轴样式不显示
                axisLine: {
                    show: false,
                    // 如果想要设置单独的线条样式 
                    // lineStyle: {
                    //     color: "rgba(255,0,0,.9)",
                    //     width: 1,
                    //     type: "solid"
                    // }
                }
            },

        ],
        yAxis: [
            {
                type: "value",
                // y轴的文字颜色和大小
                axisLabel: {
                    color: "rgba(255,255,255,.6)",
                    fontSize: "12"
                },
                // y轴分割线的颜色
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                }
            }
        ],
        series: [
            {
                name: "直接访问",
                type: "bar",
                barWidth: "35%",
                data: [200, 300, 300, 900, 1500, 1200, 600],
                itemStyle: {
                    // 修改柱子为圆角
                    barBorderRadius: 5
                }
            }
        ]
    };
    // 3.把配置项给实例对象
    myChart.setOption(option);
    // 4.图标跟随屏幕自适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();