export interface UpdateRingStatusRequest {
    /**
     * 数据唯一主键
     * @example `78604`
     */
    "UniqueBizId"?: string;
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
}
