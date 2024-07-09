export interface GetAggregateResourceComplianceGroupByResourceTypeResponse {
    /**
     * 评估数据统计结果。
     */
    ComplianceResult: {
        /**
         * 按资源类型分组的评估结果列表。
         */
        ComplianceResultList: {
            /**
             * 评估的资源类型。
             * @example `ACS::ECS::Instance`
             */
            ResourceType: string;
            /**
             * 评估数据统计结果。
             */
            Compliances: {
                /**
                 * 合规结果。取值：
                 * - COMPLIANT：合规。
                 * - NON_COMPLIANT：不合规。
                 * - NOT_APPLICABLE：不适用。
                 * - INSUFFICIENT_DATA：无数据。
                 * @example `COMPLIANT`
                 */
                ComplianceType: string;
                /**
                 * 统计结果数量。
                 * @example `1`
                 */
                Count: number;
            }[];
        }[];
    };
    /**
     * 请求ID。
     * @example `0CE6AEE1-B3D8-530A-9302-6606B20503BB`
     */
    RequestId: string;
}
