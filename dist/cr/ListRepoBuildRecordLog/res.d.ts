export interface ListRepoBuildRecordLogResponse {
    /**
     * 请求ID
     * @example `4CE1F661-75DD-4EBD-A4AD-057B26834ABB`
     */
    RequestId: string;
    /**
     * 返回值
     * @example `success`
     */
    Code: string;
    /**
     * 页号
     * @example `1`
     */
    PageNo: number;
    /**
     * 是否成功
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 一页中日志显示条数
     * @example `100`
     */
    PageSize: number;
    /**
     * 总数量
     * @example `1000`
     */
    TotalCount: string;
    /**
     * 构建日志内容
     */
    BuildRecordLogs: {
        /**
         * 日志所在行号
         * @example `2`
         */
        LineNumber: number;
        /**
         * 日志内容
         * @example `fetch stage begin`
         */
        Message: string;
        /**
         * 日志所在阶段
         * @example `GIT_CLONE`
         */
        BuildStage: string;
    }[];
}
