export interface QueryVoiceFileAuditInfoResponse {
    /**
     * 请求状态码。
     * 返回OK代表请求成功。
     * 其他状态码，请参见[错误码列表](~~112502~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 返回结果。
     */
    Data: {
        /**
         * 语音文件Code。
         * @example `8501d2eb-efbb-471f-xxx8-****.wav`
         */
        VoiceCode: string;
        /**
         * 审核状态。取值：
         * - **AUDIT_STATE_INIT**：审批中
         * - **AUDIT_STATE_PASS**：审批通过
         * - **AUDIT_STATE_NOT_PASS**：审批不通过
         * - **AUDIT_STATE_UPLOADING**：审批已通过文件上传中
         * - **AUDIT_STATE_REDOING**：重新处理中
         * - **AUDIT_SATE_CANCEL**：取消审批
         * - **AUDIT_PAUSE**：暂停审批
         * - **AUDIT_ORDER_FINISHED**：工单系统审核完成，等待运营商审核
         * @example `AUDIT_STATE_NOT_PASS`
         */
        AuditState: string;
        /**
         * 审核信息。
         * @example `如电话沟通，该业务暂不支持`
         */
        RejectInfo: string;
    }[];
    /**
     * 请求ID。
     * @example `A90E4451-FED7-49D2-87C8-00700A8C4D0D`
     */
    RequestId: string;
    /**
     * 状态码描述。
     * @example `OK`
     */
    Message: string;
}
