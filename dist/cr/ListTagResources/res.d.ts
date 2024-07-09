export interface ListTagResourcesResponse {
    /**
     * 请求ID
     * @example `7FF809ED-B42F-5AC3-9A17-CFE14BE32A8E`
     */
    RequestId: string;
    TagResources: {
        /**
         * 标签资源列表。
         */
        TagResource: {
            /**
             * 标签的键。
             * @example `test-key
            `
             */
            TagKey: string;
            /**
             * 标签的值。
             * @example `test-val`
             */
            TagValue: string;
            /**
             * 资源ID
             * @example `cri-w19e7qr2wibl****`
             */
            ResourceId: string;
            /**
             * 资源类型
             * @example `Instance`
             */
            ResourceType: string;
        }[];
    };
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：第一次查询和没有下一次查询时，均无需填写。如果有下一次查询，取值为上一次API调用返回的NextToken值。
     * @example `AAAAAfj+3fkqd8igM6VLaQjlaYc=
    `
     */
    NextToken: string;
}
