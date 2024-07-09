export interface ListTagResourcesResponse {
    /**
     * 下一个查询开始Token。
     * @example `QpgBAAAAAABsb2dzL2RzLw==`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `64D28B53-5902-409B-94F6-FD46680144FE`
     */
    RequestId: string;
    TagResources: {
        /**
         * 资源和标签的关系列表。
         */
        TagResource: {
            /**
             * 标签值。
             * @example `testValue`
             */
            TagValue: string;
            /**
             * 资源类型。固定值：**DOMAIN**。
             * @example `DOMAIN`
             */
            ResourceType: string;
            /**
             * 资源ID。
             * @example `example.com`
             */
            ResourceId: string;
            /**
             * 标签键。
             * @example `testKey`
             */
            TagKey: string;
        }[];
    };
}
