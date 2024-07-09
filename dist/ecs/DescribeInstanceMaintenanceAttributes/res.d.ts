export interface DescribeInstanceMaintenanceAttributesResponse {
    /**
     * 单页返回的条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 维护属性列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 查询到的维护属性总数。
     * @example `100`
     */
    TotalCount: number;
    MaintenanceAttributes: {
        /**
         * 运维属性的集合。
         */
        MaintenanceAttribute: {
            /**
             * 实例宕机运维前是否发送事件通知。
             * @example `false`
             */
            NotifyOnMaintenance: boolean;
            /**
             * 实例ID。
             * @example `i-bp67acfmxazb4p****`
             */
            InstanceId: string;
            MaintenanceWindows: {
                /**
                 * 运维窗口实例的列表。
                 */
                MaintenanceWindow: {
                    /**
                     * 维护时间窗口结束时间。
                     * @example `18:00:00`
                     */
                    EndTime: string;
                    /**
                     * 维护时间窗口开始时间。
                     * @example `02:00:00`
                     */
                    StartTime: string;
                }[];
            };
            /**
             * 实例的运维动作属性。
             */
            ActionOnMaintenance: {
                /**
                 * 维护动作，默认的值。
                 * @example `AutoRecover`
                 */
                DefaultValue: string;
                /**
                 * 维护动作，当前生效的值。可能值：
                 * - Stop: 停止状态（即宕机）。
                 * - AutoRecover：自动恢复。
                 * - AutoRedeploy：宕机迁移，数据盘有损。
                 * @example `Stop`
                 */
                Value: string;
                SupportedValues: {
                    /**
                     * 由维护动作组成的数组格式，返回支持的运维动作值列表。
                     */
                    SupportedValue: string[];
                };
            };
        }[];
    };
}
