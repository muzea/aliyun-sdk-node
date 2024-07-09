export interface GetTableProfileResponse {
    /**
     * 错误码
     * @example `-`
     */
    Code: string;
    /**
     * 错误信息
     * @example `-`
     */
    Message: string;
    /**
     * 请求ID
     * @example `97434FA4-A6B2-1AE4-A174-76964F29C759`
     */
    RequestId: string;
    /**
     * 请求是否成功。取值如下：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 表数据概况
     */
    TableProfile: any;
}
