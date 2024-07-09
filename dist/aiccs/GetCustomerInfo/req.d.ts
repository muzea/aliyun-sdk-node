export interface GetCustomerInfoRequest {
    /**
     * AICCS实例ID。可在智能联络中心控制台上获取。
     * @example `ccc_xp_pre-cn-***`
     */
    "InstanceId": string;
    /**
     * 会员ID。
     * @example `82345678****`
     */
    "MemberId": number;
}
