export interface DeleteIpsecServerRequest {
    /**
     * IPsec服务端所属地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * IPsec服务端ID。
     * @example `iss-bp1jougp8cfsbo8y9****`
     */
    "IpsecServerId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `02fb3da4-130e-11e9-8e44-00****`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求，取值：
     * - **true**：只预检此次请求，不会删除IPsec服务端。检查项包括是否填写了必需参数、请求格式、业务限制等。如果检查不通过，则返回对应错误信息。如果检查通过，则返回`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后直接删除IPsec服务端。
     * @example `false`
     */
    "DryRun"?: string;
}
