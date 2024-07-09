export interface DebugPlaybookResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `75E56B2C-C8FA-5A2F-AA08-8745E2AC33EF`
     */
    RequestId: string;
    /**
     * 调试任务的运行UUID，可用于查询任务的运行结果等信息。
     * @example `6d412cfa-0905-4567-8a83-xxxxxx`
     */
    RequestUuid: string;
}
