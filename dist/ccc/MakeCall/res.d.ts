export interface MakeCallResponse {
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
     * @example `26A34338-5CD9-4C95-A7A6-5BDCE76C6B94`
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
         * @example `123456`
         */
        ContextId: number;
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
             * @example `job-6570007401392****`
             */
            JobId: string;
            /**
             * 话务通道列表。
             */
            ChannelContexts: {
                /**
                 * 话务通道的挂断方，表示该话务通道是谁首先发起的挂断。
                 * @example `无`
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
                 * 话务通道关联的坐席ID，如果是客户的话务通道，该字段为空。
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
                 * @example `1609225718295`
                 */
                Timestamp: number;
                /**
                 * 话务通道的挂断原因，表示当前话务通道为什么会被挂断，取值来自SIP协议中定义的响应码，请客户参考SIP协议分析挂断原因。
                 * @example `无`
                 */
                ReleaseReason: string;
                /**
                 * 话务通道的通话类型。
                 * @example `OUTBOUND`
                 */
                CallType: string;
                /**
                 * 通话ID。
                 * @example `job-6570007401392****`
                 */
                JobId: string;
                /**
                 * 话务通道ID。
                 * @example `ch:user:1390501****->8032****:1609138902226:job-653821410368****`
                 */
                ChannelId: string;
                /**
                 * 话务通道的主叫方。
                 * @example `1318888****`
                 */
                Originator: string;
                /**
                 * 话务通道关联的坐席的分机号。
                 * @example `8001****`
                 */
                UserExtension: string;
                /**
                 * 媒体类型，默认是语音(AUDIO), 其他可选参数包括VIDEO。
                 * @example `Audio`
                 */
                MediaType: string;
            }[];
        };
        /**
         * 坐席上下文环境。
         */
        UserContext: {
            /**
             * 坐席分机号。
             * @example `8001****`
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
             * 通话ID。
             * @example `job-6570007401392****`
             */
            JobId: string;
            /**
             * 坐席ID。
             * @example `agent@ccc-test`
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
             * 座席状态。
             * @example `READY`
             */
            UserState: string;
            /**
             * 坐席签入的技能组ID列表。
             */
            SignedSkillGroupIdList: string[];
        };
    };
}
