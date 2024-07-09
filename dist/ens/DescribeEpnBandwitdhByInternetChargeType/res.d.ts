export interface DescribeEpnBandwitdhByInternetChargeTypeResponse {
    /**
     * 带宽计费值，单bit/s
     * @example `123`
     */
    BandwidthValue: number;
    /**
     * 网络计费类型，取值：
     * - BandwidthByDay：日峰值带宽。
     * - 95BandwidthByMonth：月95峰值带宽。
     * - PayByBandwidth4thMonth：月第四峰值带宽。
     * - PayByBandwidth：固定规格带宽。
     * 只能有一种计费方式，如果已存在计费方式，则新值默认无效，以已存在的为准。
     * @example `BandwidthByDay`
     */
    InternetChargeType: string;
    /**
     * 请求ID。
     * @example `216BCED0-E055-5DDB-8E06-4084A62A4A44`
     */
    RequestId: string;
    /**
     * 查询监控信息的时间戳。按照ISO8601标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2019-10-12T05:45:00Z`
     */
    TimeStamp: string;
}
