export interface ModifyGlobalQuestionResponse {
    /**
     * 对话流程id
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求id
     * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 接口状态码
     * @example `OK`
     */
    Code: string;
    /**
     * 接口提示消息
     * @example `Success`
     */
    Message: string;
    /**
     * 全局问题id
     * @example `ad80de88-1661-445a-92ec-bf88dc45d581`
     */
    DialogueQuestionId: string;
}
