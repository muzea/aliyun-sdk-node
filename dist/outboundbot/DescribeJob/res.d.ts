export interface DescribeJobResponse {
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
     * 接口提示信息。
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
     * 作业信息。
     * @example `{}`
     */
    Job: {
        /**
         * 作业状态。
         * - Scheduling(调度中),
         * - Executing(执行中),
         * - Succeeded(成功),
         * - Paused(暂停),
         * - Failed(失败),
         * - Cancelled(已取消),
         * - Drafted(草稿态,文件导入时的临时状态);
         * @example `Succeeded`
         */
        Status: string;
        /**
         * 作业实际执行时间。
         * @example `1640068026385`
         */
        ActualTime: number;
        /**
         * 作业优先级。
         * @example `5`
         */
        Priority: number;
        /**
         * 任务命中标签情况。
         * @example `-`
         */
        DsReport: string;
        /**
         * 任务下次执行的时间。
         * @example `1640068026385`
         */
        NextExecutionTime: number;
        /**
         * 作业失败原因。
         * @example `NoAnswer`
         */
        FailureReason: string;
        /**
         * 作业系统优先级。
         * @example `1`
         */
        SystemPriority: number;
        /**
         * 实例ID。
         * @example `d5971d98-7312-4f0e-a918-a17d67133e28`
         */
        InstanceId: string;
        /**
         * 被叫号码。
         * @example `137****7777`
         */
        CalledNumber: string;
        /**
         * 作业的业务ID，有业务方自定义。
         * @example `d5971d98-7312-4f0e-a918-a17d67133e28`
         */
        ReferenceId: string;
        /**
         * 任务ID。
         * @example `fce6c599-8ede-40e3-9f78-0928eda7b4e8`
         */
        JobGroupId: string;
        /**
         * 场景ID。
         * @example `ade80092-03d9-4f4d-ad4f-ab8a247d3150`
         */
        ScenarioId: string;
        /**
         * 策略ID。
         * @example `c8a2b7f2-ad1a-4865-b872-d0080d9802d9`
         */
        StrategyId: string;
        /**
         * 通话完结原因。
         * @example `1`
         */
        EndReason: number;
        /**
         * 作业ID。
         * @example `b72425bd-7871-4050-838e-033d80d754b7`
         */
        JobId: string;
        /**
         * 联系人信息。
         * @example `[]`
         */
        Contacts: {
            /**
             * 电话号码。
             * @example `1358****8888`
             */
            PhoneNumber: string;
            /**
             * 联系人状态。
             * @example `Available`
             */
            State: string;
            /**
             * 联系人ID。
             * @example `db3db762-e421-44c9-9a01-cb423470757c`
             */
            ContactId: string;
            /**
             * 联系人尊称。
             * @example `张先生`
             */
            Honorific: string;
            /**
             * 作业ID。
             * @example `72dcd26b-f12d-4c27-b3af-18f6aed5b160`
             */
            JobId: string;
            /**
             * 联系人名字。
             * @example `张三`
             */
            ContactName: string;
            /**
             * 联系人角色。
             * @example `*`
             */
            Role: string;
            /**
             * 联系人的业务ID。
             * @example `2fa6bac3-06da-4315-82ab-72d6fd3a6f34`
             */
            ReferenceId: string;
        }[];
        /**
         * 业务参数。
         * @example `[]`
         */
        Extras: {
            /**
             * 业务参数名字。
             * @example `djrq`
             */
            Key: string;
            /**
             * 业务参数值。
             * @example `2019-08-21 09:49:59.0`
             */
            Value: string;
        }[];
        /**
         * 对话摘要数据。
         * @example `[]`
         */
        Summary: {
            /**
             * 摘要名字。
             * @example `score`
             */
            SummaryName: string;
            /**
             * 对话摘要类别（历史字段，不再使用）。
             * @example `{}`
             */
            Category: string;
            /**
             * 摘要内容。
             * @example `5`
             */
            Content: string;
        }[];
        /**
         * 通话列表。
         * @example `[]`
         */
        Tasks: {
            /**
             * 通话状态。
             * @example `Succeeded`
             */
            Status: string;
            /**
             * 计划拨打时间。
             * @example `1579068424883`
             */
            PlanedTime: number;
            /**
             * 对话的机器人ID。
             * @example `1234`
             */
            ChatbotId: string;
            /**
             * 实际执行时间。
             * @example `1579068424883`
             */
            ActualTime: number;
            /**
             * 被叫号码。
             * @example `135****8888`
             */
            CalledNumber: string;
            /**
             * 实际结束的时间。
             * @example `1579068424883`
             */
            EndTime: number;
            /**
             * 场景ID。
             * @example `ade80092-03d9-4f4d-ad4f-ab8a247d3150`
             */
            ScenarioId: string;
            /**
             * 完结原因。
             * @example `FINISHED`
             */
            EndReason: string;
            /**
             * 作业ID。
             * @example `b72425bd-7871-4050-838e-033d80d754b7`
             */
            JobId: string;
            /**
             * SIP call id。
             * @example `1528189846043`
             */
            CallId: string;
            /**
             * 主叫号码。
             * @example `0571****3106`
             */
            CallingNumber: string;
            /**
             * 业务结果。(历史字段，不再使用)
             * @example `1`
             */
            Brief: string;
            /**
             * 对话持续时间。
             * @example `120`
             */
            Duration: number;
            /**
             * 通话ID。
             * @example `ff44709e-39a6-43ba-959b-20fcabe3e496`
             */
            TaskId: string;
            /**
             * 任务的对话文本列表
             * @example `[]`
             */
            Conversation: {
                /**
                 * 指令参数。
                 * @example `{}`
                 */
                ActionParams: string;
                /**
                 * 指令。
                 * @example `Broadcast`
                 */
                Action: string;
                /**
                 * 摘要创建时间。
                 * @example `1579068424883`
                 */
                Timestamp: number;
                /**
                 * 对话是谁说的，Robot 机器人 ，Contact 联系人。
                 * @example `Robot`
                 */
                Speaker: string;
                /**
                 * 对话文本。
                 * @example `你好，我是**客服`
                 */
                Script: string;
                /**
                 * 对话摘要数据(历史数据，不再使用)
                 * @example `[]`
                 */
                Summary: {
                    /**
                     * 摘要名字。
                     * @example `score`
                     */
                    SummaryName: string;
                    /**
                     * 对话摘要类别(历史字段，不再使用)
                     * @example `{}`
                     */
                    Category: string;
                    /**
                     * 摘要内容。
                     * @example `5`
                     */
                    Content: string;
                }[];
                /**
                 * 会话ID。
                 * @example `fd279983-93b9-b13b-9a34-64e5df473225`
                 */
                SequenceId: string;
            }[];
            /**
             * 联系人信息。
             * @example `{}`
             */
            Contact: {
                /**
                 * 电话号码。
                 * @example `1351****8888`
                 */
                PhoneNumber: string;
                /**
                 * 联系人状态。
                 * @example `Available`
                 */
                State: string;
                /**
                 * 联系人ID。
                 * @example `db3db762-e421-44c9-9a01-cb423470757c`
                 */
                ContactId: string;
                /**
                 * 联系人尊称。
                 * @example `张先生`
                 */
                Honorific: string;
                /**
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
                 * 联系人角色
                 * @example `*`
                 */
                Role: string;
                /**
                 * 联系人业务系统ID。
                 * @example `2fa6bac3-06da-4315-82ab-72d6fd3a6f34`
                 */
                ReferenceId: string;
            };
            /**
             * 挂断方。
             * @example `client`
             */
            HangUpDirection: string;
            /**
             * 响铃持续时间。
             * @example `25`
             */
            RingingDuration: number;
            /**
             * 呼叫任务的SIP状态码。
             * @example `200`
             */
            SipCode: string;
        }[];
        /**
         * 主叫号码列表。
         * @example `["057126883106"]`
         */
        CallingNumbers: string[];
        /**
         * 话术场景。
         */
        Script: {
            /**
             * 状态。
             * @example `DRAFTED`
             */
            Status: string;
            /**
             * 更新时间。
             * @example `1578881227000`
             */
            UpdateTime: number;
            /**
             * 对话机器人ID。
             * @example `chatbot-cn-EJfqqa***`
             */
            ChatbotId: string;
            /**
             * 话术ID。
             * @example `810b5872-57f0-4b27-80ab-7b3f4d8a6374`
             */
            ScriptId: string;
            /**
             * 调试版本是否为草稿态。
             * @example `true`
             */
            IsDebugDrafted: boolean;
            /**
             * 行业。
             * @example `金融`
             */
            Industry: string;
            /**
             * 话术描述。
             * @example `催收话术`
             */
            ScriptDescription: string;
            /**
             * 语气承接功能开关。
             * @example `true`
             */
            MiniPlaybackConfigEnabled: boolean;
            /**
             * 是否是草稿状态。
             * @example `true`
             */
            IsDrafted: boolean;
            /**
             * 话术的TTS配置。
             * @example `{\"voice\":\"xiaobei\",\"volume\":\"50\",\"speechRate\":\"-150\",\"pitchRate\":\"0\"}`
             */
            TtsConfig: string;
            /**
             * 调试状态。
             * @example `DRAFTED`
             */
            DebugStatus: string;
            /**
             * 话术的ASR配置。
             * @example `{\"AppKey\":\"3GHttnsvir1FeWWb\"}`
             */
            AsrConfig: string;
            /**
             * 场景。
             * @example `催收`
             */
            Scene: string;
            /**
             * 话术名字。
             * @example `催收话术`
             */
            Name: string;
        };
    };
}
