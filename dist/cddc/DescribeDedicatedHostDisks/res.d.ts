export interface DescribeDedicatedHostDisksResponse {
    /**
     * 主机ID。
     * @example `ch-bp183v72jr033****`
     */
    DedicatedHostId: string;
    /**
     * 请求ID。
     * @example `C6C6CF41-F284-4F63-AB4D-44FACE3BASQW`
     */
    RequestId: string;
    /**
     * 磁盘信息。
     */
    Disks: {
        /**
         * 云盘或本地盘磁盘类型 ，取值：
         * - **system**：系统盘
         * - **data**： 数据盘
         * @example `data`
         */
        Type: string;
        /**
         * 云盘状态，取值：
         * - **In_use**
         * - **Available**
         * - **Attaching**
         * - **Detaching**
         * - **Creating**
         * - **ReIniting**
         * @example `In_use`
         */
        Status: string;
        /**
         * 磁盘性能。
         * > MyBase提供了**ESSD云盘**、**ESSD PL2云盘**、**ESSD PL3云盘**三个性能级别的云盘规格，PL级别越高，云盘性能越好。
         * @example `PL1`
         */
        PerformanceLevel: string;
        /**
         * 云盘或本地盘ID。
         * @example `d-bp1dffpog8r2eowd****`
         */
        DiskId: string;
        /**
         * 磁盘最大吞吐量，单位为MB/S。
         * @example `284`
         */
        MaxThroughput: number;
        /**
         * 磁盘最大IOPS，单位为万。
         * @example `18250`
         */
        MaxIOPS: number;
        /**
         * 是否有实例运行在该磁盘上，取值：
         * - **true**：有运行的实例
         * - **false**：无运行的实例
         * @example `true`
         */
        HasDBInstance: boolean;
        /**
         * 云盘或本地盘挂载实例的设备名。
         * @example `/dev/xvdb`
         */
        Device: string;
        /**
         * 云盘或本地盘大小，单位为GB。
         * @example `329`
         */
        Size: number;
        /**
         * 云盘或本地盘所属的可用区ID。
         * @example `cn-hangzhou-h`
         */
        ZoneId: string;
        /**
         * 主机存储类型，取值：
         * - **cloud_ssd**：本地SSD盘
         * - **cloud_essd**：ESSD云盘
         * @example `cloud_essd`
         */
        Category: string;
        /**
         * 该磁盘上运行的实例ID。
         * @example `rm-bp121zcqr5h8m****`
         */
        DBInstanceId: string;
    }[];
}
