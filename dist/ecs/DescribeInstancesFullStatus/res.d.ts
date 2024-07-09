export interface DescribeInstancesFullStatusResponse {
    /**
     * 每页大小。
     * @example `1`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 总条数。
     * @example `2`
     */
    TotalCount: number;
    InstanceFullStatusSet: {
        /**
         * 实例全状态数组。
         * > 当实例不存在时该数据为空。
         */
        InstanceFullStatusType: {
            /**
             * 实例ID。
             * @example `i-bp67acfmxazb4p****`
             */
            InstanceId: string;
            ScheduledSystemEventSet: {
                /**
                 * 当前状态为Scheduled或Inquiring的系统事件数组。
                 */
                ScheduledSystemEventType: {
                    /**
                     * 事件的发布时间，使用UTC+0时间。
                     * @example `2017-11-30T06:32:31Z`
                     */
                    EventPublishTime: string;
                    /**
                     * 实例事件ID。
                     * @example `e-bp1hygp5b04o56l0****`
                     */
                    EventId: string;
                    /**
                     * 事件的计划执行时间，使用UTC+0时间。
                     * @example `2017-12-07T00:00:00Z`
                     */
                    NotBefore: string;
                    /**
                     * 影响级别。
                     * > 不在白名单的用户，该参数为空。
                     * @example `100`
                     */
                    ImpactLevel: string;
                    /**
                     * 系统事件的计划原因。
                     * > 当阿里云没有判断出异常原因时，该参数为空。
                     * @example `A simulated event.`
                     */
                    Reason: string;
                    /**
                     * 事件状态。
                     */
                    EventCycleStatus: {
                        /**
                         * 事件状态名称。
                         * @example `Scheduled`
                         */
                        Name: string;
                        /**
                         * 事件状态代码。
                         * @example `24`
                         */
                        Code: number;
                    };
                    /**
                     * 事件类型。
                     */
                    EventType: {
                        /**
                         * 事件类型名称。
                         * @example `SystemMaintenance.Reboot`
                         */
                        Name: string;
                        /**
                         * 事件类型代码。
                         * @example `1`
                         */
                        Code: number;
                    };
                    /**
                     * 本地盘实例系统事件拓展属性。
                     * 不同事件类型，返回值有所不同。
                     * 当事件类型不在以下列表中时，该数据为空。
                     * - SystemMaintenance.StopAndRepair
                     * - SystemMaintenance.CleanInactiveDisks
                     * - SecurityPunish.Locked
                     * - SecurityPunish.WebsiteBanned
                     * - SystemUpgrade.Migrate
                     * - SystemMaintenance.RebootAndIsolateErrorDisk
                     * - SystemMaintenance.RebootAndReInitErrorDisk
                     * - SystemMaintenance.ReInitErrorDisk
                     * - SystemMaintenance.IsolateErrorDisk
                     */
                    ExtendedAttribute: {
                        /**
                         * 本地盘设备名。
                         * @example `/dev/vdb`
                         */
                        Device: string;
                        /**
                         * 本地盘磁盘ID。
                         * @example `d-bp67acfmxazb4p****`
                         */
                        DiskId: string;
                        InactiveDisks: {
                            /**
                             * 已释放但需要清理的非活跃云盘或本地盘信息。
                             */
                            InactiveDisk: {
                                /**
                                 * 云盘或本地盘的创建时间。按照[ISO 8601](~~25696~~)标准表示，使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
                                 * @example `2018-07-27T13:53:25Z`
                                 */
                                CreationTime: string;
                                /**
                                 * 云盘或本地盘大小，单位GiB。
                                 * @example `80`
                                 */
                                DeviceSize: string;
                                /**
                                 * 云盘或本地盘种类。可能值：
                                 * - cloud：普通云盘
                                 * - cloud_efficiency：高效云盘
                                 * - cloud_ssd：SSD盘
                                 * - cloud_essd：ESSD云盘
                                 * - local_ssd_pro：I/O密集型本地盘
                                 * - local_hdd_pro：吞吐密集型本地盘
                                 * - ephemeral：（已停售）本地盘
                                 * - ephemeral_ssd：（已停售）本地SSD盘
                                 * @example `cloud_ssd`
                                 */
                                DeviceCategory: string;
                                /**
                                 * 云盘或本地盘类型。可能值：
                                 * - system：系统盘
                                 * - data：数据盘
                                 * @example `system`
                                 */
                                DeviceType: string;
                                /**
                                 * 云盘或本地盘的释放时间。按照[ISO 8601](~~25696~~)标准表示，使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
                                 * @example `2019-07-27T13:53:25Z`
                                 */
                                ReleaseTime: string;
                            }[];
                        };
                    };
                }[];
            };
            /**
             * 实例生命周期状态。
             */
            Status: {
                /**
                 * 实例生命周期状态名称。
                 * @example `Running`
                 */
                Name: string;
                /**
                 * 实例生命周期状态代码。
                 * @example `1`
                 */
                Code: number;
            };
            /**
             * 实例的健康状态。
             */
            HealthStatus: {
                /**
                 * 健康状态名称。
                 * @example `Warning`
                 */
                Name: string;
                /**
                 * 健康状态代码。
                 * @example `64`
                 */
                Code: number;
            };
        }[];
    };
}
