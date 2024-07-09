export interface ModifyAssetImportantResponse {
    /**
     * 请求状态码，返回200代表请求成功。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `23C85959-1540-514B-93CF-2992C53A1B4F`
     */
    RequestId: string;
    /**
     * 调用出错时返回的错误码。
     * @example `ServerError`
     */
    ErrCode: string;
    /**
     * 接口调用是否成功。取值：
     * - **true**：成功
     * - **false**：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用错误时返回对应的错误信息。
     * @example `ServerError`
     */
    ErrMessage: string;
}
