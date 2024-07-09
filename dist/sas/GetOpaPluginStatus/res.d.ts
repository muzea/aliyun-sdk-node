export interface GetOpaPluginStatusResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `09969D2C-4FAD-429E-BFBF-9A60DEF8BF6F`
     */
    RequestId: string;
    /**
     * 容器主动防御集群组件安装状态信息列表。
     */
    InstallStatus: {
        /**
         * 容器集群的编号。
         * @example `c60b77fe62093480db6164a3c2fa****`
         */
        ClusterId: string;
        /**
         * 组件安装状态。取值：
         * - **true**：已安装。
         * - **false**：未安装
         * @example `true`
         */
        InstallStatus: boolean;
    }[];
}
