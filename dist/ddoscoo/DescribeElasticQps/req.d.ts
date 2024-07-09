export interface DescribeElasticQpsRequest {
    /**
     * 服务地域。取值：
     * - **cn**：中国内地。
     * - **cn-hongkong**：非中国内地。
     * @example `cn`
     */
    "Region": string;
    /**
     * 要查询的DDoS高防实例的IP地址。
     * @example `203.107.XX.XX
    `
     */
    "Ip"?: string;
    /**
     * 查询开始时间。时间戳格式，单位：秒。
     * > 必须为整点分钟。
     * @example `1684252800`
     */
    "StartTime": number;
    /**
     * 查询结束时间。时间戳格式，单位：秒。
     * > 必须为整点分钟。
     * @example `1684339200`
     */
    "EndTime": number;
    /**
     * 采样间隔，单位：秒。必须是60秒的倍数，默认60s。返回结果可缩放。
     * @example `60`
     */
    "Interval"?: string;
}
