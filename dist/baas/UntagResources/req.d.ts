export interface UntagResourcesRequest {
    /**
     * 取值"consortium"（联盟）或"organization"（组织）。
     * @example `organization`
     */
    "ResourceType": string;
    /**
     * 是否删除实例所有的TagKey，仅当TagKey为空时有效。
     * @example `true`
     */
    "All"?: boolean;
    "ResourceId"?: string[];
    "TagKey"?: string[];
}
