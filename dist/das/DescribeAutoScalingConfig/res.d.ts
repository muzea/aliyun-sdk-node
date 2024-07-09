export interface DescribeAutoScalingConfigResponse {
    /**
     * 返回的状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 请求返回消息。
     * > 请求成功时该参数返回**Successful**，请求失败时会返回请求异常信息（如错误码等）。
     * @example `Successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `B6D17591-B48B-4D31-9CD6-9B9796B2****`
     */
    RequestId: string;
    /**
     * 请求是否执行成功：
     * - **true**：执行成功。
     * - **false**：执行失败。
     * @example `true`
     */
    Success: string;
    /**
     * 实例弹性伸缩功能配置信息。
     */
    Data: {
        /**
         * 规格弹性伸缩功能配置信息。
         */
        Spec: {
            /**
             * 规格自动扩容是否开启：
             * - **true**：是。
             * - **false**：否。
             * @example `true`
             */
            Upgrade: boolean;
            /**
             * 触发规格自动扩容的CPU平均利用率阈值，单位为%。
             * @example `70`
             */
            CpuUsageUpperThreshold: number;
            /**
             * 触发规格自动扩容的内存平均利用率阈值，单位为%。
             * @example `70`
             */
            MemUsageUpperThreshold: number;
            /**
             * 自动扩容的规格上限。详情请参见各数据库实例的产品规格文档：
             * <props="china">
             * - PolarDB MySQL版的集群版请参见[计算节点规格](~~102542~~)。
             * - RDS MySQL高可用系列云盘版请参见[产品规格](~~276974~~)。
             * - Redis社区云盘版请参见[实例规格](~~144986~~)。
             * </props>
             * <props="intl">
             * - PolarDB MySQL版的集群版请参见[计算节点规格](~~102542~~)。
             * - RDS MySQL高可用系列云盘版请参见[产品规格](~~276974~~)。
             * </props>
             * @example `polar.mysql.x8.12xlarge`
             */
            MaxSpec: string;
            /**
             * 实例只读节点数的最大值。
             * @example `10`
             */
            MaxReadOnlyNodes: number;
            /**
             * 观测窗口。 返回值由数值和时间单位后缀组成，其中时间单位后缀含义如下：
             * - **s**：表示秒。
             * - **m**：表示分钟。
             * - **h**：表示小时。
             * - **d**：表示天。
             * > 例如，返回**5m**表示5分钟。
             * @example `5m`
             */
            ObservationWindowSize: string;
            /**
             * 静默期。返回值由数值和时间单位后缀组成，其中时间单位后缀含义如下：
             * - **s**：表示秒。
             * - **m**：表示分钟。
             * - **h**：表示小时。
             * - **d**：表示天。
             * > 例如，返回**5m**表示5分钟。
             * @example `5m`
             */
            CoolDownTime: string;
            /**
             * 规格自动回缩是否开启：
             * - **true**：是。
             * - **false**：否。
             * @example `true`
             */
            Downgrade: boolean;
        };
        /**
         * 实例存储自动扩容功能配置信息。
         */
        Storage: {
            /**
             * 存储自动扩容是否开启：
             * - **true**：是。
             * - **false**：否。
             * @example `true`
             */
            Upgrade: boolean;
            /**
             * 触发存储自动扩容的存储空间平均利用率阈值，单位为%。
             * @example `70`
             */
            DiskUsageUpperThreshold: number;
            /**
             * 存储空间上限，单位为GB。
             * @example `32000`
             */
            MaxStorage: number;
        };
        /**
         * 实例本地资源弹性伸缩功能配置信息。
         */
        Resource: {
            /**
             * 本地资源弹性伸缩是否开启：
             * - **true**：是。
             * - **false**：否。
             * @example `true`
             */
            Enable: boolean;
            /**
             * 触发本地资源自动扩容的CPU平均利用率阈值，单位为%。
             * @example `70`
             */
            CpuUsageUpperThreshold: number;
            /**
             * CPU扩容步长。
             * @example `2`
             */
            CpuStep: number;
            /**
             * 扩容观测窗口。返回值由数值和时间单位后缀组成，其中时间单位后缀含义如下：
             * - **s**：表示秒。
             * - **m**：表示分钟。
             * - **h**：表示小时。
             * - **d**：表示天。
             * > 例如，返回**5m**表示5分钟。
             * @example `5m`
             */
            UpgradeObservationWindowSize: string;
            /**
             * 缩容观测窗口。返回值由数值和时间单位后缀组成，其中时间单位后缀含义如下：
             * - **s**：表示秒。
             * - **m**：表示分钟。
             * - **h**：表示小时。
             * - **d**：表示天。
             * > 例如，返回**5m**表示5分钟。
             * @example `5m`
             */
            DowngradeObservationWindowSize: string;
        };
        /**
         * 实例分片弹性伸缩功能配置信息。
         */
        Shard: {
            /**
             * 自动增加分片是否开启：
             * - **true**：是。
             * - **false**：否。
             * @example `true`
             */
            Upgrade: boolean;
            /**
             * 触发自动增加分片的内存平均利用率阈值，单位为%。
             * @example `70`
             */
            MemUsageUpperThreshold: number;
            /**
             * 实例总分片数的最大值。
             * @example `16`
             */
            MaxShards: number;
            /**
             * 自动增加分片观测窗口。返回值由数值和时间单位后缀组成，其中时间单位后缀含义如下：
             * - **s**：表示秒。
             * - **m**：表示分钟。
             * - **h**：表示小时。
             * - **d**：表示天。
             * > 例如，返回**5m**表示5分钟。
             * @example `5m`
             */
            UpgradeObservationWindowSize: string;
            /**
             * 自动减少分片是否开启：
             * - **true**：是。
             * - **false**：否。
             * @example `true`
             */
            Downgrade: boolean;
            /**
             * 触发自动减少分片的内存平均利用率阈值，单位为%。
             * @example `30`
             */
            MemUsageLowerThreshold: number;
            /**
             * 实例总分片数的最小值。
             * @example `4`
             */
            MinShards: number;
            /**
             * 自动减少分片观测窗口。返回值由数值和时间单位后缀组成，其中时间单位后缀含义如下：
             * - **s**：表示秒。
             * - **m**：表示分钟。
             * - **h**：表示小时。
             * - **d**：表示天。
             * > 例如，返回**1d**表示1天。
             * @example `1d`
             */
            DowngradeObservationWindowSize: string;
        };
        /**
         * 实例带宽弹性伸缩功能配置信息。
         */
        Bandwidth: {
            /**
             * 带宽自动扩展是否开启：
             * - **true**：是。
             * - **false**：否。
             * @example `true`
             */
            Upgrade: boolean;
            /**
             * 触发带宽自动扩展的带宽平均使用率阈值，单位为%。
             * @example `70`
             */
            BandwidthUsageUpperThreshold: number;
            /**
             * 带宽自动扩展的观测窗口。返回值由数值和时间单位后缀组成，其中时间单位后缀含义如下：
             * - **s**：表示秒。
             * - **m**：表示分钟。
             * - **h**：表示小时。
             * - **d**：表示天。
             * > 例如，返回**5m**表示5分钟。
             * @example `5m`
             */
            ObservationWindowSize: string;
            /**
             * 带宽自动回缩是否开启：
             * - **true**：是。
             * - **false**：否。
             * @example `true`
             */
            Downgrade: boolean;
            /**
             * 触发带宽自动回缩的带宽平均使用率阈值，单位为%。
             * @example `30`
             */
            BandwidthUsageLowerThreshold: number;
        };
    };
}
