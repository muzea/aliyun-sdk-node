export interface GetResourceComplianceGroupByRegionResponse {
    /**
     * 评估数据统计结果。
     */
    ComplianceResult: {
        /**
         * 按资源所属地域分组的评估结果列表。
         */
        ComplianceResultList: {
            /**
             * 评估的资源所属地域。
             * @example `cn-beijing`
             */
            RegionId: string;
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
                 * @example `ACS::ECS::Instance`
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
     * @example `0FDF8006-34A0-5334-8C79-48F64EAB34F1`
     */
    RequestId: string;
}
