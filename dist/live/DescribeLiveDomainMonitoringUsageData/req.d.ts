export interface DescribeLiveDomainMonitoringUsageDataRequest {
    /**
     * 域名。若参数为空，默认返回所有域名数据，支持批量域名查询，多个域名用半角逗号（,）分隔。
     * @example `example.com`
     */
    "DomainName"?: string;
    /**
     * 开始时间。获取数据起始时间点，日期格式按照ISO8601表示法，并使用UTC时间。
     * - 格式为：YYYY-MM-DDThh:mm:ssZ。
     * - 最小数据粒度为1小时。
     * - 不写默认读取过去24小时数据。
     * @example `2022-12-10T20:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 结束时间。结束时间需大于起始时间；获日期格式按照ISO8601表示法，并使用UTC时间。格式为：YYYY-MM-DDThh:mm:ssZ。
     * @example `2022-12-10T22:00:00Z`
     */
    "EndTime"?: string;
    /**
     * 直播中心Region。若参数为空，默认返回所有Region合并后数据，支持批量查询，多个Region用半角逗号（,）分隔。
     * @example `cn-shanghai`
     */
    "Region"?: string;
    /**
     * 监播场次ID，若参数为空，默认返回所有监播场次合并后数据，支持批量查询，多个ID用半角逗号（,）分隔。
     * @example `e62af24d-a354-3b0c-9f1f-da592c4b****`
     */
    "InstanceId"?: string;
    /**
     * 查询的时间粒度，可以使用**3600**和**86400**，即小时和天粒度。
     * @example `3600`
     */
    "Interval"?: string;
    /**
     * 分组键。默认为**resolution**，即按清晰度分组，可选值为**domain**，**region**，**instance**，**resolution**之一。可以指定多个，多个值用半角逗号（,）分隔。
     * @example `resolution`
     */
    "SplitBy"?: string;
}
