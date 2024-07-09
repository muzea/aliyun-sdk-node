export interface ListOSSExportsResponse {
    /**
     * 指定Project下所有OSS投递任务数量
     * @example `10`
     */
    total: number;
    /**
     * 当前列出的OSS投递任务数量
     * @example `2`
     */
    count: number;
    /**
     * 具体OSS投递任务列表
     */
    results: any[];
}
