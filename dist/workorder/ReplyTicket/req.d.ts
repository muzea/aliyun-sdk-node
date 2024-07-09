export interface ReplyTicketRequest {
    /**
     * 工单号
     * @example `0005PYGCW`
     */
    "TicketId": string;
    /**
     * 工单回复的内容
     * @example `好的, 我这边已经续费成功`
     */
    "Content": string;
    /**
     * 附件名称列表，GetAttachmentUploadUrl接口返回的ObjectKey字段
     */
    "FileNameList"?: string[];
    /**
     * 是否加密
     * @example `false`
     */
    "Encrypt": boolean;
    /**
     * 阿里云UID
     * @example `1289427240739141`
     */
    "Uid"?: string;
}
