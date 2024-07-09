export interface ListTagResourcesResponse {
    /**
     * 下一个查询开始Token。
     * NextToken为空，说明当页已显示完所有信息。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `17743161-66F3-4E7F-B8AE-845FB28B928F`
     */
    RequestId: string;
    TagResources: {
        /**
         * 由SMC资源及其标签组成的集合，包含了资源ID、资源类型和标签键值等信息。
         */
        TagResource: {
            /**
             * 资源类型。
             * @example `ALIYUN::SMC::SOURCESERVER`
             */
            ResourceType: string;
            /**
             * 资源的标签值。
             * @example `TestValue`
             */
            TagValue: string;
            /**
             * 资源ID。
             * @example `s-bp1e2fsl57knvuug****`
             */
            ResourceId: string;
            /**
             * 资源的标签键。
             * @example `TestKey`
             */
            TagKey: string;
        }[];
    };
}
