export interface CreateLocalFileUploadJobResponse {
    /**
     * 接口返回码：
     * - **200**：表示成功。
     * - 其它：表示错误码。错误码详情，请参见[错误码](~~145071~~)。
     * @example `200`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `InvalidParameter`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `06DC77A0-4622-42DB-9EE0-25FIOHS82JK1`
     */
    RequestId: string;
    /**
     * 是否调用成功：
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 查询结果。
     */
    Data: {
        /**
         * 本地录像上传任务ID。
         * >请您妥善保存**JobId**。录像上传任务完成后，需使用**JobId**查询本地录像上传任务结果：[QueryLocalFileUploadJob](~~363004~~)。您也可以根据需要， 使用**JobId**停止本地录像上传任务：[DeleteLocalFileUploadJob](~~363003~~)。
         * @example `1ec1a2****d0435fbc0****34f6f139d`
         */
        JobId: string;
    };
}
