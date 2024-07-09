export interface AddPublicIpAddressPoolCidrBlockRequest {
    /**
     * IP地址池的实例ID。
     * @example `pippool-6wetvn6fumkgycssx****`
     */
    "PublicIpAddressPoolId": string;
    /**
     * IP地址网段。
     * >不支持同时配置**CidrBlock**与**CidrMask**，请选择其中一个进行配置。
     * @example `47.0.XX.XX/24`
     */
    "CidrBlock"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `02fb3da4-130e-11****`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会添加网段。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 要添加网段的IP地址池所在的地域ID。
     * @example `cn-chengdu`
     */
    "RegionId": string;
    /**
     * IP地址网段掩码。
     * 输入掩码后，系统会自动分配IP地址网段。
     * 取值范围：**24**~**28**。
     * >不支持同时配置**CidrBlock**与**CidrMask**，请选择其中一个进行配置。
     * @example `24`
     */
    "CidrMask"?: number;
}
