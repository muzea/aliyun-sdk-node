export interface ListCallDetailRecordsResponse {
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
     * @example `EEEE671A-3E24-4A04-81E6-6C4F5B39DF75`
     */
    RequestId: string;
    /**
     * 数据。
     */
    Data: {
        /**
         * 分页序号，范围1-100。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 分页大小，范围1-100。
         * @example `10`
         */
        PageSize: number;
        /**
         * 总数，只有PageNumber为1才会返回真实数值，其他都是0。
         * @example `11`
         */
        TotalCount: number;
        /**
         * 通话记录列表。
         */
        List: {
            /**
             * 通话结束原因。
             * @example `Success`
             */
            ContactDisposition: string;
            /**
             * 通话类型。
             * @example `Outbound`
             */
            ContactType: string;
            /**
             * 通话建立的时间，如果通话没有建立，此值为空，格式为Unix时间戳，单位毫秒。
             * @example `1532448000000`
             */
            EstablishedTime: number;
            /**
             * 被叫号码。
             * @example `1332315****`
             */
            CalledNumber: string;
            /**
             * 附加中间号码，双呼场景下可能用到。
             * @example `0533128****`
             */
            AdditionalBroker: string;
            /**
             * 满意度，即满意度按键数字（1位数字）的值。
             * @example `1`
             */
            SatisfactionIndex: number;
            /**
             * 满意度调查渠道。
             * @example `IVR`
             */
            SatisfactionSurveyChannel: string;
            /**
             * 通话结束时间，格式为Unix时间戳，单位毫秒。
             * @example `1532707199000`
             */
            ReleaseTime: number;
            /**
             * 客户等待时长，即QueueTime+RingTime，若客户等待期间放弃，则为0，单位秒。
             * @example `5`
             */
            WaitTime: number;
            /**
             * 参与通话的座席所属的技能组名称，多个技能组以英文逗号分隔。
             * @example `测试技能组`
             */
            SkillGroupNames: string;
            /**
             * IVR时长，即从开始进入IVR到开始进入转人工队列（或客户放弃）之间的时长，单位秒。
             * @example `8`
             */
            IvrTime: number;
            /**
             * 满意度描述，对应于满意度IVR中满意度模块的配置，客户自行定义。
             * @example `满意`
             */
            SatisfactionDescription: string;
            /**
             * 挂断方。
             * @example `customer`
             */
            ReleaseInitiator: string;
            /**
             * 坐席ID列表，多个值用逗号分隔。
             * @example `agent@ccc-test`
             */
            AgentIds: string;
            /**
             * 通话时长，呼入从通话进入IVR开始计时，呼出从接通开始计时，单位秒。
             * @example `30`
             */
            CallDuration: string;
            /**
             * 录音是否已经生成，若通话没有建立，则返回false。
             * @example `true`
             */
            RecordingReady: boolean;
            /**
             * 实例ID。
             * @example `ccc-test`
             */
            InstanceId: string;
            /**
             * 振铃时长，即从坐席振铃到坐席接起（或客户放弃）之间的时长，单位秒。
             * @example `5`
             */
            RingTime: number;
            /**
             * 是否发起了满意度调查。
             * @example `true`
             */
            SatisfactionSurveyOffered: boolean;
            /**
             * 通话涉及到的坐席名称列表，多个坐席之间使用英文逗号隔开。
             * @example `坐席小王`
             */
            AgentNames: string;
            /**
             * 通话开始时间，内呼从进入IVR开始，外呼从拨号开始计算，格式为Unix字符串，单位毫秒。
             * @example `1532448000000`
             */
            StartTime: number;
            /**
             * 通话ID。
             * @example `job-12515239414412****`
             */
            ContactId: string;
            /**
             * 录音时长，单位秒。
             * @example `10`
             */
            RecordingDuration: number;
            /**
             * 主叫号码。
             * @example `0533128****`
             */
            CallingNumber: string;
            /**
             * 排队时长，即从开始进入转人工队列到坐席开始振铃（或客户放弃，队列超时，队列溢出）之间的时长，单位秒。
             * @example `0`
             */
            QueueTime: number;
            /**
             * 中间号码。
             * @example `0533127****`
             */
            Broker: string;
            /**
             * 参与通话的座席所属的技能组ID，多个技能组以逗号分隔。
             * @example `skillgroup@ccc-test`
             */
            SkillGroupIds: string;
            /**
             * 主叫归属地。
             * @example `北京市-北京`
             */
            CallerLocation: string;
            /**
             * 被叫归属地。
             * @example `山东省-济南`
             */
            CalleeLocation: string;
            /**
             * 未接通原因。
             * @example `NotConnected`
             */
            EarlyMediaState: string;
            /**
             * 话务通道的挂断原因，表示当前话务通道为什么会被挂断，取值来自SIP协议中定义的响应码，请客户参考SIP协议分析挂断原因。
             * @example `486:USER_BUSY`
             */
            ReleaseReason: string;
            /**
             * 拨号时长，单位秒。
             * @example `0`
             */
            DialingTime: number;
            /**
             * 通话时间，单位为秒
             * @example `0`
             */
            TalkTime: number;
            /**
             * 保持时间，单位为秒
             * @example `12`
             */
            HeldTime: number;
        }[];
    };
}
