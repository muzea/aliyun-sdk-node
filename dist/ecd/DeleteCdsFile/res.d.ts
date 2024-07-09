export interface DeleteCdsFileResponse {
    /**
     * 请求ID。
     * @example `5CC5E450-FC43-4F5B-B540-9964BD31****`
     */
    RequestId: string;
    /**
     * 执行结果。返回`success`表示成功，否则将返回错误信息。
     * @example `success`
     */
    Code: string;
    /**
     * 操作是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 数据是否成功返回。
     * @example `true`
     */
    Data: string;
    /**
     * 错误信息。当Code为`success`时，不返回该参数。
     * @example `success`
     */
    Message: string;
}
