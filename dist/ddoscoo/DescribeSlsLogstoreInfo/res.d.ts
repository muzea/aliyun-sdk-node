export interface DescribeSlsLogstoreInfoResponse {
    /**
     * 日志存储时长。单位：天。
     * @example `180`
     */
    Ttl: number;
    /**
     * 本次请求的ID。
     * @example `CF33B4C3-196E-4015-AADD-5CAD00057B80`
     */
    RequestId: string;
    /**
     * 可用的日志存储容量。单位：Byte。
     * @example `3298534883328`
     */
    Quota: number;
    /**
     * DDoS高防服务对接的日志库。
     * @example `ddoscoo-logstore`
     */
    LogStore: string;
    /**
     * 已经使用的存储容量。单位：Byte。
     * > 日志服务的统计结果约有两个小时的延迟。
     * @example `0`
     */
    Used: number;
    /**
     * DDoS高防服务对接的日志项目。
     * @example `ddoscoo-project-181071506993****-cn-hangzhou`
     */
    Project: string;
}
