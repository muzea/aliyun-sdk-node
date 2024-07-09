export interface EnableServiceForCloudSiemResponse {
    /**
     * 请求返回值。取值：
     * - true：开通成功。
     * - false：开通失败。
     * @example `true`
     */
    Data: boolean;
    /**
     * 请求消息ID。
     * @example `6276D891-*****-55B2-87B9-74D413F7****`
     */
    RequestId: string;
}
