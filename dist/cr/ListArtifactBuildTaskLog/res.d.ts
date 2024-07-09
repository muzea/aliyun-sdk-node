export interface ListArtifactBuildTaskLogResponse {
    /**
     * 返回码
     * @example `success`
     */
    Code: string;
    /**
     * 是否调用API成功，取值：
     * - `true`：调用API成功
     * - `false`：调用API失败
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 请求ID
     * @example `C4C7DD0C-C9D6-437A-A7EE-121EFD70D002`
     */
    RequestId: string;
    /**
     * 日志总条目
     * @example `200`
     */
    TotalCount: number;
    /**
     * 制品构建单行日志
     */
    BuildTaskLogs: {
        /**
         * 日志信息
         * @example `Start Build`
         */
        Message: string;
        /**
         * 日志行号
         * @example `1`
         */
        LineNumber: number;
    }[];
}
