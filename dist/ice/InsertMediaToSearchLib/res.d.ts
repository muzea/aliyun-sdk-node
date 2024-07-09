export interface InsertMediaToSearchLibResponse {
    /**
     * 请求ID。
     * @example `*****ACB-44F2-5F2D-88D7-1283E70*****`
     */
    RequestId: string;
    /**
     * 媒资ID。
     * @example `****20b48fb04483915d4f2cd8ac****`
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
