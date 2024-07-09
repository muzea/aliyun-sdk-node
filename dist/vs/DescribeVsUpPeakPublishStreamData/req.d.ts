export interface DescribeVsUpPeakPublishStreamDataRequest {
    /**
     * 拉流开始时间，UTC格式, StartTime和EndTime时间间隔在30天内
     * @example `2017-12-10T20:00:00Z`
     */
    "StartTime": string;
    /**
     * 拉流结束时间，UTC格式, StartTime和EndTime时间间隔在30天内,且EndTime超过当前时间
     * @example `2017-12-10T21:00:00Z`
     */
    "EndTime": string;
    /**
     * 域名统计开关，取值：on或者off；on：开启域名统计级别，off：用户级别数据。默认统计用户级别数据
     * @example `on`
     */
    "DomainSwitch"?: string;
    /**
     * 输入域名，查域名粒度数据
     * @example `example.com`
     */
    "DomainName"?: string;
}
