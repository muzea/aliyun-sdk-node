export interface UnassociateHaVipRequest {
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。`ClientToken`只支持ASCII字符，且不能超过64个字符。
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
     * 要解绑的HaVip实例ID。
     * @example `havip-2zeo05qre24nhrqpy****`
     */
    "HaVipId": string;
    /**
     * 与HaVip解绑的ECS实例ID或弹性网卡实例ID。
     * @example `i-faf344422ffsfad****`
     */
    "InstanceId": string;
    /**
     * 是否强制解绑与HaVip绑定的ECS实例或弹性网卡实例，取值：
     * - **True**：强制解绑。
     * - **False** （默认值）：不强制解绑。
     * > 如果该参数取值为**False**，无法解绑HaVip绑定的主实例。
     * @example `True`
     */
    "Force"?: string;
    /**
     * 要解绑HaVip的实例类型，取值：
     * - **EcsInstance**：云服务器ECS实例。
     * - **NetworkInterface**：弹性网卡实例。
     * > 当要解绑的实例为弹性网卡时，该参数必须填写。
     * @example `EcsInstance`
     */
    "InstanceType"?: string;
}
