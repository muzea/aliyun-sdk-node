export interface UpdateClusterSpecResponse {
    /**
     * 请求ID。
     * @example `5B170A0D-2C5D-4CF8-B808-03966B86****`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 响应码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 保留字段。
     * @example `null`
     */
    Data: string;
    /**
     * 错误码。取值说明如下：
     * - 请求成功：不返回**ErrorCode**字段。
     * - 请求失败：返回**ErrorCode**字段。具体信息，请参见本文的**错误码**目录。
     * @example `mse-100-000`
     */
    ErrorCode: string;
}
