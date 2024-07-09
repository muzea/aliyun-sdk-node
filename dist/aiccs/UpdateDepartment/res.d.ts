export interface UpdateDepartmentResponse {
    /**
     * 请求ID。
     * @example `98B032F5-6473-4EAC-8BA8-C28993513A1`
     */
    RequestId: string;
    /**
     * 调用接口是否成功。取值：
     * - **true**：成功。
     * - **false**：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码。返回200表示请求成功。
     * @example `200`
     */
    Code: string;
    /**
     * 状态码描述。
     * @example `successful`
     */
    Message: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 是否成功。取值：
     * - **true**：成功
     * - **false**：失败。
     * @example `true`
     */
    Data: boolean;
}
