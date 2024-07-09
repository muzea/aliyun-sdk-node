export interface DeleteDBClusterResponse {
    /**
     * 任务ID。
     * @example `421693038`
     */
    TaskId: number;
    /**
     * 请求ID。
     * @example `1AD222E9-E606-4A42-BF6D-8A4442913CEF`
     */
    RequestId: string;
    /**
     * AnalyticDB MySQL数仓版（3.0）集群ID。
     * @example `am-bp1u8c0mgfg58****`
     */
    DBClusterId: string;
}
