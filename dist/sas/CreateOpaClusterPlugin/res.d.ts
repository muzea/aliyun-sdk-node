export interface CreateOpaClusterPluginResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `D65AADFC-1D20-5A6A-8F6A-9FA53C0DC1F8`
     */
    RequestId: string;
    /**
     * 安全策略治理组件的安装状态。
     */
    InstallStatus: {
        /**
         * 容器集群的编号。
         * @example `c60b77fe62093480db6164a3c2fa****
        `
         */
        ClusterId: string;
        /**
         * 组件安装状态。取值：
         * - **true**：已安装
         * - **false**：正在安装
         * @example `true`
         */
        InstallStatus: boolean;
    }[];
}
