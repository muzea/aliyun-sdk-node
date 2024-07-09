export interface GetResolveStatisticsRequest {
    /**
     * 需要获取统计信息的域名。
     * @example `www.aliyun.com`
     */
    "DomainName": string;
    /**
     * 数据粒度，可选值：**day**和**month**。
     * @example `month`
     */
    "Granularity": string;
    /**
     * 时间片长度。
     * @example `2`
     */
    "TimeSpan": number;
    /**
     * 解析的协议类型，可选值：http（默认）和https。
     * @example `https`
     */
    "ProtocolName"?: string;
}
