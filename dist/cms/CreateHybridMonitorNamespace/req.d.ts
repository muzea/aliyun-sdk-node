export interface CreateHybridMonitorNamespaceRequest {
    /**
     * 指标仓库名称。
     * 格式：由小写字母、数字和短划线（-）组成。
     * @example `aliyun`
     */
    "Namespace": string;
    /**
     * 指标仓库描述。
     * @example `阿里云产品指标仓库。`
     */
    "Description"?: string;
    /**
     * 数据存储时长。取值：
     * - cms.s1.large：数据存储时长15天。
     * - cms.s1.xlarge：数据存储时长32天。
     * - cms.s1.2xlarge：数据存储时长63天。
     * - cms.s1.3xlarge（默认值）：数据存储时长93天。
     * - cms.s1.6xlarge：数据存储时长185天。
     * - cms.s1.12xlarge：数据存储时长376天。
     * 不同存储时长规格的价格，请参见[监控大盘](~~223532~~)中的**价格表**。
     * @example `cms.s1.3xlarge`
     */
    "Spec"?: string;
    /**
     * 监控数据的存储方案。取值：
     * - m_prom_user：监控数据存储在日志服务中。
     * - m_prom_pool：监控数据存储在云监控提供的存储空间中。
     * > 关于监控数据的存储方案的更多信息，请参见[企业云监控的监控数据存储方案说明](~~2594921~~)。
     * @example `m_prometheus`
     */
    "NamespaceType"?: string;
    /**
     * 监控数据存储的地域。
     * @example `cn-hangzhou`
     */
    "NamespaceRegion"?: string;
}
