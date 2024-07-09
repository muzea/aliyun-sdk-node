export interface UntagResourcesRequest {
    /**
     * 地域ID，可调用[DescribeRegions](~~61012~~)查询。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型，取值：**INSTANCE**。
     * @example `INSTANCE`
     */
    "ResourceType": string;
    /**
     * 是否解绑实例上的所有标签，取值：
     * * **true**：解绑实例上的所有标签。
     * * **false**：不解绑实例上的所有标签，默认值。
     * > 如果同时设置了**TagKey.N**和本参数，则本参数不生效。
     * @example `false`
     */
    "All"?: boolean;
    /**
     * 实例ID列表。
     * @example `r-bp1zxszhcgatnx****`
     */
    "ResourceId": string[];
    /**
     * 标签键列表。
     * @example `demokey`
     */
    "TagKey"?: string[];
}
