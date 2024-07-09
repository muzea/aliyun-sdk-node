export interface ListCertWarehouseRequest {
    /**
     * 仓库名称，支持模糊查询。
     * @example `name`
     */
    "Name"?: string;
    /**
     * 仓库实例。
     * @example `14dcc8afc7578e1f`
     */
    "InstanceId"?: string;
    /**
     * 仓库类型，取值：
     * - **ssl**：SSL证书
     * - **uploadPCA**：上传PCA证书
     * - **free**：免费证书（仅中国站）
     * - **aliyunPCA**：阿里云PCA证书（仅中国站）
     * - **disable**：未启用
     * @example `aliyunPCA`
     */
    "Type"?: string;
    /**
     * 分页，当前页，默认1。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页，每页展示数据大小，默认50。
     * @example `50`
     */
    "ShowSize"?: number;
}
