export interface CreateContainerScanTaskResponse {
    /**
     * 任务创建结果。
     */
    Data: {
        /**
         * 任务ID。
         * @example `fc98d58eb56f699d49bf7ebbd6d7****`
         */
        TaskId: string;
        /**
         * 总任务数量。
         * @example `62`
         */
        TotalCount: number;
        /**
         * 完成数量。
         * @example `33`
         */
        FinishCount: number;
        /**
         * 采集时间。
         * @example `1644286364150`
         */
        CollectTime: number;
        /**
         * 任务运行时间。
         * @example `1644286364150`
         */
        ExecTime: number;
        /**
         * 任务状态。
         * @example `SUCCESS`
         */
        Status: string;
        /**
         * 任务进度。
         * @example `100`
         */
        Progress: number;
        /**
         * 任务结果。
         * @example `SUCCESS`
         */
        Result: string;
        /**
         * 是否能创建新的任务。
         * @example `true`
         */
        CanCreate: boolean;
    };
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `9F4E6157-9600-5588-86B9-38F09067****`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
