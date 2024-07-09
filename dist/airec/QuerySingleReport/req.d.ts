export interface QuerySingleReportRequest {
    /**
     * 实例ID
     * @example `airec-cn-o400whm78004`
     */
    "instanceId": string;
    /**
     * 必填，单表报告类型：
     * - typeItemValidScene
     * - typeItemTag
     * - typeItemTagScene
     * - typeItemWeightScene
     * - typeItemRawScene
     * - typeItemExpireScene
     * @example `typeItemTagScene`
     */
    "reportType": string;
}
