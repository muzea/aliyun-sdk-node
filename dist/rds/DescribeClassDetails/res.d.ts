export interface DescribeClassDetailsResponse {
    /**
     * 请求ID。
     * @example `E9DD55F4-1A5F-48CA-BA57-DFB3CA8C4C34`
     */
    RequestId: string;
    /**
     * 规格代码。
     * @example `mysql.n2.medium.1`
     */
    ClassCode: string;
    /**
     * 实例规格对应的最大IO带宽。单位：Mbps。
     * @example `1024`
     */
    MaxIOMBPS: string;
    /**
     * 最大连接数。
     * @example `4000`
     */
    MaxConnections: string;
    /**
     * 规格族。
     * @example `x`
     */
    ClassGroup: string;
    /**
     * 实例规格对应的CPU核数。单位：个。
     * @example `4`
     */
    Cpu: string;
    /**
     * 架构。
     * @example `x86`
     */
    InstructionSetArch: string;
    /**
     * 内存容量。单位：GB。
     * @example `2GB`
     */
    MemoryClass: string;
    /**
     * 实例规格对应的最大IOPS。单位：次/秒。
     * @example `N/A`
     */
    MaxIOPS: string;
    /**
     * 价格。
     * <props="china">单位：分（人民币）。</props>
     * <props="intl">单位：美分（美元）。</props>
     * >* CommodityCode参数中传入按量付费的商品Code时，显示为每小时的价格。
     * >* CommodityCode参数中传入包年包月的商品Code时，显示为每月的价格。
     * @example `13400`
     */
    ReferencePrice: string;
    /**
     * 系列。取值：
     * * **Basic**：基础系列
     * * **HighAvailability**：高可用系列
     * * **AlwaysOn**：集群系列
     * * **Finance**：三节点企业系列
     * @example `Basic`
     */
    Category: string;
    /**
     * 存储类型，取值：
     * * **local_ssd**：本地SSD盘
     * * **cloud_ssd**：SSD云盘
     * * **cloud_essd**：ESSD PL1云盘
     * * **cloud_essd2**：ESSD PL2云盘
     * * **cloud_essd3**：ESSD PL3云盘
     * @example `local_ssd`
     */
    DBInstanceStorageType: string;
}
