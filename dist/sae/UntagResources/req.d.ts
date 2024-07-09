export interface UntagResourcesRequest {
    /**
     * 地域ID。
     * @example `cn-beijing`
     */
    "RegionId": string;
    /**
     * 资源类型，只支持`application`。
     * @example `application`
     */
    "ResourceType": string;
    /**
     * 资源ID。可填写多个资源ID，用英文逗号（,）分隔。
     * @example `["d42921c4-5433-4abd-8075-0e536f8b****"]`
     */
    "ResourceIds": string;
    /**
     * 标签键列表。可填写多个标签键，用英文逗号（,）分隔。
     * @example `["k1","k2"]`
     */
    "TagKeys"?: string;
    /**
     * 是否删除所有标签，当已传入标签键时生效。取值说明如下：
     * - **true**：删除所有标签。
     * - **false**：不删除所有标签。
     * @example `false`
     */
    "DeleteAll"?: boolean;
}
