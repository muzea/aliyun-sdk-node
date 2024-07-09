export interface ModifyContainerScanConfigRequest {
    /**
     * 容器集群的ID。
     * > 您可以调用[DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~)接口获取该参数。
     * @example `cfb7a55a81f7246b5ac18845ea79a****`
     */
    "ClusterId"?: string;
    /**
     * 容器应用名。
     * @example `[\"logtail-ds\",\"alicloud-monitor-controller\",\"storage-snapshot-manager\"]`
     */
    "AppNames"?: string;
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
