export interface CreateIpamPoolRequest {
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
     * IPAM地址池的名称。
     * 长度为1～128个字符，不能以`http://`或`https://`开头。
     * @example `abc`
     */
    "IpamPoolName"?: string;
    /**
     * IPAM地址池的描述。
     * 长度为2～256个字符，必须以大小写英文字母或者中文字符开头，但不能以`http://`或`https://`开头。不填则为空，默认值为空。
     * @example `test description`
     */
    "IpamPoolDescription"?: string;
    /**
     * IPAM地址池生效地域。
     * @example `cn-hangzhou`
     */
    "PoolRegionId"?: string;
    /**
     * 源IPAM地址池的实例ID。
     * > 不输入此参数时，表示创建的地址池为父地址池。
     * @example `ipam-pool-6rcq3tobayc20t****`
     */
    "SourceIpamPoolId"?: string;
    /**
     * IPAM地址池分配的默认网络掩码。
     * IPv4网络掩码取值范围：**0~32**位。
     * @example `28`
     */
    "AllocationDefaultCidrMask"?: number;
    /**
     * IPAM地址池分配的最大网络掩码。
     * IPv4网络掩码取值范围：**0~32**位。
     * @example `32`
     */
    "AllocationMaxCidrMask"?: number;
    /**
     * IPAM地址池分配的最小网络掩码。
     * IPv4网络掩码取值范围：**0~32**位。
     * @example `8`
     */
    "AllocationMinCidrMask"?: number;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会创建IPAM地址池。检查项包括是否填写了必需参数、请求格式、实例状态。如果检查不通过，则返回对应错误。如果检查通过，则返回DryRunOperation。
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
    /**
     * IP地址协议版本，当前仅支持 **IPv4**。
     * @example `IPv4`
     */
    "IpVersion"?: string;
}
