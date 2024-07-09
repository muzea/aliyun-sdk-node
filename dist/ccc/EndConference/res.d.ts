export interface EndConferenceResponse {
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
     * @example `0630E5DF-CEB0-445B-8626-D5C7481181C3`
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
             * 通话ID。
             * @example `job-6538214103685****`
             */
            JobId: string;
            /**
             * 实例ID。
             * @example `ccc-test`
             */
            InstanceId: string;
            /**
             * 话务通道列表。
             */
            ChannelContexts: {
                /**
                 * 话务通道的挂断方，表示该话务通道是谁首先发起的挂断。
                 * @example `1390501****`
                 */
                ReleaseInitiator: string;
                /**
                 * 话务通道的状态。
                 * @example `CREATED`
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
                 * 话务通道最近一次状态变化的时间戳，格式是Unix时间戳，单位毫秒。
                 * @example `1609138903315`
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
                 * @example `ch:user:131888****->8001****:1609225718294:job-65700074013925376`
                 */
                ChannelId: string;
                /**
                 * 话务通道的主叫方。
                 * @example `0830019****`
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
             * 坐席分机号。
             * @example `8032****`
             */
            Extension: string;
            /**
             * SIP话机设备的状态，如果未注册SIP话机，则状态为UNREGISTERED（未注册），如过SIP话机注册过但是不在线，则状态为OFFLINE（离线），如果SIP话机注册过并且在线则为ONLINE（在线）。
             * @example `UNREGISTERED`
             */
            DeviceState: string;
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
             * @example `job-6538214103685****`
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
             * @example `TALKING`
             */
            UserState: string;
            /**
             * 坐席签入的技能组ID列表。
             */
            SignedSkillGroupIdList: string[];
        };
        /**
         * 系统自增ID，客户无需关心。
         * @example `103655`
         */
        ContextId: number;
    };
}
