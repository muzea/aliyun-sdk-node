export interface DeleteNacosInstanceResponse {
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
     * Code仅仅用来和Success同步。
     * @example `200`
     */
    Code: number;
    /**
     * 错误码。
     * @example `mse-100-000`
     */
    ErrorCode: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 返回信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 动态错误信息中的占位符。
     * @example `The specified parameter is invalid.`
     */
    DynamicMessage: string;
    /**
     * 节点数据。
     * @example `OK`
     */
    Data: string;
}
