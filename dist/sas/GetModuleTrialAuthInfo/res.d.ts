export interface GetModuleTrialAuthInfoResponse {
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 模块Code。取值：
         * - **vulFix**：漏洞修复
         * - **cloudSiem**：威胁分析与响应
         * @example `vulFix`
         */
        ModuleCode: string;
        /**
         * 是否有资格试用。取值：
         * - **true**：有资格
         * - **false**：没有资格
         */
        CanTry: boolean;
        /**
         * 试用记录。
         */
        TrialRecordList: {
            /**
             * 模块Code。取值：
             * - **vulFix**：漏洞修复
             * - **cloudSiem**：威胁分析与响应
             * @example `vulFix`
             */
            ModuleCode: string;
            /**
             * 授权额度。
             * @example `100`
             */
            AuthLimit: number;
            /**
             * 试用开始时间。
             * @example `1669824000000`
             */
            GmtStart: number;
            /**
             * 试用结束时间。
             * @example `1679760000000`
             */
            GmtEnd: number;
            /**
             * 试用状态。取值：
             * - **1**：试用中
             * - **0**：试用结束
             * @example `1`
             */
            Status: number;
            /**
             * 授权额度列表。当ModuleCode为cloudSiem时有效，含义分别为威胁分析与响应日志存储容量（GB）和日志接入流量（GB/天）。
             * @example `[100,1]`
             */
            AuthLimitList: string;
        }[];
    };
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `F8B6F758-BCD4-597A-8A2C-DA5A552C****`
     */
    RequestId: string;
}
