export interface UpdateConfigResponse {
    /**
     * 信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `8BD1E58D-0755-42AC-A599-E6B55112****`
     */
    RequestId: string;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回码。
     * @example `200`
     */
    Code: number;
    /**
     * HTTP返回码。
     * @example `200`
     */
    HttpStatusCode: number;
}
