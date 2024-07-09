export interface DeleteEnvironmentResponse {
    /**
     * Id of the request
     * @example `34ED024E-9E31-434A-9E4E-D9D15C3****`
     */
    RequestId: string;
    /**
     * 状态码。说明 200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 操作结果描述。
     * @example `success`
     */
    Data: string;
    /**
     * 返回结果的提示信息。
     * @example `message`
     */
    Message: string;
}
