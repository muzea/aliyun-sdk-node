export interface DescribeElasticQpsRecordRequest {
    /**
     * 开始时间。格式为时间戳，单位：毫秒。
     * @example `1684252800000`
     */
    "StartTime": number;
    /**
     * 结束时间。格式为时间戳，单位：毫秒。
     * @example `1688140799999`
     */
    "EndTime": number;
    /**
     * 要查询的DDoS高防实例的IP地址。
     * @example `203.107.XX.XX
    `
     */
    "Ip": string;
}
