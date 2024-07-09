export interface ListJobsResponse {
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
     * 作业数组
     */
    Jobs: {
        /**
         * 作业状态，取值范围
         * - **Scheduling**：调度中。
         * - **Executing**：执行中。
         * - **Succeeded**：成功。
         * - **Paused**：挂起。
         * - **Failed**：失败。
         * - **Cancelled**：已取消。
         * - **Drafted**：草稿态。
         * @example `Succeeded`
         */
        Status: string;
        /**
         * 业务id
         * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC`
         */
        ScenarioId: string;
        /**
         * 作业组id
         * @example `fce6c599-8ede-40e3-9f78-0928eda7b4e8`
         */
        JobGroupId: string;
        /**
         * 策略id
         * @example `c8a2b7f2-ad1a-4865-b872-d0080d9802d9`
         */
        StrategyId: string;
        /**
         * 作业id
         * @example `b72425bd-7871-4050-838e-033d80d754b7`
         */
        JobId: string;
        /**
         *
         * 作业优先级
         * @example `	5`
         */
        Priority: number;
        /**
         *
         * 系统优先级
         * @example `1`
         */
        SystemPriority: number;
        /**
         * 作业失败原因
         * @example `NoAnswer`
         */
        FailureReason: string;
        /**
         *
         * 作业第三方系统id
         * @example `d5971d98-7312-4f0e-a918-a17d67133e28`
         */
        ReferenceId: string;
        /**
         * 联系人列表
         */
        Contacts: {
            /**
             * 电话号码
             * @example `135****8888`
             */
            PhoneNumber: string;
            /**
             * 状态
             * @example `Available`
             */
            State: string;
            /**
             *
             * 联系人id
             * @example `db3db762-e421-44c9-9a01-cb423470757c`
             */
            ContactId: string;
            /**
             * 尊称
             * @example `张先生`
             */
            Honorific: string;
            /**
             * 作业id
             * @example `72dcd26b-f12d-4c27-b3af-18f6aed5b160`
             */
            JobId: string;
            /**
             * 联系人名字
             * @example `张三`
             */
            ContactName: string;
            /**
             * 联系人角色
             * @example `*`
             */
            Role: string;
            /**
             *
             * 联系人第三方系统id
             * @example `2fa6bac3-06da-4315-82ab-72d6fd3a6f34`
             */
            ReferenceId: string;
        }[];
        /**
         * 业务参数列表
         */
        Extras: {
            /**
             * 业务参数Key
             * @example `name`
             */
            Key: string;
            /**
             * 业务参数value
             * @example `张三`
             */
            Value: string;
        }[];
        /**
         * 对话摘要信息
         */
        Summary: {
            /**
             * 对话摘要名字
             * @example `score`
             */
            SummaryName: string;
            /**
             *
             * 对话摘要类别
             * @example `	{}`
             */
            Category: string;
            /**
             * 对话摘要内容
             * @example `5`
             */
            Content: string;
        }[];
        /**
         * 任务列表
         */
        Tasks: {
            /**
             * 任务状态，取值范围
             * - **Executing**：正在拨打。
             * - **Succeeded**：已接通。
             * - **NoAnswer**：未接通-无人接听。
             * - **NotExist**：未接通-空号。
             * - **Busy**：未接通-占线。
             * - **Cancelled**：未呼出-任务停止。
             * - **Failed**：失败。
             * - **NotConnected**：未接通-无法接通。
             * - **PoweredOff**：未接通-关机。
             * - **OutOfService**：未接通-被叫停机。
             * - **InArrears**：未接通-被叫欠费。
             * - **EmptyNumber**：未呼出-空号不外呼。
             * - **PerDayCallCountLimit**：未呼出-超出每日上限。
             * - **ContactBlockList**：未呼出-黑名单。
             * - **CallerNotRegistered**：未呼出-主叫号码未注册。
             * - **Terminated**：未呼出-被终止。
             * - **VerificationCancelled**：未呼出-呼叫前验证不通过取消。
             * - **OutOfServiceNoCall**：未呼出-被叫停机不外呼。
             * - **InArrearsNoCall**：未呼出-被叫欠费不外呼。
             * - **CallingNumberNotExist**：未呼出-主叫号码不存在。
             * @example `Succeeded`
             */
            Status: string;
            /**
             * 任务计划执行时间
             * @example `1579068424883`
             */
            PlanedTime: number;
            /**
             * 对话机器人id
             * @example `	1234`
             */
            ChatbotId: string;
            /**
             * 实际执行时间
             * @example `1579068424883`
             */
            ActualTime: number;
            /**
             * 被叫号码
             * @example `135****8888`
             */
            CalledNumber: string;
            /**
             * 场景id
             * @example `ade80092-03d9-4f4d-ad4f-ab8a247d3150`
             */
            ScenarioId: string;
            /**
             * 作业id
             * @example `b72425bd-7871-4050-838e-033d80d754b7`
             */
            JobId: string;
            /**
             * 呼叫id
             * @example `1528189846043`
             */
            CallId: string;
            /**
             * 主叫号码
             * @example `0571****3106`
             */
            CallingNumber: string;
            /**
             * 业务结果
             * @example `1`
             */
            Brief: string;
            /**
             * 持续时间
             * @example `	120`
             */
            Duration: number;
            /**
             * 任务id
             * @example `ff44709e-39a6-43ba-959b-20fcabe3e496`
             */
            TaskId: string;
            /**
             * 对话列表
             */
            Conversation: {
                /**
                 * 是谁说的话，Robot 机器人， Contact 联系人
                 * @example `Robot`
                 */
                Speaker: string;
                /**
                 * 对话文本入库时间戳
                 * @example `1579068424883`
                 */
                Timestamp: number;
                /**
                 *
                 * 对话文本
                 * @example `你好，我是**客服`
                 */
                Script: string;
                /**
                 * 摘要信息
                 */
                Summary: {
                    /**
                     * 摘要名称
                     * @example `是本人`
                     */
                    SummaryName: string;
                    /**
                     * 类目
                     * @example `标签`
                     */
                    Category: string;
                    /**
                     * 摘要内容
                     * @example `是`
                     */
                    Content: string;
                }[];
            }[];
            /**
             *
             * 任务的联系人
             */
            Contact: {
                /**
                 * 电话号码
                 * @example `135****8888`
                 */
                PhoneNumber: string;
                /**
                 * 状态
                 * @example `Available`
                 */
                State: string;
                /**
                 * 联系人id
                 * @example `db3db762-e421-44c9-9a01-cb423470757c`
                 */
                ContactId: string;
                /**
                 *
                 * 联系人尊称
                 * @example `张先生`
                 */
                Honorific: string;
                /**
                 *
                 * 作业id
                 * @example `b72425bd-7871-4050-838e-033d80d754b7`
                 */
                JobId: string;
                /**
                 * 联系人名字
                 * @example `张三`
                 */
                ContactName: string;
                /**
                 * 角色
                 * @example `*`
                 */
                Role: string;
                /**
                 * 联系人第三方系统id
                 * @example `2fa6bac3-06da-4315-82ab-72d6fd3a6f34`
                 */
                ReferenceId: string;
            };
        }[];
        /**
         * 主叫号码列表
         */
        CallingNumbers: string[];
    }[];
}
