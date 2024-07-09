export interface DescribeDisksFullStatusResponse {
    /**
     * 每页大小。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 列表页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 全状态总数。
     * @example `2`
     */
    TotalCount: number;
    DiskFullStatusSet: {
        /**
         * 块存储全状态数组。
         */
        DiskFullStatusType: {
            /**
             * 块存储ID。
             * @example `d-bp67acfmxazb4p****`
             */
            DiskId: string;
            /**
             * 实例ID。
             * @example `i-bp67acfmxazb4p****`
             */
            InstanceId: string;
            /**
             * 块存储挂载于实例上的设备名，例如/dev/xvdb。
             * 该参数仅在`Status`参数值为`In_use`时有值，其他状态时为空。
             * > 该参数即将停止使用，为提高代码兼容性，建议您尽量不要使用该参数。
             * @example `null`
             */
            Device: string;
            DiskEventSet: {
                /**
                 * 块存储事件数组。
                 */
                DiskEventType: {
                    /**
                     * 块存储事件ID。
                     * @example `e-bp67acfmxazb4p****`
                     */
                    EventId: string;
                    /**
                     * 事件结束时间。
                     * @example `2018-05-06T02:48:52Z`
                     */
                    EventEndTime: string;
                    /**
                     * 事件发生时间。
                     * @example `2018-05-08T02:43:10Z`
                     */
                    EventTime: string;
                    /**
                     * 影响级别。
                     * @example `100`
                     */
                    ImpactLevel: string;
                    /**
                     * 事件类型。
                     */
                    EventType: {
                        /**
                         * 事件类型名称。可能值：
                         * - Degraded：块存储性能降级。
                         * - SeverelyDegraded：块存储性能严重降级。
                         * - Stalled：块存储性能受到严重影响。
                         * - ErrorDetected：本地盘出现损坏。
                         * @example `Stalled`
                         */
                        Name: string;
                        /**
                         * 事件类型代码。
                         * @example `7`
                         */
                        Code: number;
                    };
                }[];
            };
            /**
             * 块存储生命周期状态。
             */
            Status: {
                /**
                 * 块存储生命周期状态名称。
                 * @example `Available`
                 */
                Name: string;
                /**
                 * 块存储生命周期状态代码。
                 * @example `129`
                 */
                Code: number;
            };
            /**
             * 块存储健康状态。
             */
            HealthStatus: {
                /**
                 * 块存储健康状态名称。
                 * @example `Impaired`
                 */
                Name: string;
                /**
                 * 块存储健康状态代码。
                 * @example `128`
                 */
                Code: number;
            };
        }[];
    };
}
