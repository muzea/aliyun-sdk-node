export interface DescribeVpnSslServerLogsRequest {
    /**
     * SSL服务端所在的地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * SSL服务端的ID。
     * @example `vss-bp155e9yclsg1xgq4****`
     */
    "VpnSslServerId": string;
    /**
     * SSL客户端证书ID。
     * @example `vsc-m5euof6s5jy8vs5kd****`
     */
    "SslVpnClientCertId"?: string;
    /**
     * 日志起始时间，仅支持传入UNIX秒级时间戳，例如1600738962，1600738962表示的时间为2020年09月22日09:42:42。
     * > 如果指定**From**，则必须指定**To**或**MinutePeriod**。
     * @example `1600738962`
     */
    "From"?: number;
    /**
     * 日志结束时间，仅支持传入UNIX秒级时间戳，例如1600738962，1600738962表示的时间为2020年09月22日09:42:42。
     * > 如果指定**To**，则必须指定**From**或**MinutePeriod**。
     * @example `1600738962`
     */
    "To"?: number;
    /**
     * 日志周期。单位：分钟。
     * > 如果不指定**From**和**To**，则必须指定**MinutePeriod**。
     * @example `10`
     */
    "MinutePeriod"?: number;
    /**
     * 列表的页码，默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页的条目数，最大值：**50**，默认值：**10**。
     * @example `10`
     */
    "PageSize"?: number;
}
