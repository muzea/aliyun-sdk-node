export interface ModifyInstanceMaintenanceAttributesRequest {
    /**
     * 实例所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 维护动作。取值范围：
     * - Stop：停止状态（即宕机）。
     * - AutoRecover：自动恢复。
     * - AutoRedeploy：宕机迁移，数据盘有损。
     * @example `AutoRecover`
     */
    "ActionOnMaintenance"?: string;
    /**
     * 实例宕机运维前是否发送事件通知。取值范围：
     * - true：发送事件通知。
     * - false：不发送事件通知。
     * 默认值：false
     * @example `false`
     */
    "NotifyOnMaintenance"?: boolean;
    /**
     * 实例ID。N的取值范围为：1~100。
     * @example `i-bp67acfmxazb4ph****`
     */
    "InstanceId"?: string[];
    /**
     * 维护时间窗口列表。
     */
    "MaintenanceWindow"?: {
        /**
         * 维护时间窗口结束时间。必须为整小时，不允许设置分、秒。开始时间和结束时间必须同时设置，并且结束时间与开始时间需要间隔1~23个整小时。采用UTC +8时区，格式为`HH:mm:ss`。N的取值为1，只支持设置1个时间窗口。
         * @example `18:00:00`
         */
        EndTime: string;
        /**
         * 维护时间窗口开始时间。必须为整小时，不允许设置分、秒。开始时间和结束时间必须同时设置，并且结束时间与开始时间需要间隔1~23个整小时。采用UTC +8时区，格式为`HH:mm:ss`。N的取值为1，只支持设置1个时间窗口。
         * @example `02:00:00`
         */
        StartTime: string;
    }[];
}
