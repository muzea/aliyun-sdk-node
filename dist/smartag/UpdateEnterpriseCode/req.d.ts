export interface UpdateEnterpriseCodeRequest {
    /**
     * 地域ID。
     * 您可以调用[DescribeRegions](~~69813~~)查询智能接入网关支持的地域及对应的地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 企业码。
     * @example `12P**`
     */
    "EnterpriseCode": string;
    /**
     * 是否将目标企业码置为默认企业码。取值：
     * - **true**：是。
     * - **false**：否。
     * @example `true`
     */
    "IsDefault": boolean;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符。
     * @example `02fb3da4****`
     */
    "ClientToken"?: string;
}
