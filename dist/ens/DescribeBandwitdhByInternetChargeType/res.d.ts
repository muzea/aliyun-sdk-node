export interface DescribeBandwitdhByInternetChargeTypeResponse {
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
     * @example `95BandwidthByMonth`
     */
    InternetChargeType: string;
    /**
     * 公共参数，每个请求的ID都是唯一的，可用于排查和定位问题。
     * @example `08027633-8501-5A36-B90D-F7C38B5EC75D`
     */
    RequestId: string;
    /**
     * 数据时间戳，日期格式按照ISO8601表示法，并使用UTC时间。例如：2016-10-20T04:00:00Z。
     * @example `2019-10-12T05:45:00Z`
     */
    TimeStamp: string;
}
