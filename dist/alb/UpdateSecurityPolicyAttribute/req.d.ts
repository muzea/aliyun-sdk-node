export interface UpdateSecurityPolicyAttributeRequest {
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `593B0448-D13E-4C56-AC0D-FDF0F******`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求，取值：
     * - **true**：发送检查请求，不会更新安全策略属性。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。
     * @example `true`
     */
    "DryRun"?: boolean;
    /**
     * 安全策略ID。
     * @example `sp-n0kn923****`
     */
    "SecurityPolicyId": string;
    /**
     * 支持的TLS协议版本列表。
     */
    "TLSVersions"?: string[];
    /**
     * 支持的加密套件列表。
     */
    "Ciphers"?: string[];
    /**
     * 安全策略名称。
     * 长度为2~128个英文或中文字符，必须以大小字母或中文开头，可包含数字，半角句点（.），下划线（_）和短划线（-）。
     * @example `test-secrity`
     */
    "SecurityPolicyName"?: string;
}
