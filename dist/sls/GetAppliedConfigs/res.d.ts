export interface GetAppliedConfigsResponse {
    /**
     * Logtail配置数量。
     * @example `2`
     */
    count: number;
    /**
     * Logtail配置名称列表。
     */
    configs: string[];
}
