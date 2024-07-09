export interface ListTagResourcesResponse {
    /**
     * 请求id
     * @example `D77D0DAF-790D-F5F5-A9C0-133738165014`
     */
    requestId: string;
    /**
     * 下一个查询开始Token
     * @example `20`
     */
    nextToken: string;
    /**
     * 资源列表
     */
    result: {
        /**
         * 标签键
         * @example `GENIE_FUNCTION`
         */
        tagKey: string;
        /**
         * 标签值
         * @example `ALLOW`
         */
        tagValue: string;
        /**
         * 资源ID
         * @example `54041`
         */
        resourceId: string;
        /**
         * 资源类型
         * @example `hostGroup`
         */
        resourceType: string;
    }[];
}
