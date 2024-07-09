export interface CreatePictureSearchJobResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~145071~~)。
     * @example `200`
     */
    Code: string;
    /**
     * 以图搜图任务ID。
     * @example `71632df011294a85910c566e7181****`
     */
    Data: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `The request has failed due to a temporary failure of the server.`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `FAEBE068-07DE-4B88-AC2A-51FC2B556211`
     */
    RequestId: string;
    /**
     * 是否调用成功：
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
}
