export interface DescribeVulCheckTaskStatusDetailResponse {
    /**
     * 机器对应的漏洞子任务总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 结果的请求id。
     * @example `BE120DAB-F4E7-4C53-ADC3-A97578ABF384`
     */
    RequestId: string;
    /**
     * 机器的漏洞任务状态列表。
     */
    TaskStatuses: {
        /**
         * 主任务id。
         * @example `16190385`
         */
        TaskId: string;
        /**
         * 漏洞检测任务状态列表。
         */
        TaskStatusList: {
            /**
             * 漏洞类型。取值：
             * - **cve**：Linux软件漏洞
             * - **sys**：Windows系统漏洞
             * - **cms**：Web-CMS漏洞
             * - **sca**：sca漏洞
             * @example `cve`
             */
            Type: string;
            /**
             * 检查完成的状态。取值：
             * - **0**：未处理
             * - **1**：采集中
             * - **2**：采集完成
             * - **3**：匹配中
             * - **4**：已完成
             * @example `4`
             */
            Status: string;
            /**
             * 失败code。
             * @example `push_command_failed`
             */
            Code: string;
        }[];
    }[];
}
