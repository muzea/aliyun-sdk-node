export interface DescribeTagsResponse {
    /**
     * 下一个查询开始Token。
     * >如果一次查询没有返回全部结果，则会返回本参数，您可以后续查询中传入本参数的值以继续查询。
     * @example `212db86****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `EEDBE38F-5CF5-4316-AAC2-35817BA60D68`
     */
    RequestId: string;
    /**
     * 标签信息。
     */
    Tags: {
        /**
         * 标签的值。
         */
        TagValues: string[];
        /**
         * 标签的键。
         * @example `测试组`
         */
        TagKey: string;
    }[];
}
