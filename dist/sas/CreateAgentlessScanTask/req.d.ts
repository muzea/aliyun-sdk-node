export interface CreateAgentlessScanTaskRequest {
    /**
     * 目标类型。取值：
     * - **2**：镜像
     * @example `2`
     */
    "TargetType"?: number;
    /**
     * 指定待检测的资产UUID。
     * > 您可以调用[DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~)接口获取服务器的UUID。
     */
    "UuidList"?: string[];
    /**
     * 镜像保留时间，单位为天。
     * @example `1`
     */
    "AutoDeleteDays"?: number;
    /**
     * 是否检测数据盘。取值：
     * - **true**：检测
     * - **false**：不检测
     * @example `true`
     */
    "ScanDataDisk"?: boolean;
    /**
     * 是否打开省钱模式。取值：
     * - **true**：打开
     * - **false**：关闭
     * @example `true`
     */
    "ReleaseAfterScan"?: boolean;
    "AssetSelectionType"?: string;
}
