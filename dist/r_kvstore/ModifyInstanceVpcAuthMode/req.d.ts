export interface ModifyInstanceVpcAuthModeRequest {
    /**
     * 实例ID。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId": string;
    /**
     * 专有网络下的认证模式，取值：
     * * **Open**：通过密码认证。
     * * **Close**：关闭密码认证，即开启免密访问。
     * > 默认值为**Open**。
     * @example `Close`
     */
    "VpcAuthMode": string;
}
