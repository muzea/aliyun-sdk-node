export interface DescribeSoarRecordsResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `601C2DAC-6A67-5237-BEE8-5BF1CEE96296`
     */
    RequestId: string;
    /**
     * 执行记录结果集。
     */
    SoarExecuteRecords: {
        /**
         * 剧本任务的类型，取值：
         * - **debug**：表示调试任务。
         * - **manual**：表示手动任务。
         * - **siem**：表示事件或告警触发的任务。
         * @example `debug`
         */
        TriggerType: string;
        /**
         * 剧本任务的名称，同剧本的UUID。
         * @example `82848ebc-eaff-4791-acd4-xxxxx`
         */
        TaskName: string;
        /**
         * 任务运行的开始时间，格式：13位的时间戳。
         * @example `1675823338433`
         */
        StartTime: number;
        /**
         * 组件运行的结束时间，格式：13位的时间戳。
         * @example `1686294686000`
         */
        EndTime: number;
        /**
         * 剧本执行的任务状态，取值为：
         * - **success**：表示执行成功。
         * - **fail**：表示执行失败。
         * - **running**：表示正在运行
         * @example `success`
         */
        Status: string;
        /**
         * 剧本任务的请求ID，每次任务运行的唯一ID。
         * @example `ba1ec480-aa90-4bb6-a1a7-9e311ae79321`
         */
        RequestUuid: string;
        /**
         * 执行剧本任务的阿里云账户ID。
         * @example `127xxxx4392`
         */
        TriggerUser: string;
        /**
         * 剧本任务的错误信息，任务成功时，该字段为空。
         * @example `stime not match`
         */
        ErrorMsg: string;
        /**
         * 剧本任务的请求参数。
         * @example `{
            "input1": "xx.xx.xx.xx",
            "input2": "7d"
        }`
         */
        RawEventReq: string;
        /**
         * 剧本的返回信息，由用户在剧本中自己定义。
         * @example `Playbook finish`
         */
        ResultMessage: string;
        /**
         * 剧本任务的类型，取值：
         * - **general**：表示普通剧本任务。
         * - **standard**：表示组件运行任务。
         * @example `standard`
         */
        TaskType: string;
        /**
         * 剧本配置的MD5值。
         * @example `dea65a3db87fb9bd84bbxxxxx`
         */
        TaskflowMd5: string;
    }[];
    /**
     * 页面显示的信息。
     */
    Page: {
        /**
         * 查询到的信息总数量。
         * @example `22`
         */
        TotalCount: number;
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 分页查询时，每页显示的条目数量。
         * @example `10`
         */
        PageSize: number;
    };
}
