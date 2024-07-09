export interface CreateDedicatedBlockStorageClusterRequest {
    /**
     * 专属块存储集群所属地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-heyuan`
     */
    "RegionId": string;
    /**
     * 专属块存储集群所属可用区ID。您可以调用[DescribeZones](~~25610~~)获取可用区列表。
     * @example `cn-heyuan-b`
     */
    "Azone": string;
    /**
     * 专属块存储集群名称。
     * @example `myDBSCCluster`
     */
    "DbscName": string;
    /**
     * 专属块存储集群的容量。取值范围为61440~2334720GiB（2280 TiB），最小递增步长为12288 GiB。
     * > 当专属块存储集群的容量小于576 TiB时，每TiB支持的最大吞吐量性能不超过52 MB/s。当专属块存储集群的容量大于576 TiB时，每TiB支持的最大吞吐量性能不超过26 MB/s。
     * @example `61440`
     */
    "Capacity": number;
    /**
     * 专属块存储集群性能类型。取值范围：
     * - Standard：基础型。该类型的专属块存储集群中可创建ESSD PL0云盘。
     * - Premium：性能型。该类型的专属块存储集群中可创建ESSD PL1云盘。
     * 默认值：Premium。
     * 关于ESSD云盘的更多信息，请参见[ESSD云盘](~~122389~~)。
     * @example `Premium`
     */
    "Type": string;
    /**
     * 专属块存储集群所在的企业资源组ID。
     * @example `rg-acfmvs*******`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签列表，最多包含20个子项。
     */
    "Tag"?: {
        /**
         * 专属块存储集群的标签键。
         * @example `tag-key`
         */
        Key: string;
        /**
         * 专属块存储集群的标签值。
         * @example `tag-value`
         */
        Value: string;
    }[];
    /**
     * 指定实例购买时长。取值范围：6、7、8、9、10、11、12、24、36。
     * @example `12`
     */
    "Period"?: number;
    /**
     * 包年包月时长的时间单位，即参数`Period`的单位，目前仅支持Month。
     * @example `Month`
     */
    "PeriodUnit"?: string;
    /**
     * 该参数已废弃。
     * @example `test1233`
     */
    "DbscId"?: string;
}
