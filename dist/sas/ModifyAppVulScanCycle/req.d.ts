export interface ModifyAppVulScanCycleRequest {
    /**
     * 应用漏洞扫描周期。
     * - 1week
     * - 2weeks
     * - 3days
     * @example `1week`
     */
    "Cycle"?: string;
}
