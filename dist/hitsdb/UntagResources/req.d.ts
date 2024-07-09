export interface UntagResourcesRequest {
    /**
     * 资源类型，取值固定为**INSTANCE**。
     * @example `INSTANCE`
     */
    "ResourceType": string;
    /**
     * 实例ID列表。
     */
    "ResourceId": string[];
    /**
     * 标签的键列表。
     */
    "TagKey"?: string[];
    /**
     * 是否解绑实例上的所有标签，取值：
     * - **true**：解绑实例上的所有标签。
     * - **false**：不解绑实例上的所有标签。
     * > - 默认值为false。
     * - 如果同时传入TagKey和本参数，本参数不生效。
     * @example `false`
     */
    "All"?: boolean;
}
