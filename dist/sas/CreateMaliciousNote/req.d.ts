export interface CreateMaliciousNoteRequest {
    /**
     * 要添加的备注信息。
     * @example `Ignore`
     */
    "Note": string;
    /**
     * 要添加备注的告警事件的ID。
     * >调用[ListAgentlessMaliciousFiles](~~ListAgentlessMaliciousFiles~~)接口，通过 NoteId 字段可以获取该参数。
     * @example `80****`
     */
    "EventId": number;
}
