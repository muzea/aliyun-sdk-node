export interface DescribeLiveDomainPublishErrorCodeRequest {
    /**
     * 推流域名，允许传入多个推流域名，多个域名之间用英文逗号（,）分隔。
     * > 该参数为必填参数。
     * @example `example.com,example.aliyundoc.com`
     */
    "DomainName"?: string;
    /**
     * 按照AppName进行过滤汇聚，若指定了AppName，则DomainName必须指定一个特定的推流域名。
     * @example `AppName`
     */
    "AppName"?: string;
    /**
     * 起始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * > 不写默认查询过去1小时的数据。
     * @example `2016-06-29T09:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 结束时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * > 不写默认查询过去1小时的数据。
     * @example `2016-06-29T09:10:00Z`
     */
    "EndTime"?: string;
}
