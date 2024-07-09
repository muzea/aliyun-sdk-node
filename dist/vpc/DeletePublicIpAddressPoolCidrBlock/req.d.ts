export interface DeletePublicIpAddressPoolCidrBlockRequest {
    /**
     * IP地址池的实例ID。
     * @example `pippool-6wetvn6fumkgycssx****`
     */
    "PublicIpAddressPoolId": string;
    /**
     * IP地址网段。
     * @example `47.0.XX.XX/24`
     */
    "CidrBlock": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会删除IP地址网段。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 要删除IP地址网段的IP地址池所在的地域ID。
     * @example `cn-chengdu`
     */
    "RegionId": string;
}
