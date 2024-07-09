export interface SetJobInstanceSuccessResponse {
    /**
     * 请求唯一ID
     * @example `39090022-1F3B-4797-8518-6B61095F1AF0`
     */
    RequestId: string;
    /**
     * 返回码
     * @example `200`
     */
    Code: number;
    /**
     * API执行是否成功。取值如下：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误信息
     * @example `jobId=xxx is not existed`
     */
    Message: string;
}
