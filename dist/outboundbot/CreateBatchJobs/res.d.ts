export interface CreateBatchJobsResponse {
    /**
     * http 错误码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 错误码
     * @example `OK`
     */
    Code: string;
    /**
     * 提示信息
     * @example `Success`
     */
    Message: string;
    /**
     * 一下请求的id
     * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 作业组信息
     */
    BatchJob: {
        /**
         * 作业组创建时间
         * @example `1579068424000`
         */
        CreationTime: number;
        /**
         * 作业组场景id
         * @example `6cea9bed-63e6-439e-ae4c-b3333efff53d`
         */
        ScenarioId: string;
        /**
         * 作业组名字
         * @example `批量作业01`
         */
        JobGroupName: string;
        /**
         * 作业组id
         * @example `5a7e8b09-baf9-4cab-b540-c971f47a7146`
         */
        BatchJobId: string;
        /**
         * 上传的excel 文件key
         * @example `52e80b02-0126-4556-a1e6-ef5b3747ed53/a9a3ddc7-d7d7-48cd-82b5-b31bb5510e71_2a66f8ad-dfbb-4980-9b84-439171295a11.xlsx`
         */
        JobFilePath: string;
        /**
         * 作业组描述
         * @example `第一个批量作业`
         */
        JobGroupDescription: string;
        CallingNumbers: string[];
        /**
         * 作业执行策略
         */
        Strategy: {
            /**
             * 策略类型
             * @example `Repeatable`
             */
            Type: string;
            /**
             * 策略名字
             * @example `策略`
             */
            StrategyName: string;
            /**
             * 拨打失败后最多重新拨打次数
             * @example `3`
             */
            MaxAttemptsPerDay: number;
            /**
             * 前周期未完成外呼业务的后续处理方案。
             * @example `CONTINUE`
             */
            FollowUpStrategy: string;
            /**
             * 调度策略总的结束时间
             * @example `2209702074000`
             */
            EndTime: number;
            /**
             * 策略自定义信息
             * @example `{}`
             */
            Customized: string;
            /**
             * 是否是模板
             * @example `false`
             */
            IsTemplate: boolean;
            /**
             * 作业组开始执行时间
             * @example `1578550074000`
             */
            StartTime: number;
            /**
             * 策略id
             * @example `f718798d-96be-40e4-bef6-317b54855708`
             */
            StrategyId: string;
            /**
             * 主叫号码录音策略
             * @example `LocalFirst`
             */
            RoutingStrategy: string;
            /**
             * 重新拨打间隔时间
             * @example `10`
             */
            MinAttemptInterval: number;
            /**
             * 策略描述
             * @example `作业执行策略`
             */
            StrategyDescription: string;
            /**
             * 重复执行方式，Once 不重复， Day 没人重复， Week 每周重复，Month 每月重复
             * @example `Once`
             */
            RepeatBy: string;
            /**
             * 作业一天中的执行时间段
             */
            WorkingTime: {
                /**
                 * 结束时间
                 * @example `12:00:00`
                 */
                EndTime: string;
                /**
                 * 开始时间
                 * @example `09:00:00`
                 */
                BeginTime: string;
            }[];
            /**
             * 重复执行的天列表。
             */
            RepeatDays: string[];
        };
    };
}
