export interface CreateSuspEventNoteRequest {
    /**
     * 要添加备注的告警事件的ID。调用[DescribeSuspEvents](~~251497~~)获取告警事件的ID。
     * @example `668931`
     */
    "EventId": number;
    /**
     * 要添加的备注信息。
     * @example `Ignore`
     */
    "Note": string;
}
