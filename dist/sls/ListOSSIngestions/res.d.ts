export interface ListOSSIngestionsResponse {
    /**
     * 指定Project下OSS导入任务数量
     * @example `80`
     */
    total: number;
    /**
     * 当前列出的OSS导入任务数量
     * @example `10`
     */
    count: number;
    /**
     * 具体OSS导入任务列表
     */
    results: any[];
}
