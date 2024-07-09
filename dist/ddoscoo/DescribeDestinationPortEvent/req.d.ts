export interface DescribeDestinationPortEventRequest {
    /**
     * 服务地域。取值：
     * - **cn**：中国内地。
     * - **cn-hongkong**：非中国内地。
     * @example `cn`
     */
    "Region": string;
    /**
     * 要查询的攻击事件类型。取值：
     * - **defense**：流量型攻击清洗事件。
     * - **blackhole**：流量型攻击黑洞事件。
     * @example `defense`
     */
    "EventType": string;
    /**
     * 查询开始时间。时间戳格式，单位：秒。
     * > 必须为整点分钟。
     * @example `1720059000`
     */
    "StartTime": number;
    /**
     * 攻击者的IP地址。
     * @example `203.107.XX.XX
    `
     */
    "Ip": string;
    /**
     * 要返回的目的端口数量。按照请求包数量由大到小排序，默认返回前**10**个IP。
     * @example `2`
     */
    "Range": number;
}
