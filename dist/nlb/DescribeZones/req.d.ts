export interface DescribeZonesRequest {
    /**
     * 云产品的ServiceCode，仅取值：**nlb**。
     * @example `nlb`
     */
    "ServiceCode"?: string;
    /**
     * 可用区所在的地域ID。您可以调用[DescribeRegions](~~443657~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 支持的语言。取值：
     * - **zh-CN**：中文
     * - **en-US**（默认）：英文
     * - **ja**：日文
     * @example `zh-CN`
     */
    "AcceptLanguage"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**可能不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
}
