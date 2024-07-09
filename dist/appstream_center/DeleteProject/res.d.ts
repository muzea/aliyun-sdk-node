export interface DeleteProjectResponse {
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * 返回None。
     * @example `None`
     */
    Data: boolean;
    /**
     * 状态码：
     * - `200`：成功。
     * - `400`：出错。
     * @example `200`
     */
    Code: string;
    /**
     * 接口请求返回的信息。
     * @example `The parameter PoolId is invalid.`
     */
    Message: string;
    /**
     * 请求成功与否，成功返回为true，失败为false
     * @example `true`
     */
    Success: string;
}
