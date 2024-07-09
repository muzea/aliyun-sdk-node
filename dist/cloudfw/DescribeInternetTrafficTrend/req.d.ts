export interface DescribeInternetTrafficTrendRequest {
    /**
     * 访问者源ip地址。
     * @example `101.80.171.196`
     */
    "SourceIp"?: string;
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**（默认）：表示中文
     * - **en**：表示英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 互联网流量方向。取值：
     * - **in**：外对内流量访问控制
     * - **out**：内对外流量访问控制
     * @example `in`
     */
    "Direction"?: string;
    /**
     * 查询开始时间。使用秒级时间戳格式表示。
     * @example `1670307484`
     */
    "StartTime": string;
    /**
     * 查询结束时间。使用秒级时间戳格式表示。
     * @example `1674958929`
     */
    "EndTime": string;
    /**
     * 溯源码。
     * @example `yundun`
     */
    "SourceCode": string;
    /**
     * 公网源IP地址。
     * @example `47.112.210.136`
     */
    "SrcPublicIP"?: string;
    /**
     * 私网源IP地址。
     * @example `10.100.134.60`
     */
    "SrcPrivateIP"?: string;
    /**
     * 采集的流量类型。取值：
     *
     * - **max**（默认）：流量峰值
     *
     * - **avg**：流量均值
     * @example `max`
     */
    "TrafficType"?: string;
}
