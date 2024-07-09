export interface CreateEnvironmentResponse {
    /**
     * Id of the request
     * @example `16AF921B-8187-489F-9913-43C808B4****`
     */
    RequestId: string;
    /**
     * 状态码。200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 返回成功增加的环境Id。
     * @example `env-xxxxx`
     */
    Data: string;
    /**
     * 返回结果的提示信息。
     * @example `message`
     */
    Message: string;
}
