export interface ExportWarningResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `A7FC828B-C242-1005-9736-C7CC5DC09FF0`
     */
    RequestId: string;
    /**
     * 导出的基线检查结果文件的名称。
     * @example `health_check_export_20220407`
     */
    FileName: string;
    /**
     * 导出基线检查结果列表的任务ID。
     * > 您可以使用该参数调用[DescribeHcExportInfo](~~DescribeHcExportInfo~~)查询导出进度。
     * @example `439316`
     */
    Id: number;
}
