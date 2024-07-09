export interface SubmitDynamicChartJobRequest {
    /**
     * 图表类型
     * @example `Line`
     */
    "ChartType": string;
    /**
     * 图表输入数据
     * @example `{"XlsFile":"https://your-bucket.oss-cn-shanghai.aliyuncs.com/obj.xls"}`
     */
    "Input": string;
    /**
     * 输出设置
     * @example `{"MediaURL":"https://your-bucket.oss-cn-shanghai.aliyuncs.com/obj.mp4","Bitrate":2000,"Width":800,"Height":680}`
     */
    "OutputConfig": string;
    /**
     * 图表配置
     * @example `{"Style":"Normal","TitleStartTime":"3000","ChartStartTime":"3000","VideoDuration":"15000"}`
     */
    "ChartConfig"?: string;
    /**
     * 主标题
     * @example `{"Text":"主标题","FontSize":"30","FontColor":"#000000","FontFile":"Microsoft YaHei"}`
     */
    "ChartTitle"?: string;
    /**
     * 副标题
     * @example `{"Text":"副标题","FontSize":"30","FontColor":"#000000","FontFile":"Microsoft YaHei"}`
     */
    "Subtitle"?: string;
    /**
     * 单位
     * @example `{"Text":"单位","FontSize":"30","FontColor":"#000000","FontFile":"Microsoft YaHei"}`
     */
    "Unit"?: string;
    /**
     * 数据来源
     * @example `{"Text":"数据来源","FontSize":"30","FontColor":"#000000","FontFile":"Microsoft YaHei"}`
     */
    "DataSource"?: string;
    /**
     * 图表背景
     * @example `{"Color":"#000000","ImageUrl":"http://your-bucket.oss-cn-shanghai.aliyuncs.com/obj.jpg"}`
     */
    "Background"?: string;
    /**
     * 坐标样式。XAxisFontInterval不传或为0则算法自动计算间距
     * @example `{"FontFile":"Microsoft YaHei","XAxisFontSize":"30","YAxisFontSize":"30","XAxisFontInterval":"30","AxisColor":"30"}`
     */
    "AxisParams"?: string;
    /**
     * 任务标题
     * @example `任务标题`
     */
    "Title"?: string;
    /**
     * 任务描述
     * @example `任务描述`
     */
    "Description"?: string;
    /**
     * 自定义数据，JSON格式
     * @example `{"user":"data"}`
     */
    "UserData"?: string;
}
