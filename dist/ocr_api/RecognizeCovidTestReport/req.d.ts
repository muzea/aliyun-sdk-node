export interface RecognizeCovidTestReportRequest {
    /**
     * * 本字段和body字段二选一，不可同时透传或同时为空。
     * * 图片链接（长度不超2048，不支持base64）。
     * @example `http://duguang-database-public.oss-cn-hangzhou.aliyuncs.com/covid_init_covid_test_report/test_report__data_pool_15a4f85478cb1bd69a5d631b182aba69.jpg_item_0_cls_covid_test_report.jpg`
     */
    "Url"?: string;
    /**
     * * 本字段和URL字段二选一，不可同时透传或同时为空。
     * * 图片二进制文件，最大10MB。
     * * 使用HTTP方式调用，把图片二进制文件放到HTTP body中上传即可。
     * * 使用SDK的方式调用，把图片放到SDK的body中即可。
     * @example `图片二进制文件`
     */
    "body"?: string;
    /**
     * * 当一张图有多个子图时，是否要返回多个识别结果,默认不需要。
     * * true：返回所有子图识别结果；false：返回检测日期最新的一个结果。
     * @example `false`
     */
    "MultipleResult"?: boolean;
}
