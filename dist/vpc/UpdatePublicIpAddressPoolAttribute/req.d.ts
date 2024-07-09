export interface UpdatePublicIpAddressPoolAttributeRequest {
    /**
     * IP地址池的实例ID。
     * @example `pippool-6wetvn6fumkgycssx****`
     */
    "PublicIpAddressPoolId": string;
    /**
     * 地址池实例的名称。
     * 描述可以为空，或输入1~128个字符，必须以字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-），不能以`http://`或`https://`开头。
     * @example `AddressPoolName`
     */
    "Name"?: string;
    /**
     * 地址池实例的描述。
     * 描述可以为空，或输入长度为2~256个中英文字符，不能以http://或https://开头。
     * @example `AddressPoolDescription`
     */
    "Description"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会修改地址池属性。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 要修改的IP地址池所在的地域ID。
     * @example `cn-chengdu`
     */
    "RegionId": string;
}
