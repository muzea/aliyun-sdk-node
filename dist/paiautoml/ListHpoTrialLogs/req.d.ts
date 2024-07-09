export interface ListHpoTrialLogsRequest {
    /**
     * HPO实验id
     * @example `abcde`
     */
    "ExperimentId"?: string;
    /**
     * trial的id
     * @example `asdf`
     */
    "TrialId"?: string;
    /**
     * Log名称：stderr, stdout, trial.log
     * @example `trial.log`
     */
    "LogName"?: string;
    /**
     * 页码。起始值：1。不填则返回log文件里所有内容。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页包含的日志行数。正整数。不填则返回log文件里所有内容。
     * @example `10`
     */
    "PageSize"?: number;
}
