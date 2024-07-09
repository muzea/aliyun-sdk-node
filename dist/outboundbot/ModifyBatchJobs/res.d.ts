export interface ModifyBatchJobsResponse {
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 接口状态码
     * @example `OK`
     */
    Code: string;
    /**
     * 接口提示消息
     * @example `Success`
     */
    Message: string;
    /**
     *  请求id
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
    JobGroup: {
        /**
         * 创建时间
         * @example `1579068424000`
         */
        CreationTime: number;
        /**
         * 作业组id
         * @example `5a7e8b09-baf9-4cab-b540-c971f47a7146`
         */
        JobGroupId: string;
        /**
         * 场景id
         * @example `6cea9bed-63e6-439e-ae4c-b3333efff53d`
         */
        ScenarioId: string;
        /**
         * 作业组名字
         * @example `第一个催收作业组`
         */
        JobGroupName: string;
        /**
         * 作业文件上传后的文件key
         * @example `52e80b02-0126-4556-a1e6-ef5b3747ed53/a9a3ddc7-d7d7-48cd-82b5-b31bb5510e71_2a66f8ad-dfbb-4980-9b84-439171295a11.xlsx`
         */
        JobFilePath: string;
        /**
         * 作业组描述
         * @example `第一个催收作业组`
         */
        JobGroupDescription: string;
        CallingNumbers: string[];
        /**
         * 执行策略
         */
        Strategy: {
            /**
             * 策略类型
             * @example `Repeatable`
             */
            Type: string;
            /**
             * 策略名字
             * @example `催收策略`
             */
            StrategyName: string;
            /**
             * 拨打失败后最大重复拨打次数
             * @example `3`
             */
            MaxAttemptsPerDay: number;
            /**
             * 执行周期结束后的后续处理方式
             * @example `CONTINUE`
             */
            FollowUpStrategy: string;
            /**
             * 结束时间
             * @example `2209702074000`
             */
            EndTime: number;
            /**
             * 策略自定义数据
             * @example `{}`
             */
            Customized: string;
            /**
             * 是否是模板
             * @example `false`
             */
            IsTemplate: boolean;
            /**
             * 开始时间
             * @example `1578550074000`
             */
            StartTime: number;
            /**
             * 策略id
             * @example `f718798d-96be-40e4-bef6-317b54855708`
             */
            StrategyId: string;
            /**
             * 号码路由策略
             * @example `LocalFirst`
             */
            RoutingStrategy: string;
            /**
             * 重复拨打的间隔时间
             * @example `10`
             */
            MinAttemptInterval: number;
            /**
             * 策略描述
             * @example `催收作业执行策略`
             */
            StrategyDescription: string;
            /**
             * 重复执行方式，
             * @example `Once`
             */
            RepeatBy: string;
            /**
             * 策略执行时间段
             */
            WorkingTime: {
                /**
                 * 结束时间
                 * @example `1581997093000`
                 */
                EndTime: string;
                /**
                 * 开始时间
                 * @example `1581937093000`
                 */
                BeginTime: string;
            }[];
            RepeatDays: string[];
        };
    };
}
