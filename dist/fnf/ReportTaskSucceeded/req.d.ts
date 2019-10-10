interface ReportTaskSucceededRequest {
    "RegionId"?: string;
    /**
    * 汇报任务指定的令牌。
    * @example `emptyString`
    */ "TaskToken": string;
    /**
    * 汇报任务指定的输出信息。
    * @example `{"key":"value"}`
    */ "Output": string;
}
export { ReportTaskSucceededRequest };