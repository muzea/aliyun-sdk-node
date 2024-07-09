export interface ListCompliancePacksResponse {
    /**
     * 请求ID。
     * @example `6EC7AED1-172F-42AE-9C12-295BC2ADB751`
     */
    RequestId: string;
    /**
     * 合规包列表查询结果。
     */
    CompliancePacksResult: {
        /**
         * 合规包列表。
         */
        CompliancePacks: {
            /**
             * 合规包状态。取值：
             * - ACTIVE：正常。
             * - CREATING：创建中。
             * @example `ACTIVE`
             */
            Status: string;
            /**
             * 合规包ID。
             * @example `cp-fdc8626622af00f9****`
             */
            CompliancePackId: string;
            /**
             * 合规包的风险等级。取值：
             * - 1：高风险。
             * - 2：中风险。
             * - 3：低风险。
             * @example `1`
             */
            RiskLevel: number;
            /**
             * 合规包描述。
             * @example `基于等保2.0三级标准，提供持续检测合规性的建议模板，帮助您提前自检并修复问题，以便快速通过正式检测。`
             */
            Description: string;
            /**
             * 合规包名称。
             * @example `等保三级预检合规包`
             */
            CompliancePackName: string;
            /**
             * 合规包归属的阿里云账号ID。
             * @example `120886317861****`
             */
            AccountId: number;
            /**
             * 合规包模板ID。
             * @example `ct-5f26ff4e06a300c4****`
             */
            CompliancePackTemplateId: string;
            /**
             * 创建合规包的时间戳。单位：毫秒。
             * @example `1621325046000`
             */
            CreateTimestamp: number;
        }[];
        /**
         * 分页时每页显示的数据行数。
         * @example `10`
         */
        PageSize: number;
        /**
         * 页码。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 合规包总数。
         * @example `1`
         */
        TotalCount: number;
    };
}
