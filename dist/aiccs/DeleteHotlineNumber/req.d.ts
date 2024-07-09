export interface DeleteHotlineNumberRequest {
    /**
     * AICCS实例ID。可在智能联络中心控制台上获取。
     * @example `ccc_xp_pre-cn-***`
     */
    "InstanceId": string;
    /**
     * 热线号码。
     * @example `05710000****`
     */
    "HotlineNumber": string;
}
