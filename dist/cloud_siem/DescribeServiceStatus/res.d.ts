export interface DescribeServiceStatusResponse {
    /**
     * 请求返回值。
     * - true：已经开通权限。
     * - false：未开通权限。
     * @example `true`
     */
    Data: boolean;
    /**
     * 请求消息ID。
     * @example `6276D891-*****-55B2-87B9-74D413F7****`
     */
    RequestId: string;
}
