export interface DeleteSuspEventNodeRequest {
    /**
     * 备注记录 Id。
     * >调用[DescribeSuspEvents](~~DescribeSuspEvents~~)接口，通过 EventNotes 字段可以获取该参数。
     * @example `123`
     */
    "NoteId": number;
}
