export interface UpdateIpamPoolRequest {
    /**
     * IPAM托管地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * IPAM地址池的实例ID。
     * @example `ipam-pool-6rcq3tobayc20t****`
     */
    "IpamPoolId": string;
    /**
     * 要修改的IPAM地址池的名称。
     * 长度为1～128个字符，不能以`http://`或`https://`开头。
     * @example `test`
     */
    "IpamPoolName"?: string;
    /**
     * 要修改的IPAM地址池的描述信息。
     * 长度为2～268个字符，必须以大小写英文字母或中文字符开头，但不能以`http://`或`https://`开头。不填则为空，默认值为空。
     * @example `test description`
     */
    "IpamPoolDescription"?: string;
    /**
     * 要修改的IPAM地址池默认网络掩码。
     * 取值范围：**0~32**位。
     * @example `28`
     */
    "AllocationDefaultCidrMask"?: number;
    /**
     * 要修改的IPAM地址池最大网络掩码。
     * 取值范围：**0~32**位。
     * @example `32`
     */
    "AllocationMaxCidrMask"?: number;
    /**
     * 要修改的IPAM地址池最小网络掩码。
     * 取值范围：**0~32**位。
     * @example `8`
     */
    "AllocationMinCidrMask"?: number;
    /**
     * 是否清除IPAM地址池默认网络掩码。取值：
     * - **true**：是。
     * - **false**：否。
     * @example `true`
     */
    "ClearAllocationDefaultCidrMask"?: boolean;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会修改IPAM地址池信息。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码DryRunOperation。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接修改。
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
