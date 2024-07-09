export interface ListTagResourcesResponse {
    /**
     * 本次调用返回的Token，根据取值判断是否具备下一个查询开始的Token。
     * - 如果NextToken为空，即"NextToken": ""，表示没有下一个。
     * - 如果NextToken有值，则该值就是下一个查询开始的Token。
     * @example `e71d8a535bd9cc11`
     */
    NextToken: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `00827261-20B7-4562-83F2-4DF39876A45A`
     */
    RequestId: string;
    TagResources: {
        /**
         * 资源的标签列表。
         */
        TagResource: {
            /**
             * 资源类型。
             * @example `key`
             */
            ResourceType: string;
            /**
             * 标签值。
             * @example `true`
             */
            TagValue: string;
            /**
             * 资源ID。
             * @example `key-hzz62f1cb66fa42qo****`
             */
            ResourceId: string;
            /**
             * 标签键。
             * @example `disk-encryption`
             */
            TagKey: string;
        }[];
    };
}
