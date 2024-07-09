export interface QueryJobsResponse {
    /**
     * 响应码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * HTTP状态码。
     * @example `OK`
     */
    Code: string;
    /**
     * 响应信息。
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
     * 作业数据。
     */
    Jobs: {
        /**
         * 分页序号。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 分页大小。
         * @example `10`
         */
        PageSize: number;
        /**
         * 数据总数。
         * @example `1`
         */
        TotalCount: number;
        /**
         * 作业数组
         */
        List: {
            /**
             * 状态。
             * @example `Succeeded`
             */
            Status: string;
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
             * 作业ID。
             * @example `fce6c599-8ede-40e3-9f78-0928eda7b4e8`
             */
            JobId: string;
            /**
             * 优先级。
             * @example `1`
             */
            Priority: number;
            /**
             * 失败原因。
             * - Unknown(未知错误),
             * - NoAnswer(无人接听),
             * - InvalidStrategy(无效的策略，策略配置不正确),
             * - TimeUp(调度时发现超时),
             * - NoStrategy(策略为空或没有找到),
             * - CallFailed(呼叫失败),
             * - PerDayCallCountLimit(号码每日呼叫次数限制),
             * - ContactBlockList(禁止外呼名单),
             * - EmptyNumber(空号不再外呼),
             * - JobPerDayCallCountLimit(号码每日呼叫次数限制),
             * - VerificationCancelled(呼叫前验证不通过取消),
             * - ContactSuspended(止呼),
             * - InArrears(欠费),
             * - OutOfService(停机);
             * @example `NoAnswer`
             */
            FailureReason: string;
            /**
             * 关联业务ID。
             * @example `d5971d98-7312-4f0e-a918-a17d67133e28`
             */
            ReferenceId: string;
            /**
             * 联系人信息。
             */
            Contacts: {
                /**
                 * 电话号码。
                 * @example `135****8888`
                 */
                PhoneNumber: string;
                /**
                 * 状态。
                 * - Available(正常),
                 * - WrongNumber(号码错误),
                 * - DoesNotExist(空号),
                 * - Suspended(止呼);
                 * @example `Available`
                 */
                State: string;
                /**
                 * 联系人ID。
                 * @example `db3db762-e421-44c9-9a01-cb423470757c`
                 */
                ContactId: string;
                /**
                 * 尊称。
                 * @example `张先生`
                 */
                Honorific: string;
                /**
                 * 作业ID。
                 * @example `72dcd26b-f12d-4c27-b3af-18f6aed5b160`
                 */
                JobId: string;
                /**
                 * 联系人姓名。
                 * @example `张三`
                 */
                ContactName: string;
                /**
                 * 角色。
                 * @example `*`
                 */
                Role: string;
                /**
                 * 关联业务ID。
                 * @example `2fa6bac3-06da-4315-82ab-72d6fd3a6f34`
                 */
                ReferenceId: string;
            }[];
            /**
             * 业务数据
             */
            Extras: {
                /**
                 * 业务数据key
                 * @example `djrq`
                 */
                Key: string;
                /**
                 * 业务数据value
                 * @example `2019-08-21 09:49:59.0`
                 */
                Value: string;
            }[];
            /**
             * 对话小结。(历史字段，不再使用)
             */
            Summary: {
                /**
                 * 小结名称。
                 * @example `score`
                 */
                SummaryName: string;
                /**
                 * 任务ID。
                 * @example `ba1ba502-d044-48c0-b710-0f1f840a7c53`
                 */
                GroupId: string;
                /**
                 * 作业ID。
                 * @example `994b8baf-7ef8-480c-b141-b7b6db77c4df`
                 */
                JobId: string;
                /**
                 * 类别
                 * @example `{}`
                 */
                Category: string;
                /**
                 * 通话ID。
                 * @example `9fdf7a81-6781-4ab8-92fb-1d4231ef365e`
                 */
                TaskId: string;
                /**
                 * 内容
                 * @example `5`
                 */
                Content: string;
                /**
                 * 通话记录id
                 * @example `098b9b09-9223-4a8b-a422-99726f0457f3`
                 */
                ConversationDetailId: string;
                /**
                 * 摘要id
                 * @example `dc67d544-df06-4625-ae48-13e3c9f72d8a`
                 */
                SummaryId: string;
            }[];
            /**
             * 通话列表。
             */
            Tasks: {
                /**
                 * 通话状态。
                 * - Executing(0正在拨打),
                 * - Succeeded(已接通),
                 * - NoAnswer(未接通-无人接听),
                 * - NotExist(未接通-空号),
                 * - Busy(未接通-占线),
                 * - Failed(失败),
                 * - NotConnected(未接通-无法接通),
                 * - PoweredOff(未接通-关机),
                 * - OutOfService(未接通-被叫停机),
                 * - InArrears(未接通-被叫欠费),
                 * - EmptyNumber(未呼出-空号不外呼),
                 * - PerDayCallCountLimit(未呼出-超出每日上限),
                 * - ContactBlockList(未呼出-黑名单),
                 * - OutOfServiceNoCall(未呼出-被叫停机不外呼),
                 * - InArrearsNoCall(未呼出-被叫欠费不外呼),
                 * - CallingNumberNotExist(未呼出-主叫号码不存在)
                 * @example `Succeeded`
                 */
                Status: string;
                /**
                 * 计划呼出时间。
                 * @example `1579068424883`
                 */
                PlanedTime: number;
                /**
                 * 机器人ID。
                 * @example `1234`
                 */
                ChatbotId: string;
                /**
                 * 实际呼出时间。
                 * @example `1579068424883`
                 */
                ActualTime: number;
                /**
                 * 被叫号码。
                 * @example `135****8888`
                 */
                CalledNumber: string;
                /**
                 * 场景ID。
                 * @example `ade80092-03d9-4f4d-ad4f-ab8a247d3150`
                 */
                ScenarioId: string;
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
                 * 总结(历史字段，不再使用)
                 * @example `1`
                 */
                Brief: string;
                /**
                 * 通话时长。
                 * @example `120`
                 */
                Duration: number;
                /**
                 * 通话ID。
                 * @example `ff44709e-39a6-43ba-959b-20fcabe3e496`
                 */
                TaskId: string;
                /**
                 * 联系人信息。
                 */
                Contact: {
                    /**
                     * 联系人电话号码。
                     * @example `135****8888`
                     */
                    PhoneNumber: string;
                    /**
                     * 状态。
                     * @example `Available`
                     */
                    State: string;
                    /**
                     * 联系人ID。
                     * @example `db3db762-e421-44c9-9a01-cb423470757c`
                     */
                    ContactId: string;
                    /**
                     * 尊称。
                     * @example `张先生`
                     */
                    Honorific: string;
                    /**
                     * 作业ID。
                     * @example `b72425bd-7871-4050-838e-033d80d754b7`
                     */
                    JobId: string;
                    /**
                     * 联系人名称。
                     * @example `张三`
                     */
                    ContactName: string;
                    /**
                     * 角色。
                     * @example `*`
                     */
                    Role: string;
                    /**
                     * 业务关联ID。
                     * @example `2fa6bac3-06da-4315-82ab-72d6fd3a6f34`
                     */
                    ReferenceId: string;
                };
            }[];
            /**
             * 主叫号码列表。
             */
            CallingNumbers: string[];
            /**
             * 命中标签信息。
             */
            TagHits: {
                /**
                 * 标签名称。
                 * @example `有意向`
                 */
                TagName: string;
                /**
                 * 标签组名称。
                 * @example `意向收集`
                 */
                TagGroup: string;
            }[];
        }[];
    };
}
