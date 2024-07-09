export interface DescribeSecurityEventOperationStatusRequest {
    /**
     * 访问源的IP地址。
     * @example `192.168.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 处理安全告警事件的任务的ID。
     * > TaskId、SecurityEventIds这两个参数二选一，必选要设置一个接口才能调用成功。
     * @example `12121`
     */
    "TaskId": number;
    /**
     * 安全告警事件的ID列表。
     * > TaskId、SecurityEventIds.N这两个参数二选一，必选要设置一个接口才能调用成功。
     * @example `["909361"]`
     */
    "SecurityEventIds": string[];
}
