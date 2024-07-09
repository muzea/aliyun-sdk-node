export interface ListTagResourcesResponse {
    /**
     * NextToken，用于查询时提供的查询断点。
     * @example `MWJlMTY4ZmY4MzdmMDQzYmRlMTdjMDMxNDM0MWM4NDI3MTA0N2IzMQo=`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `21B8738D-254C-4933-9FC1-3C31B2611482`
     */
    RequestId: string;
    /**
     * 数组长度最大为20。
     */
    TagResources: {
        /**
         * 资源Tag Value。
         * @example `value1`
         */
        TagValue: string;
        /**
         * 资源类型。
         * @example `organization`
         */
        ResourceType: string;
        /**
         * 资源ID。
         * @example `peers-tf000eihjli000shanghai-yqxvj52lruxx`
         */
        ResourceId: string;
        /**
         * 资源Tag Key。
         * @example `key1`
         */
        TagKey: string;
    }[];
}
