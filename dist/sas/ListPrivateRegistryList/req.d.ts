export interface ListPrivateRegistryListRequest {
    /**
     * 镜像仓类型。取值：
     * - **acr**：ACR
     * - **harbor**：Harbor
     * - **quay**：Quay
     * - **CI/CD**：Jenkins
     * @example `harbor`
     */
    "RegistryType"?: string;
}
