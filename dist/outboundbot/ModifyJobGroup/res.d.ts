export interface ModifyJobGroupResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 接口状态码。
     * @example `OK`
     */
    Code: string;
    /**
     * 接口提示消息。
     * @example `Success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 任务信息。
     */
    JobGroup: {
        /**
         * 状态。
         * @example `Scheduling`
         */
        Status: string;
        /**
         * 场景ID。
         * @example `6cea9bed-63e6-439e-ae4c-b3333efff53d`
         */
        ScenarioId: string;
        /**
         * 任务ID。
         * @example `c62e6789-28a8-41db-941e-171a01d3b3b9`
         */
        JobGroupId: string;
        /**
         * 创建时间。
         * @example `1578550074361`
         */
        CreationTime: number;
        /**
         * 任务名字。
         * @example `第一个催收`
         */
        JobGroupName: string;
        /**
         * 任务文件OSS存储路径。
         * @example `UPLOADED/JOB/d481cebe-0bb6-4d13-9649-42ce5074fb75/6c7d9132-98e1-4f08-8a76-8a266c7532fd_job_template - 副本.xlsx`
         */
        JobFilePath: string;
        /**
         * 任务描述。
         * @example `催收的作业组`
         */
        JobGroupDescription: string;
        /**
         * 解析外呼任务文件对应的解析任务ID。
         * @example `e37d28cb-0413-4816-85ed-fd354d025ea3`
         */
        JobDataParsingTaskId: string;
        /**
         * 话术名称。
         * @example `话术`
         */
        ScriptName: string;
        /**
         * 话术版本。
         * @example `1628425608429`
         */
        ScriptVersion: string;
        /**
         * 修改时间。
         * @example `1628425608429`
         */
        ModifyTime: string;
        /**
         * 主叫号码列表。
         */
        CallingNumbers: string[];
        /**
         * 导出信息(历史参数，不再使用)
         */
        ExportProgress: {
            /**
             * 状态
             * @example `FINISHED`
             */
            Status: string;
            /**
             * 文件地址
             * @example `https://***.oss-cn-shanghai.aliyuncs.com/sample`
             */
            FileHttpUrl: string;
            /**
             * 进度
             * @example `1`
             */
            Progress: string;
        };
        /**
         * 外呼策略。
         */
        Strategy: {
            /**
             * 策略类型。
             * @example `Repeatable`
             */
            Type: string;
            /**
             * 策略名称。
             * @example `催收策略`
             */
            StrategyName: string;
            /**
             * 最大尝试次数。
             * @example `3`
             */
            MaxAttemptsPerDay: number;
            /**
             * 执行周期结束后的处理方式(历史参数，不再使用);
             * @example `CONTINUE`
             */
            FollowUpStrategy: string;
            /**
             * 结束时间。
             * @example `2209702074000`
             */
            EndTime: number;
            /**
             * 自定义策略数据(历史参数，不再使用)。
             * @example `{}`
             */
            Customized: string;
            /**
             * 是否是模板(历史参数，不再使用)。
             * @example `false`
             */
            IsTemplate: boolean;
            /**
             * 开始时间。
             * @example `1578550074000`
             */
            StartTime: number;
            /**
             * 策略ID。
             * @example `f718798d-96be-40e4-bef6-317b54855708`
             */
            StrategyId: string;
            /**
             * 号码路由策略。
             * @example `LocalFirst`
             */
            RoutingStrategy: string;
            /**
             * 失败后重复拨打的间隔时间。
             * @example `10`
             */
            MinAttemptInterval: number;
            /**
             * 策略描述。
             * @example `催收作业执行策略`
             */
            StrategyDescription: string;
            /**
             * 重复执行方式，Once 不重复，Day 每天重复，Week 每周重复，Month 每月重复。
             * @example `Once`
             */
            RepeatBy: string;
            /**
             * 允许外呼的时间段。
             */
            WorkingTime: {
                /**
                 * 结束时间。
                 * @example `12:00:00`
                 */
                EndTime: string;
                /**
                 * 开始时间。
                 * @example `09:00:00`
                 */
                BeginTime: string;
            }[];
            /**
             * 重复的执行天。
             * 若重复周期RepeatBy为周，0表示周日，1-6分别表示周一至周六
             * 若重复周期RepeatBy为月，1-31分别表示1至31日，没有该指定日期的月份不执行，如：若选定30日，二月份不执行
             */
            RepeatDays: string[];
        };
        /**
         * 重呼策略
         */
        RecallStrategy: {
            /**
             * 空号不再外呼。
             * @example `false`
             */
            EmptyNumberIgnore: boolean;
            /**
             * 欠费不再外呼。
             * @example `false`
             */
            InArrearsIgnore: boolean;
            /**
             * 停机不再外呼。
             * @example `false`
             */
            OutOfServiceIgnore: boolean;
        };
        /**
         * 振铃时长。
         * @example `25`
         */
        RingingDuration: number;
        /**
         * 作业组优先级，取值范围
         * Urgent：紧急任务。
         * Daily：日常任务。
         * @example `Daily`
         */
        Priority: string;
        /**
         * 并发保障值
         * 任务启动时，最低保障N个并发；
         * 同一优先级的任务并发保障值加和不能大于实例并发；
         * 若配置并发保障值为0，则依赖系统内空闲并发进行智能分配。
         * @example `1`
         */
        MinConcurrency: number;
        /**
         * 闪信推送的配置参数，JSON格式，包含第三方闪信的配置信息。
         * templateId: 闪信模板ID。
         * configId: 闪信配置ID。
         * @example `{"configId":"3157b3c8-3a3e-4ea9-894b-9c8a6", "templateId":"1234"}`
         */
        FlashSmsExtras: string;
    };
}
