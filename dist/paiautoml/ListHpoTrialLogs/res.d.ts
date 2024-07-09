export interface ListHpoTrialLogsResponse {
    /**
     * POP的请求id
     * @example `3F190916-B3E5-5D1E-AD0C-35C0DF105F51`
     */
    RequestId: string;
    /**
     * 状态码
     * @example `SUCCESS`
     */
    Code: string;
    /**
     * 响应错误信息。只在响应出错时被设置。
     * @example `Missing 'user_id' in request.`
     */
    Message: string;
    /**
     * 额外的错误信息。只在响应出错时被设置。
     * @example `{}`
     */
    Detail: any;
    /**
     * log文件的总行数
     * @example `123`
     */
    TotalCount: number;
    /**
     * 日志行内容
     */
    Logs: string[];
}
