export interface StartVirusScanTaskResponse {
    /**
     * 病毒扫描任务的ID。
     * @example `282832`
     */
    ScanTaskId: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `DAE17926-4ABE-4DBD-9600-DDCB9B200F35`
     */
    RequestId: string;
}
