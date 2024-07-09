export interface DownloadDataTrackResultResponse {
    /**
     * 请求ID。
     * @example `B43AD641-49C2-5299-9E06-1B37EC1B****`
     */
    RequestId: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 下载Key，用于后续下载追踪日志解析结果。
     * @example `e23dd7ec-a19f-4a69-8eb3-8ffd26e6****`
     */
    DownloadKeyId: string;
}
