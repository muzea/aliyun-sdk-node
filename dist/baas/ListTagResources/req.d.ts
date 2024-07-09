export interface ListTagResourcesRequest {
    /**
     * 取值"consortium"（联盟）或"organization"（组织）。
     * @example `organization`
     */
    "ResourceType": string;
    /**
     * NextToken，用于查询时提供的查询断点。
     * @example `MWJlMTY4ZmY4MzdmMDQzYmRlMTdjMDMxNDM0MWM4NDI3MTA0N2IzMQo=`
     */
    "NextToken"?: string;
    /**
     * 实例Id，N取值0,50。不可重复。
     * @example `peers-tf000eihjli000shanghai-yqxvj52lruxx`
     */
    "ResourceId"?: string[];
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * Tag Key值，N取值0,20。结果将同时满足所有Key的限制。不可重复。
         * @example `key1`
         */
        Key: string;
        /**
         * Tag Value值，N取值0,20，需与Tag Key对应。结果将满足所有Value的限制。
         * @example `value2`
         */
        Value: string;
    }[];
}
