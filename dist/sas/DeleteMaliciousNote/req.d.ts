export interface DeleteMaliciousNoteRequest {
    /**
     * 备注记录 ID。
     * >调用[ListAgentlessMaliciousFiles](~~ListAgentlessMaliciousFiles~~)接口，通过 NoteId 字段可以获取该参数。
     * @example `1`
     */
    "NoteId"?: number;
}
