export interface GetOuterCallCenterDataListRequest {
    /**
     * 机器人session_id
     * @example `a15ce370-1051-4040-9822`
     */
    "SessionId"?: string;
    /**
     * 发起方号码-用户手机号码、客服坐席号码、机器号码等
     * @example `135615`
     */
    "FromPhoneNum"?: string;
    /**
     * 接听方号码-用户手机号码、客服坐席号码、机器号码等
     * @example `0571773`
     */
    "ToPhoneNum"?: string;
    /**
     * 关键单据号-如订单ID等
     * @example `78604`
     */
    "BizId"?: string;
    /**
     * AICCS实例ID，在智能联络中心控制台上可以看到
     * @example `ccc_xp_pre-cn-***`
     */
    "InstanceId": string;
    /**
     * 开始时间戳（毫秒）
     * @example `1614824872`
     */
    "QueryStartTime"?: string;
    /**
     * 结束时间戳（毫秒）
     * @example `1614824972`
     */
    "QueryEndTime"?: string;
}
