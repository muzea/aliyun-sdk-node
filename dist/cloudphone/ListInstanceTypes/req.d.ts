export interface ListInstanceTypesRequest {
    /**
     * 地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例规格名称列表，N的取值范围：1~100。
     */
    "InstanceType"?: string[];
    /**
     * 实例规格族。
     * @example `ecp.ce`
     */
    "InstanceTypeFamily"?: string;
}
