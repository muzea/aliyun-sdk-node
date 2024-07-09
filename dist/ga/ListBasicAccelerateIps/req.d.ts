export interface ListBasicAccelerateIpsRequest {
    /**
     * 全球加速所在的地域ID，仅取值**cn-hangzhou**。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 基础型全球加速实例的加速地域实例ID。
     * 您可以调用[GetBasicAccelerator](~~2253380~~)查询加速地域实例ID。
     * @example `ips-bp11r5jb8ogp122xl****`
     */
    "IpSetId": string;
    /**
     * 基础型全球加速实例的加速IP。
     * @example `116.132.XX.XX`
     */
    "AccelerateIpAddress"?: string;
    /**
     * 基础型全球加速实例的加速IP实例ID。
     * @example `gaip-bp1****`
     */
    "AccelerateIpId"?: string;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的NextToken值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
    /**
     * 分批次查询时每次显示的条目数。取值范围：**1**~**50**。默认值：**10**。
     * @example `10`
     */
    "MaxResults"?: number;
}
