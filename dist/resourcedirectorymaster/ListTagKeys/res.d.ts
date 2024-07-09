export interface ListTagKeysResponse {
    /**
     * 根据NextToken判断是否具备下一个查询开始的Token。取值：
     * - 如果NextToken为空，即`"NextToken": ""`，表示没有下一个。
     * - 如果NextToken有值，则该值就是下一个查询开始的Token。
     * @example `TGlzdFJlc291cm****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `DC09A6AA-2713-4E10-A2E9-E6C5C43A8842`
     */
    RequestId: string;
    /**
     * 标签键信息。
     */
    Tags: {
        /**
         * 标签键。
         * @example `team`
         */
        Key: string;
    }[];
}
