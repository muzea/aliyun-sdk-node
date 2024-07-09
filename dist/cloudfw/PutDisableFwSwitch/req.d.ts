export interface PutDisableFwSwitchRequest {
    /**
     * 访问者源IP地址。
     * @example `192.0.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 接收消息的语言类型。取值：
     * - **zh**（默认）：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * IP地址列表。
     * > IpaddrList、RegionList、ResourceTypeList三个参数不允许同时为空，必须为其中一个参数设置取值。
     * @example `["192.0.XX.XX","192.0.XX.XX"]`
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
     * > IpaddrList、RegionList、ResourceTypeList三个参数不允许同时为空，必须为其中一个参数设置取值。
     * @example `["EcsPublicIp","NatEip"]`
     */
    "ResourceTypeList"?: string[];
}
