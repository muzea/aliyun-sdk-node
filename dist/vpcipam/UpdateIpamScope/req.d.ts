export interface UpdateIpamScopeRequest {
    /**
     * IPAM托管地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * IPAM作用范围实例ID。
     * @example `ipam-scope-glfmcyldpm8lsy****`
     */
    "IpamScopeId": string;
    /**
     * 要修改的IPAM作用范围的名称。
     * 长度为1～128个字符，不能以`http://`或`https://`开头。
     * @example `test`
     */
    "IpamScopeName"?: string;
    /**
     * 要修改的IPAM作用范围的描述信息。
     * 长度为2～256个字符，必须以英文大小写字母开头，但不能以`http://`或`https://`开头。不填则为空，默认值为空。
     * @example `test description`
     */
    "IpamScopeDescription"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会修改IPAM作用范围信息。检查项包括是否填写了必需参数、请求格式、实例状态。如果检查不通过，则返回对应错误。如果检查通过，则返回DryRunOperation。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行修改。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 客户端Token，用于保证请求的幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的RequestId作为ClientToken标识。每次API请求的RequestId不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
}
