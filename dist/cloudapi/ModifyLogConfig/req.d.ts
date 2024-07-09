export interface ModifyLogConfigRequest {
    /**
     * sls的项目名称
     * @example `ford-api-gateway-log`
     */
    "SlsProject": string;
    /**
     * 日志服务日志存储名。
     * @example `logs-gateway`
     */
    "SlsLogStore": string;
    /**
     * 日志类型，可选值：
     * - **log**：日志
     * - **survey**：质检日志
     * @example `PROVIDER`
     */
    "LogType"?: string;
}
