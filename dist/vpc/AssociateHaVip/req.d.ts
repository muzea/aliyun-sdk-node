export interface AssociateHaVipRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `0c593ea1-3bea-11e9-b96b-88e9fe63****`
     */
    "ClientToken"?: string;
    /**
     * HaVip实例所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 要绑定的HaVip实例ID。
     * @example `havip-2zeo05qre24nhrqpy****`
     */
    "HaVipId": string;
    /**
     * 与HaVip实例绑定的ECS实例ID。
     * @example `i-faf344422ffsfad****`
     */
    "InstanceId": string;
    /**
     * 要绑定HaVip的实例类型，取值：
     * - **EcsInstance**：云服务器ECS实例。
     * - **NetworkInterface**：弹性网卡实例，当绑定HaVip的实例为弹性网卡，该参数必须填写。
     * @example `EcsInstance`
     */
    "InstanceType"?: string;
}
