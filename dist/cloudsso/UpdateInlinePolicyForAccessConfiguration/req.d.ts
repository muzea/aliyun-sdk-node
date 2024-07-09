export interface UpdateInlinePolicyForAccessConfigurationRequest {
    /**
     * 目录ID。
     * @example `d-00fc2p61****`
     */
    "DirectoryId": string;
    /**
     * 访问配置ID。
     * @example `ac-00jhtfl8thteu6uj****`
     */
    "AccessConfigurationId": string;
    /**
     * 内置策略名称。
     * @example `InlinePolicy`
     */
    "InlinePolicyName": string;
    /**
     * 新的内置策略内容。
     * 长度：最大4096个字符。
     * 关于权限策略的语法和结构，请参见[权限策略语法和结构](~~93739~~)。
     * @example `{"Statement": [{"Action": "*","Effect": "Allow","Resource": "*"}],"Version": "1"}`
     */
    "NewInlinePolicyDocument"?: string;
}
