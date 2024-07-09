export interface DescribeEniMonitorDataRequest {
    /**
     * 辅助网卡的ID。默认查询指定实例上所有已绑定的辅助网卡。
     * @example `eni-bp19da36d6xdwey****`
     */
    "EniId"?: string;
    /**
     * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 辅助网卡绑定的实例ID。
     * @example `i-bp1a5zr3u7nq9cx****`
     */
    "InstanceId": string;
    /**
     * 获取数据的起始时间点。按照[ISO 8601](~~25696~~)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。如果指定的秒（ss）不是00，则自动换算为下一分钟。
     * @example `2018-05-21T12:19:00Z`
     */
    "StartTime": string;
    /**
     * 获取数据的结束时间点。按照[ISO 8601](~~25696~~)标准表示，并使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。如果指定的秒（ss）不是00，则自动换算为下一分钟。
     * @example `2018-05-21T12:22:00Z`
     */
    "EndTime": string;
    /**
     * 获取监控数据的间隔时间，单位：秒。取值范围：
     * - 60。
     * - 600。
     * - 3600。
     * 默认值：60。
     * @example `60`
     */
    "Period"?: number;
}
