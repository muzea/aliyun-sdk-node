export interface GetRecordUrlRequest {
    /**
     * AICCS实例ID。可在[智能联络中心控制台](https://aiccs.console.aliyun.com/overview)>实例管理中获取。
     * @example `ccc_xp_pre-cn-****`
     */
    "InstanceId": string;
    /**
     * 会话ID。
     * @example `1001067****`
     */
    "Acid": string;
    /**
     * 呼叫类型。取值：
     * - **DUP_CALL**：双呼。
     * - **IVR_CALL**：IVR外呼。
     * - **SMART_CALL**：智能外呼。
     * @example `DUP_CALL`
     */
    "RecordType": string;
}
