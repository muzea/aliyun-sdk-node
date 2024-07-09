export interface ListHpoExperimentLogsResponse {
    /**
     * POP的请求id
     * @example `071A904D-5A49-597F-9F69-81C7701D04AC`
     */
    RequestId: string;
    /**
     * 返回状态码
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
     * @example `467`
     */
    TotalCount: number;
    /**
     * 日志行内容
     */
    Logs: string[];
}
