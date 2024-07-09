export interface ModifyControlPolicyPositionRequest {
    /**
     * 访问者源IP地址。
     * @example `192.0.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 接收消息的语言类型。取值：
     * - zh（默认）：中文。
     * - en：英文。
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 互联网边界防火墙IPv4访问控制策略的流量方向。取值：
     * - in：外对内流量。
     * - out：内对外流量。
     * @example `in`
     */
    "Direction": string;
    /**
     * 为互联网边界防火墙IPv4访问控制策略设置一个新的优先级。
     * 优先级使用数字表示，输入数字1表示优先级最高，数字越大优先级越低。
     * > 新的优先级数字不能超出您已创建的互联网边界防火墙IPv4策略优先级的范围，否则会导致调用该接口时出错。
     * > 建议您在调用该接口前，先调用[DescribePolicyPriorUsed](~~138862~~)查询互联网边界防火墙指定流量方向的IPv4策略优先级范围。
     * @example `1`
     */
    "NewOrder": string;
    /**
     * 要修改的互联网边界防火墙IPv4访问控制策略当前的优先级。
     * @example `5`
     */
    "OldOrder": string;
}
