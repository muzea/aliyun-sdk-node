export interface ListPublicIpAddressPoolCidrBlocksRequest {
    /**
     * IP地址池的实例ID。
     * @example `pippool-6wetvn6fumkgycssx****`
     */
    "PublicIpAddressPoolId": string;
    /**
     * IP地址网段。
     * @example `47.0.XX.XX/24`
     */
    "CidrBlock"?: string;
    /**
     * 本次读取的最大数据记录数量，取值范围：**10**~**100**，默认为**10**。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的NextToken值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
    /**
     * 是否只预检此次请求。取值：
     * - **true**：发送检查请求，不会查询IP地址池中的IP地址网段信息。检查项包括是否填写了必需参数、请求格式、业务限制。如果检查不通过，则返回对应错误。如果检查通过，则返回错误码`DryRunOperation`。
     * - **false**（默认值）：发送正常请求，通过检查后返回HTTP 2xx状态码并直接进行操作。
     * @example `false`
     */
    "DryRun"?: boolean;
    /**
     * 要查询的IP地址网段所在的地域ID。
     * @example `cn-chengdu`
     */
    "RegionId": string;
}
