export interface RedialCallResponse {
    /**
     * 状态码。返回OK代表请求成功，其他错误码详见错误码列表。
     * @example `OK`
     */
    Code: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应信息
     * @example `无`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `BF268B34-09C2-43FD-BAC4-5D31EA63****`
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
         * 上下文ID，严格有序递增。
         * @example `123456789`
         */
        ContextId: number;
        /**
         * 话务上下文环境。
         */
        CallContext: {
            /**
             * 呼叫类型, 最初发起呼叫时的类型。
             * @example `OUTBOUND`
             */
            CallType: string;
            /**
             * 呼叫中心实例ID。
             * @example `abc`
             */
            InstanceId: string;
            /**
             * 话务ID。
             * @example `job-6538214103685****`
             */
            JobId: string;
            /**
             * 话务通道列表。
             */
            ChannelContexts: {
                /**
                 * 话务通道的挂断方，表示该话务通道是谁首先发起的挂断。
                 * @example `139xxxx0501`
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
                 * 座席用户ID信息。
                 * @example `samzhang@abc`
                 */
                UserId: string;
                /**
                 * 话务通道标志。
                 * @example `COACHING`
                 */
                ChannelFlags: string;
                /**
                 * 状态数据上次变更时间戳。
                 * @example `1609138903315`
                 */
                Timestamp: number;
                /**
                 * 话务通道的挂断原因，表示当前话务通道为什么会被挂断，取值来自SIP协议中定义的响应码，请客户参考SIP协议分析挂断原因。
                 * @example `486:USER_BUSY`
                 */
                ReleaseReason: string;
                /**
                 * 话务通道的通话类型。
                 * @example `OUTBOUND`
                 */
                CallType: string;
                /**
                 * 话务ID。
                 * @example `job-6573574060089****`
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
                 * 用户分机号。
                 * @example `8000****
                `
                 */
                UserExtension: string;
            }[];
        };
        /**
         * 坐席上下文环境。
         */
        UserContext: {
            /**
             * 用户分机号。
             * @example `8000****`
             */
            Extension: string;
            /**
             * 工作模式。枚举值：
             * - ON_SITE: 场内模式
             * - OFF_SITE: 场外模式
             * - OFFICE_PHONE: 办公电话模式
             * @example `ON_SITE
            `
             */
            WorkMode: string;
            /**
             * 设备ID，浏览器WebRTC软电话或实体话机设备的标识ID，同一时间只允许一种设备注册。
             * @example `CCC-x.x.x.x-chrome102-bsdf911812c60f61e
            `
             */
            DeviceId: string;
            /**
             * 话务ID。
             * @example `job-6573574060089****`
             */
            JobId: string;
            /**
             * 座席用户ID信息。
             * @example `samzhang@abc
            `
             */
            UserId: string;
            /**
             * 小休状态码，分为系统定义和客户定义两种。
             * 系统定义的小休码：
             * - Warm-up：坐席上线后置闲前的临时小休状态
             * - RingingTimeout： 坐席振铃超时导致的小休
             * - RejectCall：坐席拒接导致的小休
             * 客户自定义状态码没有限制，客户可以根据业务需要自行定义。
             * @example `Warm-up`
             */
            BreakCode: string;
            /**
             * 实例ID。
             * @example `abc`
             */
            InstanceId: string;
            /**
             * 坐席是否处于仅外呼模式。
             * @example `False`
             */
            OutboundScenario: boolean;
            /**
             * 座席状态。枚举值：
             * - READY: 空闲
             * - WORKING: 话后处理中
             * - DIALING: 拨号中
             * - BREAK: 小休
             * - OFFLINE: 离线
             * - TALKING: 通话中
             * - RINGING: 振铃中
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
