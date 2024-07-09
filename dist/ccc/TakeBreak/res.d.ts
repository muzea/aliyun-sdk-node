export interface TakeBreakResponse {
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
     * @example `B59382D2-5755-4C6D-861F-FA2AAD8F89F7`
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
         * 坐席分机号。
         * @example `8001****`
         */
        Extension: string;
        /**
         * 上次收到坐席心跳的时间，格式为Unix时间戳，单位毫秒。
         * @example `1609249563836`
         */
        Heartbeat: number;
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
         * @example `agent@ccc-test`
         */
        UserId: string;
        /**
         * 坐席最近一次被预定的时间，被预定意味着马上将有来电分配给该坐席，格式为Unix时间戳，单位毫秒。
         * @example `1609234221864`
         */
        Reserved: number;
        /**
         * 小休状态码，分为系统定义的和客户定义的两种，系统定义的小休吗包括：Warm-up （坐席上线后置闲前的临时小休状态）、RingingTimeout（坐席振铃超时导致的小休）、RejectCall（坐席拒接导致的小休）。客户自定义状态码没有限制，客户可以根据业务需要自行定义。
         * @example `lunchtime`
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
         * 坐席的个人电话号码。
         * @example `1390000****`
         */
        Mobile: string;
        /**
         * 通话ID。
         * @example `无`
         */
        JobId: string;
        /**
         * 座席状态。
         * @example `BREAK`
         */
        UserState: string;
        /**
         * 坐席签入的技能组ID列表。
         */
        SignedSkillGroupIdList: string[];
    };
}
