export interface AddServiceSourceResponse {
    /**
     * 请求ID。
     * @example `D0DB055C-51F2-5BB2-82A6-CD8A3C6EE6BA`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 返回信息。
     * @example `You are not authorized to perform this operation. Action: mse:AddServiceSource, Resource: acs:mse:cn-hangzhou:1105471854403716:instance/gw-082c943a8c304e48a37a7a29a5ddeda7`
     */
    Message: string;
    /**
     * 返回值。
     * @example `200`
     */
    Code: number;
    /**
     * 请求结果，取值如下：
     * - true：请求成功。
     * - false：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回数据。
     * @example `63`
     */
    Data: number;
}
