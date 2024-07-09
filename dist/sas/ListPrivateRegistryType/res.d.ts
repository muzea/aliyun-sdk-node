export interface ListPrivateRegistryTypeResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `24A20733-10A0-4AF6-BE6B-E3322413****`
     */
    RequestId: string;
    /**
     * 镜像仓类型信息。
     */
    RegistryTypeInfos: {
        /**
         * 镜像仓类型。取值：
         * - **acr**：ACR
         * - **harbor**：Harbor
         * - **quay**：Quay
         * - **CI/CD**：Jenkins
         * @example `harbor`
         */
        RegistryType: string;
        /**
         * 镜像仓的数量。
         * @example `2`
         */
        Count: number;
    }[];
}
