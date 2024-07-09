export interface ClaimChatResponse {
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
     * @example `BC976D32-AC4C-4E0F-8AA9-F4BC6C4E2B3E`
     */
    RequestId: string;
    /**
     * 响应参数列表。
     */
    Params: string[];
    /**
     * 数据。
     */
    Data: {
        /**
         * 系统自增ID，客户无需关心。
         * @example `123456789`
         */
        ContextId: number;
        /**
         * 坐席上下文环境。
         */
        UserContext: {
            /**
             * 上次收到坐席心跳的时间，格式为 Unix 时间戳，单位毫秒。
             * @example `1609136956378`
             */
            Heartbeat: number;
            /**
             * 坐席分机号。
             * @example `8032****
            `
             */
            Extension: string;
            /**
             * 工作模式。Chat场景无需关心。
             * 枚举值：
             * - ON_SITE：场内模式。
             * - OFF_SITE：场外模式。
             * - OFFICE_PHONE：办公电话模式。
             * @example `ON_SITE`
             */
            WorkMode: string;
            /**
             * 设备 ID。
             * @example `CCC-169.254.165.2-browser125.0.0-bs48b41903450e6c8`
             */
            DeviceId: string;
            /**
             * 坐席ID。
             * @example `userId@ccc-test`
             */
            UserId: string;
            /**
             * 坐席最近一次被预定的时间，格式为 Unix 时间戳，单位毫秒。
             * @example `false`
             */
            Reserved: number;
            /**
             * 小休状态码。
             * @example `Warm-up`
             */
            BreakCode: string;
            /**
             * 实例ID。
             * @example `ccc-test`
             */
            InstanceId: string;
            /**
             * 仅外呼场景。Chat业务无需关心。
             * @example `false`
             */
            OutboundScenario: boolean;
            /**
             * 设备状态。
             * @example `ONLINE`
             */
            DeviceState: string;
            /**
             * 坐席的个人电话号码。Chat场景无需关心。
             * @example `18******102`
             */
            Mobile: string;
            /**
             * 话务ID。
             * @example `chat-65382141036853491
            `
             */
            JobId: string;
            /**
             * 座席状态。
             * 枚举值：
             * - READY：空闲。
             * - WORKING：话后处理中。
             * - BREAK：小休。
             * - OFFLINE：离线。
             * - TALKING：聊天中。
             * - RINGING：聊天进线中。
             * @example `TALKING`
             */
            UserState: string;
            /**
             * 坐席签入的技能组 ID 列表。
             */
            SignedSkillGroupIdList: string[];
        };
        /**
         * 会话上下文环境。
         */
        ChatContexts: {
            /**
             * 实例ID。
             * @example `ccc-test`
             */
            InstanceId: string;
            /**
             * 话务ID。
             * @example `chat-65382141036853491
            `
             */
            JobId: string;
            /**
             * 会话类型。
             * @example `INBOUND`
             */
            ChatType: string;
            /**
             * 随路数据。
             * @example `无`
             */
            CallVariables: string;
            /**
             * 网络业务渠道ID。
             * @example `226****-cbb6-****-8fea-1e71baf7bfa7`
             */
            AccessChannelId: string;
            /**
             * 网络业务渠道类型。
             * @example `Web`
             */
            AccessChannelType: string;
            /**
             * 网络业务渠道名字。
             * @example `测试渠道`
             */
            AccessChannelName: string;
            /**
             * 会话是否已分配坐席。
             * @example `true`
             */
            BeingAssigned: boolean;
        }[];
    };
}
