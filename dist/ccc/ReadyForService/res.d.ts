export interface ReadyForServiceResponse {
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
     * @example `CC49060B-87ED-489A-AD3D-00E57775DBFF`
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
         * @example `Warm-up
        `
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
}
