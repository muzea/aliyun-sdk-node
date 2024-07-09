export interface ListOnDemandConfigsResponse {
    /**
     * 按量实例配置。
     */
    configs: any[];
    /**
     * 用来返回更多的查询结果。如果这个值没有返回，则说明没有更多结果。
     * @example `next_token`
     */
    nextToken: string;
}
