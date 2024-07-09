export interface DescribeMixStreamListRequest {
    /**
     * 主播流域名。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * App名称。
     * @example `liveApp****`
     */
    "AppName"?: string;
    /**
     * 合流任务的流名。
     * @example `liveStream****`
     */
    "StreamName"?: string;
    /**
     * 合流任务ID。如果您通过[CreateMixStream接口](~~194148~~)创建合流任务，请查看CreateMixStream接口调用返回的参数MixStreamId值。
     * @example `5b2a046e-74d7-385e-d2d7-8a5b87e4****`
     */
    "MixStreamId"?: string;
    /**
     * 开始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2020-09-11T12:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 结束时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2020-09-20T13:00:00Z`
     */
    "EndTime"?: string;
    /**
     * 页码。大于**0**且不超过Integer数据类型的最大值，默认值为**1**。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 每页可展示的记录数。默认值为**1000**。
     * @example `1000`
     */
    "PageSize"?: number;
}
