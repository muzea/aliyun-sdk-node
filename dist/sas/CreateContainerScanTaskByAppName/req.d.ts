export interface CreateContainerScanTaskByAppNameRequest {
    /**
     * 集群ID。
     * @example `cfb7a55a81f7246b5ac18845ea79a****`
     */
    "ClusterId"?: string;
    /**
     * 容器应用名。
     * @example `app-centos-01`
     */
    "AppNames"?: string;
    /**
     * 请求和接收消息的语言类型。
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
