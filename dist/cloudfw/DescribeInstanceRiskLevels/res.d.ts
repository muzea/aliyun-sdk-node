export interface DescribeInstanceRiskLevelsResponse {
    /**
     * 返回结果的请求ID。
     * @example `9AABB1B7-C81F-5158-9EF9-B2DD5D3DA014`
     */
    RequestId: string;
    /**
     * 实例风险列表。
     */
    InstanceRisks: {
        /**
         * 云防火墙实例的ID。
         * @example `vipcloudfw-cn-7mz2fj8nm0u`
         */
        InstanceId: string;
        /**
         * 风险等级。取值包括：
         * - **medium**：中等
         * @example `medium`
         */
        Level: string;
        /**
         * ECS实例风险列表。
         */
        Details: {
            /**
             * 服务器IP地址。
             * @example `203.107.XX.XX`
             */
            Ip: string;
            /**
             * 类型。
             * @example `ResourceNotProtected`
             */
            Type: string;
            /**
             * 风险等级。取值包括：
             * - **medium**：中等
             * @example `medium`
             */
            Level: string;
        }[];
    }[];
}
