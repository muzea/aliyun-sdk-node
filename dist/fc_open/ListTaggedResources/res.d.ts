export interface ListTaggedResourcesResponse {
    /**
     * 用来返回更多结果。第一次查询不需要提供这个参数，后续查询的Token从返回结果中获取。
     * @example `a-service`
     */
    nextToken: string;
    /**
     * 被打标签的Service资源列表。
     */
    resources: any[];
}
