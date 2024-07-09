export interface DeleteIpamScopeRequest {
    /**
     * IPAM托管地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * IPAM作用范围的实例ID。
     * @example `ipam-scope-glfmcyldpm8lsy****`
     */
    "IpamScopeId": string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会删除IPAM作用范围。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 客户端Token，用于保证请求的幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的RequestId作为ClientToken标识。每次API请求的RequestId不一样。
     * @example `88144bdb-b190-4813-a3f5-66cc86694162`
     */
    "ClientToken"?: string;
}
