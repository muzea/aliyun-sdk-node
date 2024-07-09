export interface ListLogtailPipelineConfigResponse {
    /**
     * 当前页返回的Logtail流水线配置数量
     * @example `10`
     */
    count: number;
    /**
     * 当前Project下的Logtail流水线配置总数
     * @example `20`
     */
    total: number;
    /**
     * 当前页返回的Logtail流水线配置列表
     */
    configs: string[];
}
