export interface DescribeInstanceHistoryEventsResponse {
    /**
     * 输入时设置的每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 实例列表页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 实例总个数。
     * @example `2`
     */
    TotalCount: number;
    InstanceSystemEventSet: {
        /**
         * 实例历史系统事件数组。
         */
        InstanceSystemEventType: {
            /**
             * 系统事件ID。
             * @example `e-uf64yvznlao4jl2c****`
             */
            EventId: string;
            /**
             * 系统事件发布时间。按照[ISO 8601](~~25696~~)标准表示，并需要使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
             * @example `2017-11-30T06:32:31Z`
             */
            EventPublishTime: string;
            /**
             * 系统事件结束时间。按照[ISO 8601](~~25696~~)标准表示，并需要使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
             * @example `2017-12-01T06:35:31Z`
             */
            EventFinishTime: string;
            /**
             * 资源类型。可能值：
             * - instance：ECS实例。
             * - ddh：专有宿主机。
             * - managedhost：智能全托管资源池中的物理机。
             * @example `instance`
             */
            ResourceType: string;
            /**
             * 影响级别。
             * @example `100`
             */
            ImpactLevel: string;
            /**
             * 系统事件计划执行时间。按照[ISO 8601](~~25696~~)标准表示，并需要使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
             * @example `2017-12-06T00:00:00Z`
             */
            NotBefore: string;
            /**
             * 实例ID。
             * @example `i-uf678mass4zvr9n1****`
             */
            InstanceId: string;
            /**
             * 系统事件的计划原因。
             * @example `System maintenance is scheduled due to ***.`
             */
            Reason: string;
            /**
             * 系统事件类型。
             */
            EventType: {
                /**
                 * 系统事件类型名称。
                 * @example `InstanceExpiration.Stop`
                 */
                Name: string;
                /**
                 * 系统事件类型代码。
                 * @example `34`
                 */
                Code: number;
            };
            /**
             * 系统事件的生命周期状态。
             */
            EventCycleStatus: {
                /**
                 * 系统事件状态名称。
                 * @example `Executed`
                 */
                Name: string;
                /**
                 * 系统事件状态代码。
                 * @example `0`
                 */
                Code: number;
            };
            /**
             * 事件扩展属性。
             */
            ExtendedAttribute: {
                /**
                 * 本地盘设备名。
                 * @example `/dev/vda`
                 */
                Device: string;
                /**
                 * 本地盘ID。
                 * @example `d-diskid1`
                 */
                DiskId: string;
                InactiveDisks: {
                    /**
                     * 已释放但需要清理的非活跃云盘或本地盘信息。
                     */
                    InactiveDisk: {
                        /**
                         * 云盘或本地盘创建时间。按照[ISO 8601](~~25696~~)标准表示，并需要使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
                         * @example `2018-11-30T06:32:31Z`
                         */
                        CreationTime: string;
                        /**
                         * 云盘或本地盘大小，单位GiB。
                         * @example `80`
                         */
                        DeviceSize: string;
                        /**
                         * 云盘或本地盘种类。可能值：
                         * - cloud：普通云盘。
                         * - cloud_efficiency：高效云盘。
                         * - cloud_ssd：SSD盘。
                         * - cloud_essd：ESSD云盘。
                         * - local_ssd_pro：I/O密集型本地盘。
                         * - local_hdd_pro：吞吐密集型本地盘。
                         * - ephemeral：（已停售）本地盘。
                         * - ephemeral_ssd：（已停售）本地SSD盘。
                         * @example `cloud_efficiency`
                         */
                        DeviceCategory: string;
                        /**
                         * 云盘或本地盘类型。可能值：
                         * - system：系统盘。
                         * - data：数据盘。
                         * @example `data`
                         */
                        DeviceType: string;
                        /**
                         * 云盘或本地盘释放时间。按照[ISO 8601](~~25696~~)标准表示，并需要使用UTC +0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
                         * @example `2019-11-30T06:32:31Z`
                         */
                        ReleaseTime: string;
                    }[];
                };
                /**
                 * 宿主机类型。可能值：
                 * - ddh：专有宿主机。
                 * - managedhost：智能全托管资源池中的物理机。
                 * @example `ddh`
                 */
                HostType: string;
                /**
                 * 宿主机ID。
                 * @example `dh-bp1ewce1gk3iwv2****`
                 */
                HostId: string;
                MigrationOptions: {
                    /**
                     * 实例迁移选项。当前仅支持MigrationOptions（使用迁移计划迁移）。
                     */
                    MigrationOption: string[];
                };
                /**
                 * 受损云盘在线维修策略。可能值：IsolateOnly，表示仅支持隔离坏盘，不支持维修坏盘。
                 * @example `IsolateOnly`
                 */
                OnlineRepairPolicy: string;
                /**
                 * 云盒机柜号。
                 * @example `A01`
                 */
                Rack: string;
                /**
                 * 处罚类型。
                 * @example `ecs_message_alert`
                 */
                PunishType: string;
                /**
                 * 安全违规域名。
                 * @example `1228.test.com`
                 */
                PunishDomain: string;
                /**
                 * 安全违规链接。
                 * @example `http://1228.test.com/1`
                 */
                PunishUrl: string;
                /**
                 * 安全违规code。
                 * @example `PR111`
                 */
                Code: string;
                /**
                 * 事件是否可以处理。
                 * @example `true`
                 */
                CanAccept: string;
                /**
                 * 事件响应结果。可能值：
                 * - true：事件响应成功。
                 * - false：事件响应失败。
                 * @example `true`
                 */
                ResponseResult: string;
            };
        }[];
    };
}
