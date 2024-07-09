export interface ListOSSIngestionsRequest {
    /**
     * Project名称
     * @example `ali-test-project
    `
     */
    "project": string;
    /**
     * 查询开始行。默认值为0。
     * @example `0`
     */
    "offset"?: number;
    /**
     * 单次查询需要获取的OSS导入任务数量
     * @example `10
    `
     */
    "size"?: number;
    "logstore"?: string;
}
