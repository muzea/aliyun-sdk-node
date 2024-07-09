export interface SwitchToConferenceResponse {
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
     * @example `D9C96A73-09C9-5E2A-8CDB-85EC0BC246DA`
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
         * 话务上下文环境。
         */
        CallContext: {
            /**
             * 通话类型。
             * @example `OUTBOUND`
             */
            CallType: string;
            /**
             * 实例ID。
             * @example `ccc-test`
             */
            InstanceId: string;
            /**
             * 通话ID。
             * @example `job-6538214103685****`
             */
            JobId: string;
            /**
             * 话务通道列表。
             */
            ChannelContexts: {
                /**
                 * 系统自增ID，客户无需关心。
                 * @example `1`
                 */
                Index: number;
                /**
                 * 话务通道的挂断方，表示该话务通道是谁首先发起的挂断。
                 * @example `1390501****`
                 */
                ReleaseInitiator: string;
                /**
                 * 话务通道的状态。
                 * @example `NONE`
                 */
                ChannelState: string;
                /**
                 * 话务通道的被叫方。
                 * @example `8001****`
                 */
                Destination: string;
                /**
                 * 该通话相关技能组。呼入场景下，技能组由IVR中路由的排队队列指定。在呼出场景下，技能组是座席签入的第一个技能组。
                 * @example `skillgroup@ccc-test`
                 */
                SkillGroupId: string;
                /**
                 * 坐席ID。
                 * @example `agent@ccc-test`
                 */
                UserId: string;
                /**
                 * 话务通道标志。
                 * @example `MONITORING`
                 */
                ChannelFlags: string;
                /**
                 * 话务通道最近一次状态变化的时间戳，格式是Unix时间戳，单位毫秒。
                 * @example `1609255716900`
                 */
                Timestamp: number;
                /**
                 * 话务通道的挂断原因，表示当前话务通道为什么会被挂断，取值来自SIP协议中定义的响应码，请客户参考SIP协议分析挂断原因。
                 * @example `404 - No destination`
                 */
                ReleaseReason: string;
                /**
                 * 话务通道的通话类型。
                 * @example `OUTBOUND`
                 */
                CallType: string;
                /**
                 * 通话ID。
                 * @example `job-6538214103685****`
                 */
                JobId: string;
                /**
                 * 话务通道ID。
                 * @example `ch:user:131888****->8001****:1609225718294:job-6538214103685****`
                 */
                ChannelId: string;
                /**
                 * 话务通道的主叫方。
                 * @example `1318888****`
                 */
                Originator: string;
                /**
                 * 话务通道关联的坐席的分机号。
                 * @example `8032****`
                 */
                UserExtension: string;
            }[];
        };
        /**
         * 坐席上下文环境。
         */
        UserContext: {
            /**
             * 上次收到坐席心跳的时间，格式为Unix时间戳，单位毫秒。
             * @example `agent@ccc-test`
             */
            Heartbeat: number;
            /**
             * 坐席分机号。
             * @example `8032****`
             */
            Extension: string;
            /**
             * 工作模式。
             * @example `ON_SITE`
             */
            WorkMode: string;
            /**
             * 设备ID，浏览器WebRTC软电话或实体话机设备的标识ID，同一时间只允许一种设备注册。
             * @example `ACC-YUNBS-1.0.10-****`
             */
            DeviceId: string;
            /**
             * 坐席ID。
             * @example `1609136956378`
             */
            UserId: string;
            /**
             * 小休状态码，分为系统定义的和客户定义的两种，系统定义的小休吗包括：Warm-up （坐席上线后置闲前的临时小休状态）、RingingTimeout（坐席振铃超时导致的小休）、RejectCall（坐席拒接导致的小休）。客户自定义状态码没有限制，客户可以根据业务需要自行定义。
             * @example `Warm-up`
             */
            BreakCode: string;
            /**
             * 实例ID。
             * @example `ccc-test`
             */
            InstanceId: string;
            /**
             * 坐席是否处于仅外呼模式。
             * @example `false`
             */
            OutboundScenario: boolean;
            /**
             * 设备状态。
             * @example `false`
             */
            DeviceState: string;
            /**
             * 坐席的个人电话号码。
             * @example `1324730****`
             */
            Mobile: string;
            /**
             * 通话ID。
             * @example `job-6538214103685****`
             */
            JobId: string;
            /**
             * 座席状态。
             * @example `TALKING`
             */
            UserState: string;
            /**
             * 坐席签入的技能组ID列表。
             */
            SignedSkillGroupIdList: string[];
        };
    };
}
