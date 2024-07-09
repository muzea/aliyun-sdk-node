export interface CreateLogConfigRequest {
    /**
     * 日志服务中日志项目的名称。
     * @example `rec-lq-sls`
     */
    "SlsProject": string;
    /**
     * slslogstore
     * @example `api-gateway`
     */
    "SlsLogStore": string;
    /**
     * 日志类型
     * @example `PROVIDER`
     */
    "LogType"?: string;
}
