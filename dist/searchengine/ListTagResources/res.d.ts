export interface ListTagResourcesResponse {
    /**
     * 请求id
     * @example `2AE63638-5420-56DC-BF59-37D8174039A0`
     */
    requestId: string;
    /**
     * 下一个查询开始Token
     * @example `b56*******de4a7eca`
     */
    nextToken: string;
    /**
     * 资源列表
     */
    tagResources: {
        /**
         * 标签键
         * @example `opensearch`
         */
        tagKey: string;
        /**
         * 标签值
         * @example `opensearch`
         */
        tagValue: string;
        /**
         * 资源ID
         * @example `rmq-cn-jeo3mn55j01`
         */
        resourceId: string;
        /**
         * 资源类型
         * @example `instance`
         */
        resourceType: string;
    }[];
}
