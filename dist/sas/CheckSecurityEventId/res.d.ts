export interface CheckSecurityEventIdResponse {
    /**
     * 告警事件ID是否属于指定服务器。取值：
     * - **true**：属于
     * - **false**：不属于
     * @example `true`
     */
    Data: boolean;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `1383B0DB-D5D6-4B0C-9E6B-75939C8E67FE`
     */
    RequestId: string;
}
