export interface UntagResourcesRequest {
    /**
     * 资源所属地域。
     * @example `cn-beijing`
     */
    "ResourceRegionId": string;
    /**
     * 资源类型，取值：
     * - **application**：EDAS应用。
     * - **cluster**：EDAS集群。
     * @example `application`
     */
    "ResourceType": string;
    /**
     * 资源ID列表，列表范围为1~20。
     * @example `["f5ad6ff7-xxxx-xxxx-xxxx-2axxxx82xxxx"]`
     */
    "ResourceIds": string;
    /**
     * 要解绑的标签键列表，列表的取值范围1~20，json数组格式。
     * @example `["tagKey1","tagKey2"]`
     */
    "TagKeys"?: string;
    /**
     * 是否删除选定资源下所有的用户标签，默认为false。
     * - **true**：删除资源的标签。
     * - **false**：不删除资源的标签。
     * > 仅当**tagKeys**为空，**deleteAll=true**时，才可以删除所有的客户标签。
     * @example `true`
     */
    "DeleteAll"?: boolean;
}
