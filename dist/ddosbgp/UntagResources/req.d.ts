export interface UntagResourcesRequest {
    /**
     * 资源组ID。
     * @example `test`
     */
    "ResourceGroupId"?: string;
    /**
     * 原生防护实例的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型，取值：**INSTANCE**。
     * @example `INSTANCE`
     */
    "ResourceType": string;
    /**
     * 是否移除实例上的所有标签。默认否。
     * @example `false`
     */
    "All"?: boolean;
    /**
     * 要操作的原生防护实例的ID。n的取值范围为 \[0, 49]，用于指定多个实例，最多50个。例如：ResourceId.0，ResourceId.1，...，ResourceId.49。
     * @example `ddosbgp-cn-v0h1fmwbc024`
     */
    "ResourceId": string[];
    /**
     * 要移除的标签键。n的取值范围为 \[0, 19]，用于指定多个标签键，最多20个。例如：Tag.0.Key，Tag.1.Key，...，Tag.19.Key。
     * @example `testKey1`
     */
    "TagKey"?: string[];
}
