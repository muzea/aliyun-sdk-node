export interface GetDagResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求的ID。用于定位日志，排查问题。
     * @example `7782a299-b291-4fee-8424-cf8058efa8e8`
     */
    RequestId: string;
    /**
     * 错误信息。
     * @example `The connection does not exist.`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `Invalid.Tenant.ConnectionNotExists`
     */
    ErrorCode: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * Dag的详情信息。
     */
    Data: {
        /**
         * DAG的类型，包括MANUAL（手动任务工作流）、SMOKE_TEST（冒烟测试工作流）、SUPPLY_DATA（补数据）和BUSINESS_PROCESS_DAG（一次性业务流程工作流）。
         * @example `MANUAL_FLOW`
         */
        Type: string;
        /**
         * DAG的状态，包括CREATED（已创建）、RUNNING（运行中）、FAILURE（运行失败）和SUCCESS（运行成功）。
         *
         * @example `FAILURE`
         */
        Status: string;
        /**
         * 结束时间。
         * @example `1605052800000`
         */
        FinishTime: number;
        /**
         * 创建时间。
         * @example `1605052800000`
         */
        CreateTime: number;
        /**
         * 工作空间的ID。
         * @example `112345`
         */
        ProjectId: number;
        /**
         * DagId。
         * @example `351249682`
         */
        DagId: number;
        /**
         * Gmtdate。
         * @example `1605052800000`
         */
        Gmtdate: number;
        /**
         * 开始时间。
         * @example `1605052800000`
         */
        StartTime: number;
        /**
         * 创建人。
         * @example `1736629400048545`
         */
        CreateUser: string;
        /**
         * 业务日期。
         * @example `1605052800000`
         */
        Bizdate: number;
        /**
         * Dag的名称。
         * @example `test_dag`
         */
        Name: string;
        /**
         * 修改时间。
         * @example `1605052800000`
         */
        ModifyTime: number;
        /**
         * 操作的标识码。
         * @example `123`
         */
        OpSeq: number;
    };
}
