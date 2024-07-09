export interface ListConfigResponse {
    /**
     * 当前页返回的Logtail配置数量。
     * @example `3`
     */
    count: number;
    /**
     * 符合查询条件的Logtail配置总数。
     * @example `2`
     */
    total: number;
    /**
     * 当前页返回的Logtail配置列表。
     */
    configs: string[];
}
