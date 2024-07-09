export interface GetInstanceResponse {
    /**
     * 请求ID。
     * @example `1C5B1511-8A5B-59C3-90AF-513F9210E882`
     */
    RequestId: string;
    /**
     * 状态。
     * ● Initializing-初始化中。
     * ● Running-运行中。
     * ● Failure-创建失败。
     * ● Stopped-停止服务。
     * @example `Running`
     */
    Status: string;
    /**
     * 所属区域。
     * @example `cn-hangzhou`
     */
    RegionId: string;
    /**
     * 创建时间。
     * @example `2023-07-04T11:26:09.036+08:00`
     */
    GmtCreateTime: string;
    /**
     * 更新时间。
     * @example `2023-07-04T11:26:09.036+08:00`
     */
    GmtModifiedTime: string;
    /**
     * 实例生产进度。
     * @example `0.8`
     */
    Progress: number;
    /**
     * 实例生产日志信息。
     * @example `Success`
     */
    Message: string;
    /**
     * 实例类型。
     * @example `Basic`
     */
    Type: string;
}
