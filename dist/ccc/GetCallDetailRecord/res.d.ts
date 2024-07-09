export interface GetCallDetailRecordResponse {
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应信息。
     * @example `无`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `7BEEA660-A45A-45E3-98CC-AFC65E715C23`
     */
    RequestId: string;
    /**
     * 数据。
     */
    Data: {
        /**
         * 挂断方。
         * @example `customer`
         */
        ReleaseInitiator: string;
        /**
         * 电话结束原因，注意：语音邮箱、转人工失败、排队超时、排队溢出、IVR异常的挂断原因需要客户配置挂断原因节点才能体现出来，如果没有配置且IVR中无转人工模块，这时候的挂断原因默认为IVR放弃。
         * @example `Success`
         */
        ContactDisposition: string;
        /**
         * 通话类型。
         * @example `OUTBOUND`
         */
        ContactType: string;
        /**
         * 坐席ID列表，表示通话流经的坐席，多个值用逗号分隔。
         * @example `agent1@ccc-test,agent2@ccc-test`
         */
        AgentIds: string;
        /**
         * 通话时长，单位秒。
         * @example `50`
         */
        CallDuration: number;
        /**
         * 录音是否已经生成，若通话还没有建立，返回false。
         * @example `true`
         */
        RecordingReady: boolean;
        /**
         * 通话建立的时间，如果通话没有建立，此值为空，格式为Unix时间戳，单位毫秒。
         * @example `1532458000000`
         */
        EstablishedTime: number;
        /**
         * 实例ID。
         * @example `ccc-test`
         */
        InstanceId: string;
        /**
         * 是否发送了满意度调查。
         * @example `true`
         */
        SatisfactionSurveyOffered: boolean;
        /**
         * 被叫号码。
         * @example `1332315****`
         */
        CalledNumber: string;
        /**
         * 坐席名称列表，表示通话流经的坐席，多个值用逗号隔开。
         * @example `agent1,agent2`
         */
        AgentNames: string;
        /**
         * 满意度结果，满意度的取值及含义由客户自定义。
         * @example `1`
         */
        Satisfaction: number;
        /**
         * 通话开始时间，呼入从进入IVR开始，呼出从开始接通计算，格式为Unix时间戳，单位毫秒。
         * @example `1532458000000`
         */
        StartTime: number;
        /**
         * 通话ID。
         * @example `job-10963442671187****`
         */
        ContactId: string;
        /**
         * 发起满意度调查的渠道。
         * @example `IVR`
         */
        SatisfactionSurveyChannel: string;
        /**
         * 通话结束时间，以参与通话的所有对象中最后一个挂断的时间为准，格式为Unix时间戳，单位毫秒。
         * @example `1532458000000`
         */
        ReleaseTime: number;
        /**
         * 主叫号码。
         * @example `0533128****`
         */
        CallingNumber: string;
        /**
         * 参与通话的座席所属的技能组名称，多个技能组以逗号分隔。
         * @example `测试技能组`
         */
        SkillGroupNames: string;
        /**
         * 参与通话的座席所属的技能组ID，多个技能组以逗号分隔。
         * @example `skillgroup@ccc-test`
         */
        SkillGroupIds: string;
        /**
         * 坐席事件列表。
         */
        AgentEvents: {
            /**
             * 坐席名称。
             * @example `坐席小王`
             */
            AgentName: string;
            /**
             * 坐席ID。
             * @example `agent@ccc-test`
             */
            AgentId: string;
            /**
             * 技能组ID。
             * @example `skillgroup@ccc-test`
             */
            SkillGroupId: string;
            /**
             * 事件序列。
             */
            EventSequence: {
                /**
                 * 事件类型。
                 * @example `Dialing`
                 */
                Event: string;
                /**
                 * 事件发生时间戳，格式为Unix时间戳，单位毫秒。
                 * @example `1604639129000`
                 */
                EventTime: number;
                /**
                 * 时间的持续时长，单位秒。
                 * @example `3`
                 */
                Duration: number;
            }[];
        }[];
        /**
         * IVR事件列表。
         */
        IvrEvents: {
            /**
             * IVR联系流ID。
             * @example `edaf2eaa-8f88-44ca-812e-41b3cd2b7a90`
             */
            FlowId: string;
            /**
             * 事件序列。
             */
            EventSequence: {
                /**
                 * 事件类型。
                 * @example `Route2IVR`
                 */
                Event: string;
                /**
                 * 事件发生时间戳，格式为Unix时间戳，单位毫秒。
                 * @example `1604639129000`
                 */
                EventTime: number;
            }[];
            /**
             * 联系流类型。
             * @example `MAIN_FLOW`
             */
            FlowType: string;
        }[];
        /**
         * 队列事件列表。
         */
        QueueEvents: {
            /**
             * 队列ID，如果是技能组队列，则为技能组ID，如果是坐席个人队列，则为坐席ID。
             * @example `skillgroup@ccc-test`
             */
            QueueId: string;
            /**
             * 队列名称。
             * @example `测试技能组`
             */
            QueueName: string;
            /**
             * 联系流ID。
             * @example `edaf2eaa-8f88-44ca-812e-41b3cd2b7a90`
             */
            FlowId: string;
            /**
             * 队列类型。
             * @example `1`
             */
            QueueType: number;
            /**
             * 事件序列。
             */
            EventSequence: {
                /**
                 * 事件类型。
                 * @example `Enqueue`
                 */
                Event: string;
                /**
                 * 事件发生时间戳，格式为Unix时间戳，单位毫秒。
                 * @example `1604639129000`
                 */
                EventTime: number;
            }[];
        }[];
        /**
         * 客户事件列表。
         */
        CustomerEvents: {
            /**
             * 客户ID，通常为客户号码。
             * @example `1332315****`
             */
            CustomerId: string;
            /**
             * 事件序列。
             */
            EventSequence: {
                /**
                 * 事件类型。
                 * @example `Released`
                 */
                Event: string;
                /**
                 * 事件发生时间戳，格式为Unix时间戳，单位毫秒。
                 * @example `1532458000000`
                 */
                EventTime: number;
            }[];
        }[];
        /**
         * 主叫号码的归属地信息。
         * @example ` 山东省-淄博`
         */
        CallerLocation: string;
        /**
         * 被叫号码的归属地信息。
         * @example `河北省-唐山`
         */
        CalleeLocation: string;
        /**
         * 早媒体状态，指通话在早媒体阶段发生异常，此时通常是呼叫客户的阶段，发生异常会导致呼叫客户失败，因此该状态是根据早媒体的状态分析出来的可能的未接通原因。
         * @example `NotConnected`
         */
        EarlyMediaState: string;
        /**
         * 通话结束原因，一般是 SipCode加文字描述格式.
         * @example `200 - OK`
         */
        ReleaseReason: string;
    };
}
