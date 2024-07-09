export interface GetOrderAttachmentFileResponse {
    /**
     * 请求ID。
     * @example `FE8EE2F1-4880-46BC-A704-5CF63EAF9A04`
     */
    RequestId: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用失败时，返回的错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 错误码。取值说明如下：
     * - 请求成功不返回**ErrorCode**字段。
     * - 请求失败返回**ErrorCode**字段。具体信息，请参见返回示例下方的**错误码**。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 附件下载地址。
     * @example `https://dmsxxx`
     */
    FileUrl: string;
}
