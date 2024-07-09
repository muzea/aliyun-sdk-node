export interface CreateJobGroupResponse {
    /**
     * HTTP返回码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * 提示信息。
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
         * 任务状态。
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
         * 任务名称。
         * @example `第一个作业组`
         */
        JobGroupName: string;
        /**
         * 任务文件OSS路径。
         * @example `UPLOADED/JOB/b3865dc3-40fa-4afd-9fe4-dc7cda305a24/229eac13-379d-4abe-96e0-8cf026b56c0b_template (1).xlsx`
         */
        JobFilePath: string;
        /**
         * 任务描述。
         * @example `第一个的作业组`
         */
        JobGroupDescription: string;
        /**
         * 上传的任务文件对应后台异步解析操作的ID.
         * @example `744ff448-2b4c-40d4-94ca-51f246905b0f`
         */
        JobDataParsingTaskId: string;
        /**
         * 话术场景名称。
         * @example `话术`
         */
        ScriptName: string;
        /**
         * 话术场景版本。
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
         * 导出进度。(该字段在当前接口已删除)
         */
        ExportProgress: {
            /**
             * 任务导出状态。
             * @example `FINISHED`
             */
            Status: string;
            /**
             * 文件地址。
             * @example `https://***.oss-cn-shanghai.aliyuncs.com/sample`
             */
            FileHttpUrl: string;
            /**
             * 进度。
             * @example `1`
             */
            Progress: string;
        };
        /**
         * 任务调度策略。
         */
        Strategy: {
            /**
             * 策略类型。
             * @example `Repeatable`
             */
            Type: string;
            /**
             * 策略名字。
             * @example `催收策略`
             */
            StrategyName: string;
            /**
             * 任务中电话未能接通时每天的最多尝试次数。
             * @example `3`
             */
            MaxAttemptsPerDay: number;
            /**
             * 执行周期结束后的后续处理方式（该字段不再使用）。
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
             * 开始时间。
             * @example `1578550074000`
             */
            StartTime: number;
            /**
             * 策略ID。
             * @example `cc9a436e-03b0-4ada-8364-77ec2290aa39`
             */
            StrategyId: string;
            /**
             * 号码策略。
             * - None, 无特殊规则
             * - LocalFirst, 本市号码优先
             * - LocalProvinceFirst, 本省号码优先
             * @example `LocalFirst`
             */
            RoutingStrategy: string;
            /**
             * 拨打间隔时间
             * @example `3`
             */
            MinAttemptInterval: number;
            /**
             * 策略描述
             * @example `催收策略`
             */
            StrategyDescription: string;
            /**
             * 重复执行方式，once不重复，day每天重复，week每周重复，month每月重复
             * @example `Once`
             */
            RepeatBy: string;
            /**
             * 策略执行时间窗口
             */
            WorkingTime: {
                /**
                 * 窗口开始时间
                 * @example `12:00:00`
                 */
                EndTime: string;
                /**
                 * 窗口结束时间
                 * @example `09:00:00`
                 */
                BeginTime: string;
            }[];
            /**
             * 重复的执行天。
             * - 若重复周期**RepeatBy**为**周**，0表示周日，1-6分别表示周一至周六
             * - 若重复周期**RepeatBy**为**月**，1-31分别表示1至31日，没有该指定日期的月份不执行，如：若选定30日，二月份不执行
             */
            RepeatDays: string[];
        };
        /**
         * 重拨策略。
         */
        RecallStrategy: {
            /**
             * 空号不再外呼
             * @example `true`
             */
            EmptyNumberIgnore: boolean;
            /**
             * 欠费不再外呼
             * @example `true`
             */
            InArrearsIgnore: boolean;
            /**
             * 停机不再外呼
             * @example `true`
             */
            OutOfServiceIgnore: boolean;
        };
        /**
         * 振铃时长
         * @example `30`
         */
        RingingDuration: number;
        /**
         * 作业组优先级，取值范围
         * - **Urgent**：紧急任务。
         * - **Daily**：日常任务。
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
        RecallCallingNumbers: string[];
    };
}
