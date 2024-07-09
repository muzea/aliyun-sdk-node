export interface DeleteRepositoryResponse {
    /**
     * 返回值
     * @example `success`
     */
    Code: string;
    /**
     * 是否调用API成功，取值：
     * - `true`：调用API成功
     * - `false`：调用API失败
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 请求ID
     * @example `47DD9D56-09A0-4C52-B520-C3805DBAB96B`
     */
    RequestId: string;
}
