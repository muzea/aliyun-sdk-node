export interface DeleteMigrationTaskResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpCode: string;
    /**
     * 删除结果。
     * @example `true`
     */
    Data: boolean;
    /**
     * 请求ID。
     * @example `8BD1E58D-0755-42AC-A599-E6B55112****`
     */
    RequestId: string;
    /**
     * 信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 错误码。
     * @example `mse-100-000`
     */
    ErrorCode: string;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
}
