export interface CreateContainerScanTaskRequest {
    /**
     * 容器集群的ID。
     * > 您可以调用[DescribeGroupedContainerInstances](~~182997~~)接口获取该参数。
     * @example `c22143730ab6e40b09ec7c1c51d4d****`
     */
    "ClusterId"?: string;
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 容器ID。
     * @example `c927cf190e886696db53cda0efb57145394ccf0bf9f525353fa5c22a26e4****`
     */
    "ContainerIds"?: string;
}
