export interface QueryMediaWorkflowListRequest {
    /**
     * 媒体工作流ID，可以通过**MPS控制台** > **工作流管理** > **工作流设置**获取。半角逗号（,）分隔，一次最多查询10个。
     * @example `93ab850b4f6f44eab54b6e9181d4****,72dfa5e679ab4be9a3ed9974c736****`
     */
    "MediaWorkflowIds": string;
}
