export interface OperationCancelIgnoreSuspEventRequest {
    /**
     * 告警编号集合。
     */
    "SecurityEventIds": number[];
    /**
     * 备注信息。
     * @example `remark text`
     */
    "Remark"?: string;
}
