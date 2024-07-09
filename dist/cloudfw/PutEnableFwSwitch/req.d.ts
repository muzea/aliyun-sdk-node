export interface PutEnableFwSwitchRequest {
    /**
     * 访问者源IP地址。
     * @example `192.0.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 接收消息的语言类型。
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * IP地址列表。
     * > IpaddrList、RegionList、ResourceTypeList三个参数不允许同时为空，必须为其中一个参数设置取值。
     * @example `["192.0.X.X","192.0.X.X"]`
     */
    "IpaddrList"?: string[];
    /**
     * 区域列表。
     * > IpaddrList、RegionList、ResourceTypeList三个参数不允许同时为空，必须为其中一个参数设置取值。
     * @example `["cn-hangzhou","cn-shanghai"]`
     */
    "RegionList"?: string[];
    /**
     * 资产类型列表。
     * 取值：
     * - BastionHostIP：堡垒机出口IP。
     * - BastionHostIngressIP：堡垒机入口IP。
     * - EcsEIP：ECS EIP。
     * - EcsPublicIP ：ECS公网IP。
     * - EIP：弹性公网IP。
     * - EniEIP：弹性网卡EIP。
     * - NatEIP：NAT EIP。
     * - SlbEIP：SLB EIP。
     * - SlbPublicIP：SLB公网IP。
     * - NatPublicIP：NAT公网IP。
     * - HAVIP：高可用虚拟IP。
     * > IpaddrList、RegionList、ResourceTypeList三个参数不允许同时为空，必须为其中一个参数设置取值。
     * @example `["EcsPublicIp","NatEip"]`
     */
    "ResourceTypeList"?: string[];
}
