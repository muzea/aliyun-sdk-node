export interface DeleteMediaFromSearchLibResponse {
    /**
     * 请求ID。
     * @example `******11-DB8D-4A9A-875B-275798******`
     */
    RequestId: string;
    /**
     * 媒资ID。
     * @example `******b48fb04483915d4f2cd8******`
     */
    MediaId: string;
    /**
     * 是否调用成功。取值：
     * - true： 成功
     * - false：失败
     * @example `true`
     */
    Success: string;
    /**
     * 返回码。
     * @example `200`
     */
    Code: string;
}
