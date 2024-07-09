export interface ListTagResourcesResponse {
    /**
     * 下一页开始的Token，NextToken为空说明没有下一页。
     * @example `1d2db86sca4384811e0b5e8707e68****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `74F02441-9A8D-48F6-933F-E317AEB28DBF`
     */
    RequestId: string;
    TagResources: {
        /**
         * 资源列表。
         */
        TagResource: {
            /**
             * 标签值。
             * @example `v2`
             */
            TagValue: string;
            /**
             * 资源类型。
             * @example `ALIYUN::MULTIMOD::CLUSTER`
             */
            ResourceType: string;
            /**
             * 资源ID。
             * @example `bds-bp15e022622f****`
             */
            ResourceId: string;
            /**
             * 标签键。
             * @example `k1`
             */
            TagKey: string;
        }[];
    };
}
