export interface ListTagsResponse {
    /**
     * 请求ID。
     * @example `5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1D***`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Result: {
        /**
         * 标签值。
         * @example `dev`
         */
        TagValue: string;
        /**
         * 标签键。
         * @example `env`
         */
        TagKey: string;
    }[];
}
