export interface DescribeJobGroupResponse {
    /**
     * http 状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 接口状态码
     * @example `OK`
     */
    Code: string;
    /**
     * 接口提示信息
     * @example `Success`
     */
    Message: string;
    /**
     * 请求id
     * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回的作业组信息
     */
    JobGroup: {
        /**
         * 创建时间
         * @example `1578881227404`
         */
        CreationTime: number;
        /**
         * 作业组状态
         * @example `Completed`
         */
        Status: string;
        /**
         * 作业组名称
         * @example `催收作业组`
         */
        JobGroupName: string;
        /**
         * 话术id
         * @example `49f00b0d-78ac-4d51-91de-a9e8e92b8470`
         */
        ScriptId: string;
        /**
         * 作业组id
         * @example `46a9ad0c-3e11-44da-a9a7-2c21bf5ce185`
         */
        JobGroupId: string;
        /**
         * 场景id
         * @example `fce6c599-8ede-40e3-9f78-0928eda7b4e8`
         */
        ScenarioId: string;
        /**
         * 作业文件上传后的文件key
         * @example `da37319b-6c83-4268-9f19-814aed62e401/a5a9a310-b902-4674-a6e1-29975cbaa312_100.xlsx`
         */
        JobFilePath: string;
        /**
         * 作业组描述
         * @example `催收作业组`
         */
        JobGroupDescription: string;
        /**
         * 解析外呼数据任务id
         * @example `da37319b-6c83-4268-9f19-814aed62e401/a5a9a310-b902-4674-a6e1-29975cbaa312_100.xlsx`
         */
        JobDataParsingTaskId: string;
        /**
         * 话术名字
         * @example `催收话术`
         */
        ScriptName: string;
        /**
         * 修改时间
         * @example `1578881227404`
         */
        ModifyTime: string;
        /**
         * 话术版本
         * @example `49f00b0d-78ac-4d51-91de-a9e8e92b8470`
         */
        ScriptVersion: string;
        /**
         * 主叫号码列表
         */
        CallingNumbers: string[];
        /**
         * 导出进度
         */
        ExportProgress: {
            /**
             * 导出状态
             * @example `FINISHED`
             */
            Status: string;
            /**
             * 文件地址
             * @example `https://oss-cn-shanghai.aliyuncs.com/xx.zip`
             */
            FileHttpUrl: string;
            /**
             * 导出进度
             * @example `1`
             */
            Progress: string;
        };
        /**
         * 作业组的统计信息
         */
        Progress: {
            /**
             * 总计未接通的作业数量
             * @example `1`
             */
            TotalNotAnswered: number;
            /**
             * 作业组状态
             * @example `Executing`
             */
            Status: string;
            /**
             * 开始执行的时间
             * @example `1578881227404`
             */
            StartTime: number;
            /**
             * 失败的作业数量
             * @example `0`
             */
            Failed: number;
            /**
             * 执行中的作业数量
             * @example `2`
             */
            Executing: number;
            /**
             * 总作业数量
             * @example `10`
             */
            TotalJobs: number;
            /**
             * 总计完成的作业数量
             * @example `2`
             */
            TotalCompleted: number;
            /**
             * 作业组执行时间
             * @example `1000`
             */
            Duration: number;
            /**
             * 调度中的作业数量
             * @example `5`
             */
            Scheduling: number;
            /**
             * 暂停的作业数量
             * @example `0`
             */
            Paused: number;
            /**
             * 取消的作业数量
             * @example `0`
             */
            Cancelled: number;
            /**
             * 业务结果信息
             */
            Briefs: {
                /**
                 * 业务结果名字
                 * @example `score`
                 */
                Key: string;
                /**
                 * 业务结果值
                 * @example `5`
                 */
                Value: string;
            }[];
            /**
             * key vaule 形式的统计信息
             */
            Categories: {
                /**
                 * 自定义的统计信息字段名字
                 * @example `success`
                 */
                Key: string;
                /**
                 * 自定义的统计信息值
                 * @example `10`
                 */
                Value: string;
            }[];
        };
        /**
         * 作业的执行策略
         */
        Strategy: {
            /**
             * 策略类型
             * @example `Repeatable`
             */
            Type: string;
            /**
             * 策略名字
             * @example `催收策略名字`
             */
            StrategyName: string;
            /**
             * 未接通情况下每日最大呼叫次数
             * @example `2`
             */
            MaxAttemptsPerDay: number;
            /**
             * 执行周期结束后的处理方式
             * @example `NONE`
             */
            FollowUpStrategy: string;
            /**
             * 调度策略的总结束时间
             * @example `1579881227404`
             */
            EndTime: number;
            /**
             * 策略的自定义数据
             * @example `{}`
             */
            Customized: string;
            /**
             * 是否是模版
             * @example `false`
             */
            IsTemplate: boolean;
            /**
             * 策略总的开始时间
             * @example `1578881227404`
             */
            StartTime: number;
            /**
             * 策略id
             * @example `a2bff22c-2604-4df2-83d6-5952e2438c5a`
             */
            StrategyId: string;
            /**
             * 号码路由策略
             * @example `LocalFirst`
             */
            RoutingStrategy: string;
            /**
             * 重新拨打的间隔时间
             * @example `10`
             */
            MinAttemptInterval: number;
            /**
             * 策略描述
             * @example `催收策略`
             */
            StrategyDescription: string;
            /**
             * 作业重复方式
             * @example `Once`
             */
            RepeatBy: string;
            /**
             * 工作时间段
             */
            WorkingTime: {
                /**
                 * 开始时间
                 * @example `12:00:00`
                 */
                EndTime: string;
                /**
                 * 结束时间
                 * @example `09:00:00`
                 */
                BeginTime: string;
            }[];
            /**
             * 重复执行的天
             */
            RepeatDays: string[];
        };
        /**
         * 重呼策略
         */
        RecallStrategy: {
            /**
             * 空号不再外呼
             * @example `false`
             */
            EmptyNumberIgnore: boolean;
            /**
             * 欠费不再外呼
             * @example `false`
             */
            InArrearsIgnore: boolean;
            /**
             * 停机不再外呼
             * @example `false`
             */
            OutOfServiceIgnore: boolean;
        };
        /**
         * 统计信息
         */
        Result: {
            /**
             * 超时挂机数量
             * @example `1`
             */
            TimeoutHangupNum: number;
            /**
             * 完成数量
             * @example `1`
             */
            FinishedNum: number;
            /**
             * 没有交互数量
             * @example `1`
             */
            NoInteractNum: number;
            /**
             * 客户挂机数量
             * @example `1`
             */
            ClientHangupNum: number;
            /**
             * 拒识数量
             * @example `1`
             */
            UnrecognizedNum: number;
        };
        /**
         * 振铃时长
         * @example `30`
         */
        RingingDuration: number;
        /**
         * 优先级
         * @example `1`
         */
        Priority: string;
        /**
         * 最小并发
         * @example `1`
         */
        MinConcurrency: number;
        FlashSmsExtras: {
            ConfigId: string;
            TemplateId: string;
        };
        RecallCallingNumbers: string[];
    };
}
