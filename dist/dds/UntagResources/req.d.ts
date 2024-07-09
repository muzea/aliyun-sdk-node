export interface UntagResourcesRequest {
    /**
     * 实例所属的地域ID，您可以调用[DescribeDBInstanceAttribute](~~62010~~)接口查询。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型，取值固定为**INSTANCE**。
     * @example `INSTANCE`
     */
    "ResourceType": string;
    /**
     * 是否解绑实例上的所有标签，取值：
     * - **true**：解绑实例上的所有标签。
     * - **false**：不解绑实例上的所有标签。
     * > - 默认值为**false**。
     * > - 如果同时传入**TagKey**和本参数，本参数不生效。
     * @example `false`
     */
    "All"?: boolean;
    /**
     * 资源组ID。
     * @example `sg-bpxxxxxxxxxxxxxxxxxx`
     */
    "ResourceGroupId"?: string;
    /**
     * 实例ID列表。
     * @example `dds-bpxxxxxxxx`
     */
    "ResourceId": string[];
    /**
     * 资源的标签键列表。
     * @example `开发组`
     */
    "TagKey"?: string[];
}
