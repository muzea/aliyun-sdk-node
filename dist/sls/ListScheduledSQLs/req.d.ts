export interface ListScheduledSQLsRequest {
    /**
     * Project名称
     * @example `ali-test-project
    `
     */
    "project"?: string;
    /**
     * 查询开始行，默认值为0。
     * @example `0`
     */
    "offset"?: number;
    /**
     * 查询结束行，默认值为100。
     * @example `100`
     */
    "size"?: number;
    /**
     * logstore名称
     * @example `ali-test-logstore`
     */
    "logstore"?: string;
}
