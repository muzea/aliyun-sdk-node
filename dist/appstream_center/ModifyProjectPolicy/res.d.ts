export interface ModifyProjectPolicyResponse {
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * 返回none。
     * @example `None`
     */
    Data: string;
    /**
     * 接口请求返回的状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 出错时的错误消息。
     * @example `There is a missing parameter.`
     */
    Message: string;
    /**
     * 请求成功与否，成功返回为true，失败为false
     * @example `true`
     */
    Success: string;
}
