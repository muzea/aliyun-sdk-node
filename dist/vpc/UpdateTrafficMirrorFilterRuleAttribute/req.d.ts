export interface UpdateTrafficMirrorFilterRuleAttributeRequest {
    /**
     * 流量镜像入方向或出方向规则的实例ID。
     * @example `tmr-j6c89rzmtd3hhdugq****`
     */
    "TrafficMirrorFilterRuleId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `0c593ea1-3bea-11e9-b96b-88e9fe637760`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求，取值：
     * - **true**：发送检查请求，不会修改入方向和出方向规则的配置信息。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回2xx HTTP状态码并直接修改入方向和出方向规则的配置信息。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 要修改的入方向或出方向规则的优先级。数字越小，优先级越高。
     * @example `1`
     */
    "Priority"?: number;
    /**
     * 要修改的入方向或出方向规则需要镜像的网络流量使用的协议类型，取值：
     * - **ALL**：所有协议。
     * - **ICMP**：网络控制报文协议。
     * - **TCP**：传输控制协议。
     * - **UDP**：用户数据报协议。
     * @example `ICMP`
     */
    "Protocol"?: string;
    /**
     * 要修改的入方向或出方向规则的采集策略，取值：
     * - **accept**：采集网络流量。
     * - **drop**：不采集网络流量。
     * @example `accept`
     */
    "RuleAction"?: string;
    /**
     * 要修改的入方向或出方向规则网络流量的目的地址网段。
     * @example `10.0.0.0/24`
     */
    "DestinationCidrBlock"?: string;
    /**
     * 要修改的入方向或出方向规则网络流量的源地址网段。
     * @example `0.0.0.0/0`
     */
    "SourceCidrBlock"?: string;
    /**
     * 要修改的入方向或出方向规则网络流量的目的端口范围。
     * > 当**Protocol**取值为**ICMP**时，不支持修改端口范围。
     * @example `-1/-1`
     */
    "DestinationPortRange"?: string;
    /**
     * 要修改的入方向或出方向规则网络流量的源端口范围。
     * > 当**Protocol**取值为**ICMP**时，不支持修改端口范围。
     * @example `22/40`
     */
    "SourcePortRange"?: string;
    /**
     * 流量镜像的所属地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。关于流量镜像支持的地域，请参见[流量镜像概述](~~207513~~)。
     * @example `cn-hongkong`
     */
    "RegionId": string;
}
