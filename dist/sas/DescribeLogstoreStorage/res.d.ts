export interface DescribeLogstoreStorageResponse {
    /**
     * 已使用的日志分析存储容量，单位为GB。
     * @example `335`
     */
    Used: number;
    /**
     * 日志保存天数。取值固定为**180**，表示日志可保存180天。
     * > 云安全中心暂不支持调整日志保存天数。
     * @example `180`
     */
    Ttl: number;
    /**
     * 云安全中心全量日志存放的专属Logstore名称。取值固定为**sas-log**。
     * @example `sas-log`
     */
    Logstore: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `25EC270F-5783-4416-AD7C-1EDF063A039C`
     */
    RequestId: string;
    /**
     * 已开通的日志分析存储容量，单位为GB。
     * @example `12240`
     */
    Preserve: number;
    /**
     * 云安全中心全量日志存放的专属Project名称。
     * @example `sas-log-XXXX-cn-hangzhou`
     */
    UserProject: string;
}
