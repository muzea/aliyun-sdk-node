export interface TagResourcesRequest {
    /**
     * 取值"consortium"（联盟）或"organization"（组织）。
     * @example `organization`
     */
    "ResourceType": string;
    /**
     * 实例Id，N取值[1,50]。
     * @example `peers-tf000eihjli000beijing-bl6rdwi82tget`
     */
    "ResourceId"?: string[];
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * Tag Key值，N取值1~20。
         * @example `key1`
         */
        Key: string;
        /**
         * Tag Value值，N取值1~20，需与Tag Key对应。
         * @example `value1`
         */
        Value: string;
    }[];
}
