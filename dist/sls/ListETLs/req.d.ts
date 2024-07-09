export interface ListETLsRequest {
    /**
     * Project名称
     * @example `ali-test-project`
     */
    "project": string;
    /**
     * 查询开始行。默认值为0。
     * @example `0`
     */
    "offset"?: number;
    /**
     * 指定查询返回的数据加工任务数量
     * @example `10`
     */
    "size"?: number;
    "logstore"?: string;
}
