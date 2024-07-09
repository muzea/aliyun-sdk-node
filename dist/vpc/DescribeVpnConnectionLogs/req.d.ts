export interface DescribeVpnConnectionLogsRequest {
    /**
     * IPsec连接所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `eu-central-1`
     */
    "RegionId": string;
    /**
     * IPsec连接的ID。
     * @example `vco-m5evqnds4y459flt3****`
     */
    "VpnConnectionId": string;
    /**
     * 日志起始时间，仅支持传入UNIX秒级时间戳，例如1671003744，1671003744表示的时间为2022年12月14日15:42:24。
     * > 如果指定**From**，则必须指定**To**或**MinutePeriod**。
     * @example `1671003744`
     */
    "From"?: number;
    /**
     * 日志结束时间，仅支持传入UNIX秒级时间戳，例如1671004344，1671004344表示的时间为2022年12月14日15:52:24。
     * > 如果指定**To**，则必须指定**From**或**MinutePeriod**。
     * @example `1671004344`
     */
    "To"?: number;
    /**
     * 日志周期。取值范围：**1**~**10**。单位：分钟。
     * > 如果不指定**From**和**To**，则必须指定**MinutePeriod**。
     * @example `10`
     */
    "MinutePeriod"?: number;
    /**
     * 列表的页码。默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页显示的条目数。取值范围：**1**~**50**。默认值：**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * IPsec连接的隧道ID。
     * 仅双隧道模式的IPsec连接支持配置该项。
     * @example `tun-opsqc4d97wni27****`
     */
    "TunnelId"?: string;
}
