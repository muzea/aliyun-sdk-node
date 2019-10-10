interface ReportTaskFailedRequest {
    "RegionId"?: string;
    /**
    * 汇报任务指定的令牌。
    * @example `emptyString`
    */ "TaskToken": string;
    /**
    * 失败错误代码。
    * @example `nill`
    */ "Error": string;
    /**
    * 失败错误原因。
    * @example `emptyString`
    */ "Cause"?: string;
}
export { ReportTaskFailedRequest };