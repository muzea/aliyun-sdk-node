export interface DescribeAuthResponse {
    /**
     * 请求返回值。
     * - true 已经开通权限。
     * - false 未开通权限。
     * @example `true`
     */
    Data: boolean;
    /**
     * 本次请求的id。
     * @example `4F539347-7D9A-51EA-8ABF-5D5507045C5C`
     */
    RequestId: string;
}
