export interface QueryAnalysisJobListRequest {
    /**
     * 模板分析作业ID列表。
     * - 一次最多查询10个。
     * - 多个使用半角逗号（,）作为分隔符。
     * @example `bb558c1cc25b45309aab5be44d19****`
     */
    "AnalysisJobIds": string;
}
