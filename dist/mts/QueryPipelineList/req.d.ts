export interface QueryPipelineListRequest {
    /**
     * 需要查询的管道ID列表，可通过**MPS控制台** > **全局设置** > **管道**获取。一次最多查询10个，用半角逗号（,）分隔。
     * @example `d1ce4d3efcb549419193f50f1fcd****,72dfa5e679ab4be9a3ed9974c736****`
     */
    "PipelineIds": string;
}
