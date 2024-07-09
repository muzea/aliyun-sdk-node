export interface OperationSuspEventsRequest {
    /**
     * 访问源的IP地址。
     * @example `1.2.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 告警事件ID列表。
     * > 您可以调用[DescribeSuspEvents](~~DescribeSuspEvents~~)从返回参数SecurityEventIds处获取告警事件ID。
     * @example `290852`
     */
    "SuspiciousEventIds": string;
    /**
     * 设置要对告警进行的操作。取值：
     * - **deal**：处理告警（隔离）
     * - **ignore**：忽略
     * - **mark\_mis_info**：标记为误报（加白名单）
     * - **rm\_mark\_mis_info**：取消标记为误报（取消加白名单）
     * - **offline_handled**：标记为已处理
     * @example `deal`
     */
    "Operation": string;
    /**
     * 设置对告警事件进行隔离时进行的子操作类型。取值：
     * - **killAndQuaraFileByPidAndMd5andPath**：根据PID结束该进程的运行，并隔离该进程的源文件。
     * - **quaraFileByMd5andPath**：隔离该进程的源文件。
     * - **killAndQuaraFileByMd5andPath**：结束该进程的运行，并隔离该进程的源文件。
     * @example `killAndQuaraFileByPidAndMd5andPath`
     */
    "SubOperation"?: string;
    /**
     * 请求来源标识。
     * 固定取值为**sas**，表示来自云安全中心客户端的请求。
     * @example `sas`
     */
    "From"?: string;
    /**
     * 处理的异常事件的类型。取值：
     * - **alarm**：告警
     * - **不填**：异常
     * @example `alarm`
     */
    "WarnType"?: string;
}
