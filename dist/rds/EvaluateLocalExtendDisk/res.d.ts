export interface EvaluateLocalExtendDiskResponse {
    /**
     * 请求ID。
     * @example `A4C4D26F-E5CE-5A28-8C54-46A6FB318223`
     */
    RequestId: string;
    /**
     * 实例ID。
     * @example `rm-wz9s06u4drm******
    `
     */
    DBInstanceId: string;
    /**
     * 是否可用。取值：
     * - **true**：可用。
     * - **false**：不可用。
     * @example `true`
     */
    Available: string;
    /**
     * 本地盘最大值，单位：GB。
     * @example `100`
     */
    LocalUpgradeDiskLimit: number;
    /**
     * 数据库实例传输类型
     * @example `0`
     */
    DBInstanceTransType: string;
}
