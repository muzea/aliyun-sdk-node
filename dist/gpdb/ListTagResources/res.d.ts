export interface ListTagResourcesResponse {
    /**
     * 下一个查询开始Token。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `5414A4E5-4C36-4461-95FC-23757A20B5F8`
     */
    RequestId: string;
    TagResources: {
        /**
         * 由实例及其标签组成的集合，包含了实例ID、实例类型和标签值等信息。
         */
        TagResource: {
            /**
             * 资源类型。
             * @example `instance`
             */
            ResourceType: string;
            /**
             * 标签值。
             * @example `TestValue`
             */
            TagValue: string;
            /**
             * 实例ID。
             * @example `gp-xxxxxxxxxx`
             */
            ResourceId: string;
            /**
             * 标签键。
             * @example `TestKey`
             */
            TagKey: string;
        }[];
    };
}
