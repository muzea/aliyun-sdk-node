export interface DescribeBundlesRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 分页查询时，每页最大行数。
     * - 最大值：100
     * - 默认值：10
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 下一个查询开始的Token。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    "NextToken"?: string;
    /**
     * 云电脑模板类型。
     * @example `SYSTEM`
     */
    "BundleType"?: string;
    /**
     * 云电脑规格族。
     * @example `eds.general`
     */
    "DesktopTypeFamily"?: string;
    /**
     * 云电脑规格包含的vCPU数量。
     * @example `2`
     */
    "CpuCount"?: number;
    /**
     * 云电脑规格包含的内存大小。单位为GiB。
     * @example `4`
     */
    "MemorySize"?: number;
    /**
     * 云电脑规格包含的GPU个数。
     * @example `1`
     */
    "GpuCount"?: number;
    /**
     * 是否查询云电脑规格的库存状态。
     * @example `true`
     */
    "CheckStock"?: boolean;
    /**
     * 是否属于云电脑池。
     * @example `false`
     */
    "FromDesktopGroup"?: boolean;
    /**
     * 协议类型。
     * @example `ASP`
     */
    "ProtocolType"?: string;
    /**
     * 云电脑模板ID列表。可设置1\~100个。
     * @example `bundle_ecd_graphics.2xlarge_s15d15_win2019`
     */
    "BundleId"?: string[];
    /**
     * 查询云电脑列表时是否返回多会话的云电脑模板。默认不返回。
     * @example `false`
     */
    "SupportMultiSession"?: boolean;
    /**
     * 是否开启磁盘加密。
     * @example `false`
     */
    "VolumeEncryptionEnabled"?: boolean;
    /**
     * 邀测中，暂未开放使用。
     * @example `example`
     */
    "FotaChannel"?: string;
    /**
     * 精选模板。
     * @example `true`
     */
    "SelectedBundle"?: boolean;
    /**
     * 会话类型。
     * @example `SingleSession`
     */
    "SessionType"?: string;
    /**
     * 镜像ID列表。
     */
    "ImageId"?: string[];
    /**
     * 操作系统类型。
     * @example `Windows`
     */
    "OsType"?: string;
    /**
     * 使用场景。
     * @example `FastBuy`
     */
    "Scope"?: string;
}
