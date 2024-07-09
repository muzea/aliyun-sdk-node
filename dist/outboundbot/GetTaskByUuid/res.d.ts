export interface GetTaskByUuidResponse {
    /**
     * 请求id
     * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC`
     */
    RequestId: string;
    /**
     * 任务信息
     * @example `{}`
     */
    Task: {
        /**
         * 作业组id
         * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC`
         */
        JobGroupId: string;
        /**
         * 结束时间
         * @example `1640090211434`
         */
        EndTime: number;
        /**
         * 结束原因
         * @example `1640090211434`
         */
        EndReason: number;
        /**
         * 任务计划执行时间
         * @example `1640090211434`
         */
        PlannedTime: number;
        /**
         * 作业id
         * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC`
         */
        JobId: string;
        /**
         * 呼叫id
         * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC`
         */
        CallId: string;
        /**
         * 主叫号码
         * @example `057190294`
         */
        CallingNumber: string;
        /**
         * 实际执行时间
         * @example `1640090211434`
         */
        ActualTime: number;
        /**
         * 实例id
         * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC`
         */
        InstanceId: string;
        /**
         * 被叫号码
         * @example `13777777777`
         */
        CalledNumber: string;
        /**
         * 任务id
         * @example `2`
         */
        Id: string;
    };
}
