export interface UnassociateAnycastEipAddressRequest {
    /**
     * 要解绑的云资源实例ID。
     * @example `lb-2zebb08phyczzawe****`
     */
    "BindInstanceId": string;
    /**
     * 要解绑的云资源实例地域ID。
     * @example `us-west-1`
     */
    "BindInstanceRegionId": string;
    /**
     * 要解绑的云资源实例类型。取值：
     * - **SlbInstance**：专有网络类型的CLB实例。
     * - **NetworkInterface**：弹性网卡。
     * @example `SlbInstance`
     */
    "BindInstanceType": string;
    /**
     * Anycast EIP实例ID。
     * @example `aeip-2zeerraiwb7ujsxdc****`
     */
    "AnycastId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `02fb3da4-130e-11e9-8e44-001****`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会解绑后端实例。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。
     * @example `false`
     */
    "DryRun"?: string;
    /**
     * 要解绑的弹性网卡的辅助私网IP。
     * 只有当**BindInstanceType**取值为**NetworkInterface**时，该参数生效。不输入时，该参数默认为弹性网卡的主私网IP。
     * @example `192.168.XX.XX`
     */
    "PrivateIpAddress"?: string;
}
