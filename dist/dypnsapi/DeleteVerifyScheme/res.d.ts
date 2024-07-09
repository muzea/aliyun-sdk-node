export interface DeleteVerifySchemeResponse {
    /**
     * 状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[服务端API返回码](~~85198~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码的描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `E3754956-D0B1-5947-962A-AE767D354F01`
     */
    RequestId: string;
    /**
     * 返回结果。取值：
     * - **true**：删除成功
     * - **false**：删除失败
     * @example `true`
     */
    Result: boolean;
}
