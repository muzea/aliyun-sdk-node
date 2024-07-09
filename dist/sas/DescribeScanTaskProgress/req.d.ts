export interface DescribeScanTaskProgressRequest {
    /**
     * 指定要查询的病毒扫描任务ID。
     * > 您可以调用[StartVirusScanTask](~~StartVirusScanTask~~)接口获取该参数。
     * @example `282832`
     */
    "TaskId": number;
}
