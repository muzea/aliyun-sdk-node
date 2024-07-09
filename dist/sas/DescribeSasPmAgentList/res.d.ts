export interface DescribeSasPmAgentListResponse {
    /**
     * 返回的requestId。
     * @example `8EF3ACC2-9400-5B64-B72D-4A1D35113750`
     */
    RequestId: string;
    /**
     * 查询结果列表。
     */
    SasPmAgentList: {
        /**
         * 云助手全局唯一ID。
         * @example `mi-hz034jn***yxhc0`
         */
        AliyunAssistId: string;
        /**
         * 云监控全局唯一ID。
         * @example `5d5ef6be-54ff-11ed-82cf-8f01475e****`
         */
        AliyunMonitorId: string;
        /**
         * 云助手安装状态。
         * - **0**：安装中
         * - **1**：安装成功
         * - **2**：安装失败
         * - **3**：安装超时
         * @example `1`
         */
        AssistInstallStatus: number;
        /**
         * 云监控安装状态。
         * - **0**：失败
         * - **1**：成功
         * @example `1`
         */
        MonitorInstallStatus: number;
        /**
         * 云助手安装执行结果。
         * - **0**：SUCCESS
         * - **1**：MISSING_PARAM
         * - **2**：UNKNOWN_SYSTEM
         * - **3**：DOWNLOAD_FAILED
         * - **4**：INSTALL_FAILED
         * @example `0`
         */
        AssistInstallResult: number;
        /**
         * 云监控安装执行结果。
         * - **0**：失败
         * - **1**：成功
         * @example `1`
         */
        MonitorInstallResult: number;
        /**
         * 服务器UUID。
         * @example `87f1724d-075e-48d3-95fd-78c2dd36****`
         */
        Uuid: string;
    }[];
}
