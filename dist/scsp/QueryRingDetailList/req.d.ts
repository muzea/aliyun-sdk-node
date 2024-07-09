export interface QueryRingDetailListRequest {
    /**
     * 每页大小（默认为20）
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 当前页（默认为1）
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 开始时间戳（毫秒）
     * @example `1614824872`
     */
    "StartDate"?: number;
    /**
     * 结束时间戳（毫秒）
     * @example `1614824972`
     */
    "EndDate"?: number;
    /**
     * 更新的回访状态，有以下枚举
     * 0：未回访
     * 1：无人接听
     * 2：需再次回访
     * 3：号码无效
     * 4：回访成功
     * 5：无需回访
     * @example `4`
     */
    "CallOutStatus"?: string;
    /**
     * 扩展字段，json字符串
     * @example `{\"isCallBack\":\"true\"}`
     */
    "Extra"?: string;
    /**
     * AICCS实例ID，在智能联络中心控制台上可以看到
     * @example `ccc_xp_pre-cn-***`
     */
    "InstanceId": string;
    /**
     * 主叫号码列表-用户手机号码、客服坐席号码、机器号码等
     */
    "FromPhoneNumList"?: any;
    /**
     * 被叫号码列表-用户手机号码、客服坐席号码、机器号码等
     */
    "ToPhoneNumList"?: any;
}
