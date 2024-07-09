export interface UpdateRecordRemarkRequest {
    /**
     * 语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 解析记录ID。
     * @example `2029911639`
     */
    "RecordId": number;
    /**
     * 备注。
     * @example `test record`
     */
    "Remark"?: string;
    /**
     * 客户端Token，用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大不超过64个ASCII字符。
     * @example `6447728c8578e66aacf062d2df4446dc`
     */
    "ClientToken"?: string;
}
