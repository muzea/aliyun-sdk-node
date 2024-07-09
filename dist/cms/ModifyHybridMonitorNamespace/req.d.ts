export interface ModifyHybridMonitorNamespaceRequest {
    /**
     * 指标仓库名称。
     * 格式：由大写字母、小写字母、数字和短划线（-）组成。
     * 关于如何获取指标仓库名称，请参见[DescribeHybridMonitorNamespaceList](~~428880~~)。
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
     * - cms.s1.3xlarge：数据存储时长93天。
     * - cms.s1.6xlarge：数据存储时长185天。
     * - cms.s1.12xlarge：数据存储时长376天。
     * 不同存储时长规格的价格，请参见[监控大盘](~~223532~~)中的**价格表**。
     * @example `cms.s1.2xlarge`
     */
    "Spec"?: string;
}
