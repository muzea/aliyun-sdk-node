export interface DescribeAttachRecordsResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `9F4E6157-9600-5588-86B9-38F09067****`
     */
    RequestId: string;
    /**
     * 服务器的自动接入结果列表。
     */
    AccessList: {
        /**
         * 服务器UUID。
         * @example `cd405430-c027-4937-8398-10152dac****`
         */
        EcsUUID: string;
        /**
         * 服务器自动接入开关。取值：
         * - **ON**：开启
         * - **OFF**：关闭
         * @example `ON`
         */
        AttachSwitch: string;
        /**
         * 服务器自动接入状态。取值：
         * - **0**：全部接入
         * - **1**：部分接入
         * - **2**：接入失败
         * - **3**：接入中
         * - **4**：未接入
         * @example `0`
         */
        AttachState: number;
        /**
         * 服务器自动接入执行情况。取值：
         * - **0**：安装成功
         * - **1**：安装中
         * - **2**：安装失败
         * - **3**：安装超时
         * - **4**：卸载成功
         * - **5**：卸载中
         * - **6**：卸载失败
         * - **7**：卸载超时
         * @example `0`
         */
        InstallState: number;
        /**
         * 服务器自动接入信息。
         * @example `success`
         */
        InstallMsg: string;
    }[];
}
