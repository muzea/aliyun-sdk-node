export interface ModifyAutoScalingConfigRequest {
    /**
     * 实例ID。
     * @example `rm-2ze8g2am97624****`
     */
    "InstanceId": string;
    /**
     * 规格弹性伸缩功能配置项。
     */
    "Spec"?: {
        /**
         * 是否应用规格弹性伸缩功能配置项**Spec**下的配置：
         * - **true**：是。
         * - **false**：否。
         * @example `true`
         */
        Apply: boolean;
        /**
         * 是否开启规格自动扩容：
         * - **true**：是。
         * - **false**：否。
         * @example `true`
         */
        Upgrade: boolean;
        /**
         * 触发规格自动扩容的CPU平均利用率阈值，单位为%，取值：
         * - **50**
         * - **60**
         * - **70**
         * - **80**
         * - **90**
         * ><notice>目标数据库实例为PolarDB MySQL版的集群版、RDS MySQL高可用系列云盘版时，需要设置本参数。
         * ></notice>
         * @example `70`
         */
        CpuUsageUpperThreshold: number;
        /**
         * 触发规格自动扩容的内存平均利用率阈值，单位为%，取值：
         * - **50**
         * - **60**
         * - **70**
         * - **80**
         * - **90**
         * ><notice>目标数据库实例为中国站Redis云原生（原云盘）社区版时，需要设置本参数。
         * ></notice>
         * @example `70`
         */
        MemUsageUpperThreshold: number;
        /**
         * 自动扩容的规格上限。仅支持扩容到数据库实例同系列的更高规格，详情请参见各数据库实例的产品规格文档：
         * <props="china">
         * - PolarDB MySQL版的集群版请参见[计算节点规格](~~102542~~)。
         * - RDS MySQL高可用系列云盘版请参见[产品规格](~~276974~~)。
         * - Redis云原生（原云盘）社区版请参见[实例规格](~~144986~~)。
         * </props>
         * <props="intl">
         * - PolarDB MySQL版的集群版请参见[计算节点规格](~~102542~~)。
         * - RDS MySQL高可用系列云盘版请参见[产品规格](~~276974~~)。
         * </props>
         * @example `polar.mysql.x8.12xlarge
        `
         */
        MaxSpec: string;
        /**
         * 实例只读节点数的最大值。
         * ><notice>目标数据库实例为PolarDB MySQL版的集群版时，需要设置本参数。
         * ></notice>
         * @example `10`
         */
        MaxReadOnlyNodes: number;
        /**
         * 观测窗口。参数值由数值和时间单位后缀组成，支持的数据库实例及其取值如下，其中时间后缀**m**表示分钟，**h**表示小时：
         * - PolarDB MySQL版的集群版：**5m**、**10m**、**15m**、**30m**。
         * - RDS MySQL高可用系列云盘版：**5m**、**20m**、**30m**、**40m**、**1h**。
         * - Redis云原生（原云盘）社区版：**5m**、**10m**、**15m**、**30m**。
         * @example `5m`
         */
        ObservationWindowSize: string;
        /**
         * 静默期。参数值由数值和时间单位后缀组成，支持的数据库实例及其取值如下，其中时间单位后缀**m**表示分钟，**h**表示小时，**d**：表示天：
         * - PolarDB MySQL版的集群版：**5m**、**10m**、**30m**、**1h**、**2h**、**3h**、**1d**、**7d**。
         * - RDS MySQL高可用系列云盘版：**5m**、**10m**、**30m**、**1h**、**2h**、**3h**、**1d**、**7d**。
         * @example `5m`
         */
        CoolDownTime: string;
        /**
         * 是否开启规格自动回缩：
         * - **true**：是。
         * - **false**：否。
         * ><notice>目标数据库实例为PolarDB MySQL版的集群版、RDS MySQL高可用系列云盘版时，需要设置本参数。
         * ></notice>
         * @example `true`
         */
        Downgrade: boolean;
    };
    /**
     * 存储自动扩容功能配置项。
     */
    "Storage"?: {
        /**
         * 是否应用存储自动扩容功能配置项**Storage**下的配置：
         * - **true**：是。
         * - **false**：否。
         * @example `true`
         */
        Apply: boolean;
        /**
         * 是否开启存储自动扩容：
         * - **true**：是。
         * - **false**：否。
         * @example `true`
         */
        Upgrade: boolean;
        /**
         * 触发存储自动扩容的存储空间平均利用率阈值，单位为%，取值：
         * - **50**
         * - **60**
         * - **70**
         * - **80**
         * - **90**
         * @example `70`
         */
        DiskUsageUpperThreshold: number;
        /**
         * 存储空间上限，需要大于等于实例当前存储空间总大小，取值：
         * - ESSD云盘上限：32000 GB。
         * - SSD云盘上限：6000 GB。
         * > SSD云盘已下线，建议[升级至ESSD云盘](~~314678~~)。
         * @example `32000`
         */
        MaxStorage: number;
    };
    /**
     * 带宽弹性伸缩功能配置项。
     */
    "Bandwidth"?: {
        /**
         * 是否应用带宽弹性伸缩功能配置项**Bandwidth**下的配置：
         * - **true**：是。
         * - **false**：否。
         * @example `true`
         */
        Apply: boolean;
        /**
         * 是否开启带宽自动扩展：
         * - **true**：是。
         * - **false**：否。
         * @example `true`
         */
        Upgrade: boolean;
        /**
         * 触发带宽自动扩展的带宽平均使用率阈值，单位为%，取值：
         * - **50**
         * - **60**
         * - **70**
         * - **80**
         * - **90**
         * - **95**
         * @example `70`
         */
        BandwidthUsageUpperThreshold: number;
        /**
         * 带宽自动扩展的观测窗口。参数值由数值和时间单位后缀组成，其中时间单位后缀**m**表示分钟：
         * - **1m**
         * - **5m**
         * - **10m**
         * - **15m**
         * - **30m**
         * @example `5m`
         */
        ObservationWindowSize: string;
        /**
         * 是否开启带宽自动回缩：
         * - **true**：是。
         * - **false**：否。
         * @example `true`
         */
        Downgrade: boolean;
        /**
         * 触发带宽自动回缩的带宽平均使用率阈值，单位为%，取值：
         * - **10**
         * - **20**
         * - **30**
         * @example `30`
         */
        BandwidthUsageLowerThreshold: number;
    };
    /**
     * 分片弹性伸缩功能配置项。
     */
    "Shard"?: {
        /**
         * 是否应用分片弹性伸缩功能配置项**Shard**下的配置：
         * - **true**：是。
         * - **false**：否。
         * ><notice>仅当目标数据库实例为中国站Redis云原生（原云盘）版集群架构时，支持分片弹性伸缩功能。
         * ></notice>
         * @example `true`
         */
        Apply: boolean;
        /**
         * 是否开启自动增加分片：
         * - **true**：是。
         * - **false**：否。
         * @example `true`
         */
        Upgrade: boolean;
        /**
         * 触发自动增加分片的内存平均利用率阈值，单位为%，取值：
         * - **50**
         * - **60**
         * - **70**
         * - **80**
         * - **90**
         * @example `70`
         */
        MemUsageUpperThreshold: number;
        /**
         * 实例总分片数的最大值， 取值为正整数，取值范围：4~32。
         * @example `16`
         */
        MaxShards: number;
        /**
         * 自动增加分片观测窗口。参数值由数值和时间单位后缀组成，其中时间单位后缀**m**表示分钟：
         * - **5m**
         * - **10m**
         * - **15m**
         * - **30m**
         * @example `5m`
         */
        UpgradeObservationWindowSize: string;
        /**
         * 自动减少分片是否开启：
         * - **true**：是。
         * - **false**：否。
         * >自动减少分片功能目前在灰度发布中。
         * @example `true`
         */
        Downgrade: boolean;
        /**
         * 触发自动减少分片的内存平均利用率阈值，单位为%，取值：
         * - **10**
         * - **20**
         * - **30**
         * @example `30`
         */
        MemUsageLowerThreshold: number;
        /**
         * 实例总分片数的最小值，取值为正整数，取值范围：4~32。
         * @example `4`
         */
        MinShards: number;
        /**
         * 自动减少分片观测窗口，参数由数值和时间单位后缀组成，其中时间单位后缀**h**表示小时，**d**表示天：
         * - **1h**
         * - **2h**
         * - **3h**
         * - **1d**
         * - **7d**
         * @example `1h`
         */
        DowngradeObservationWindowSize: string;
    };
    /**
     * 资源弹性伸缩功能配置项。
     */
    "Resource"?: {
        /**
         * 是否应用资源弹性伸缩功能配置项**Resource**下的配置：
         * - **true**：是。
         * - **false**：否。
         * @example `true`
         */
        Apply: boolean;
        /**
         * 是否开启资源弹性伸缩：
         * - **true**：是。
         * - **false**：否。
         * @example `true`
         */
        Enable: boolean;
        /**
         * 触发资源自动扩容的CPU平均利用率阈值，单位为%，取值：
         * - **70**
         * - **80**
         * - **90**
         * @example `70`
         */
        CpuUsageUpperThreshold: number;
        /**
         * 扩容观测窗口。参数值由数值和时间单位后缀组成，其中时间单位后缀**m**表示分钟：
         * - **1m**
         * - **3m**
         * - **5m**
         * - **10m**
         * - **20m**
         * - **30m**
         * @example `5m`
         */
        UpgradeObservationWindowSize: string;
        /**
         * 缩容观测窗口。参数值由数值和时间单位后缀组成，其中时间单位后缀**m**表示分钟：
         * - **1m**
         * - **3m**
         * - **5m**
         * - **10m**
         * - **20m**
         * - **30m**
         * @example `5m`
         */
        DowngradeObservationWindowSize: string;
    };
}
