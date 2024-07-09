export interface GetAggregateResourceComplianceGroupByRegionResponse {
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
     * @example `5E3A847A-5D40-54A1-A2CE-77A87823ED07`
     */
    RequestId: string;
}
