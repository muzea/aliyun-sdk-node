export interface DescribeContainerGroupMetricResponse {
    /**
     * 请求ID，唯一标识。
     * @example `D81A4A13-6DCC-4579-AC62-90A6C3EC7BBC`
     */
    RequestId: string;
    /**
     * ECI实例ID，即容器组ID。
     * @example `eci-bp1dqpye03ke5s6p****`
     */
    ContainerGroupId: string;
    /**
     * ECI实例的监控数据详情。
     */
    Records: {
        /**
         * 网络数据。
         */
        Network: {
            /**
             * 网卡数据。
             */
            Interfaces: {
                /**
                 * 累计接收错误数。
                 * @example `0`
                 */
                RxErrors: number;
                /**
                 * 累计发送丢包数。
                 * @example `0`
                 */
                TxDrops: number;
                /**
                 * 累计发送字节数。
                 * @example `1381805699`
                 */
                TxBytes: number;
                /**
                 * 累计接收包数量。
                 * @example `4800583`
                 */
                RxPackets: number;
                /**
                 * 累计发送包数量。
                 * @example `5158427`
                 */
                TxPackets: number;
                /**
                 * 网卡名称。
                 * @example `eth0`
                 */
                Name: string;
                /**
                 * 累计发送错误数。
                 * @example `0`
                 */
                TxErrors: number;
                /**
                 * 累计接收字节数。
                 * @example `505001954`
                 */
                RxBytes: number;
                /**
                 * 累计接收丢包数。
                 * @example `0`
                 */
                RxDrops: number;
            }[];
        };
        /**
         * CPU数据。
         */
        CPU: {
            /**
             * CPU在采样窗口内的使用量（纳秒）。
             * @example `0`
             */
            UsageNanoCores: number;
            /**
             * CPU使用上限（CPU核数*1000）。
             * @example `2000`
             */
            Limit: number;
            /**
             * CPU历史使用总量。
             * @example `70769883`
             */
            UsageCoreNanoSeconds: number;
            /**
             * 最近10秒的平均负载情况。
             * @example `0`
             */
            Load: number;
        };
        /**
         * 磁盘数据。
         */
        Disk: {
            /**
             * 磁盘写入的数据量，单位为Byte。
             * @example `1375109120`
             */
            WriteBytes: number;
            /**
             * 该参数暂未开放使用。
             * @example `123`
             */
            WriteIO: number;
            /**
             * 磁盘名称。
             * @example `/dev/vda`
             */
            Device: string;
            /**
             * 该参数暂未开放使用。
             * @example `123`
             */
            ReadIO: number;
            /**
             * 磁盘读取的数据量，单位为Byte。
             * @example `210714112`
             */
            ReadBytes: number;
        }[];
        /**
         * 每条监控数据对应的统计时间。格式为RFC3339时间格式。
         * @example `2021-08-25T16:22:00.000+08:00`
         */
        Timestamp: string;
        /**
         * 内存数据。
         */
        Memory: {
            /**
             * 常驻内存集，即实际使用的物理内存。
             * @example `9289728`
             */
            Rss: number;
            /**
             * 已使用内存。
             * @example `9289728`
             */
            UsageBytes: number;
            /**
             * 当前内存工作集使用量。
             * @example `9289728`
             */
            WorkingSet: number;
            /**
             * 可用内存。
             * @example `4285091840`
             */
            AvailableBytes: number;
            /**
             * 缓存。
             * @example `9289728`
             */
            Cache: number;
        };
        /**
         * 文件系统分区数据。
         */
        Filesystem: {
            /**
             * 空间总量。
             * @example `41610981376`
             */
            Capacity: number;
            /**
             * 可用空间。
             * @example `35319836672`
             */
            Available: number;
            /**
             * 分区名称。
             * @example `/dev/root`
             */
            FsName: string;
            /**
             * 已使用空间。
             * @example `4368744448`
             */
            Usage: number;
            /**
             * 分区类型。可能值：
             * - System
             * - Volume
             * - Other
             * @example `System`
             */
            Category: string;
        }[];
        /**
         * 容器的监控数据详情。
         */
        Containers: {
            /**
             * 容器的CPU数据。
             */
            CPU: {
                /**
                 * CPU在采样窗口内的使用量（纳秒）。
                 * @example `0`
                 */
                UsageNanoCores: number;
                /**
                 * CPU使用上限（CPU核数*1000）。
                 * @example `1024`
                 */
                Limit: number;
                /**
                 * CPU历史使用总量。
                 * @example `40876694`
                 */
                UsageCoreNanoSeconds: number;
                /**
                 * 最近10秒的平均负载情况。
                 * @example `0`
                 */
                Load: number;
            };
            /**
             * 容器的内存数据。
             */
            Memory: {
                /**
                 * 常驻内存集，即实际使用的物理内存。
                 * @example `9289728`
                 */
                Rss: number;
                /**
                 * 已使用内存。
                 * @example `9289728`
                 */
                UsageBytes: number;
                /**
                 * 当前内存工作集使用量。
                 * @example `9289728`
                 */
                WorkingSet: number;
                /**
                 * 可用内存。
                 * @example `4285091840`
                 */
                AvailableBytes: number;
                /**
                 * 缓存。
                 * @example `9289728`
                 */
                Cache: number;
            };
            /**
             * 容器名称。
             * @example `u1`
             */
            Name: string;
        }[];
    }[];
}
