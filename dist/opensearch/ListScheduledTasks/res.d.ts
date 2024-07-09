export interface ListScheduledTasksResponse {
    /**
     * 总条数
     * @example `1`
     */
    totalCount: number;
    /**
     * 请求ID
     * @example `0A6EB64B-B4C8-CF02-810F-E660812972FF`
     */
    requestId: string;
    result: any[];
}
