export interface GetHotlineMessageLogRequest {
    /**
     * AICCS实例ID。可在智能联络中心控制台上获取。
     * @example `ccc_xp_pre-cn-***`
     */
    "InstanceId": string;
    /**
     * 会话ID。
     * @example `100****2077`
     */
    "Acid": string;
}
