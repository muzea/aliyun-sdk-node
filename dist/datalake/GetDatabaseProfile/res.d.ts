export interface GetDatabaseProfileResponse {
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
     * @example `AEA7DCC8-DBF5-561B-A7FD-0747D7D51FEB`
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
     * 库数据概况
     * @example `{
        "FileCnt": 213,
        "FileSize": 34324
    }`
     */
    DatabaseProfile: any;
}
