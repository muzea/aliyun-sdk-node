export interface DescribeDownloadTaskTypeResponse {
    /**
     * 总数。
     * @example `3`
     */
    TotalCount: number;
    /**
     * 返回结果的请求ID。
     * @example `B835494C-D093-5524-BBDE-BD272077B40E`
     */
    RequestId: string;
    /**
     * 任务类型列表。
     */
    TaskTypeArray: {
        /**
         * 任务类型名称。
         * @example `互联网边界防火墙资产`
         */
        TaskName: string;
        /**
         * 任务类型。
         * @example `InternetFirewallAsset`
         */
        TaskType: string;
    }[];
}
