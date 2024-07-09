export interface UntagResourcesRequest {
    /**
     * 要删除的资源列表。
     * @example `["es-cn-09k1rocex0006****","es-cn-oew1rgiev0009****"]`
     */
    "ResourceIds"?: string;
    /**
     * 资源类型。固定为**INSTANCE**。
     * @example `INSTANCE`
     */
    "ResourceType"?: string;
    /**
     * 要删除的标签列表，最多包含20个子项。
     * @example `["tagKey1","tagKey2"]`
     */
    "TagKeys"?: string;
    /**
     * 是否全部删除，默认为**false**。仅当**TagKeys**为空时有效。
     * @example `false`
     */
    "All"?: boolean;
    "body"?: string;
}
