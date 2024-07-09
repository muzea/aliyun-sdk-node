export interface ListHpoExperimentLogsRequest {
    /**
     * HPO实验id
     * @example `abcde`
     */
    "ExperimentId"?: string;
    /**
     * log名称。目前支持‘nnimanager.log'和'dispatcher.log'
     * @example `nnimanager.log`
     */
    "LogName"?: string;
    /**
     * 页码。起始值：1。不填则返回log文件里所有内容。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页包含的日志行数。不填则返回log文件里所有内容。
     * @example `40`
     */
    "PageSize"?: number;
}
