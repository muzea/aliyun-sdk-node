export interface DescribeDiagnosticMetricSetsResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE*****`
     */
    RequestId: string;
    /**
     * 本次调用返回的查询凭证值。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    NextToken: string;
    /**
     * 诊断指标集合。
     */
    MetricSets: {
        /**
         * 诊断指标集合ID。
         * @example `dms-bp17p0qwtr72zmu*****`
         */
        MetricSetId: string;
        /**
         * 诊断指标集合的名称。
         * @example `远程连接问题诊断`
         */
        MetricSetName: string;
        /**
         * 诊断指标集合的描述信息。
         * @example `远程连接问题诊断`
         */
        Description: string;
        /**
         * 诊断指标集合类型。取值范围：
         * - User：用户。
         * - Common：公共。
         * @example `User`
         */
        Type: string;
        /**
         * 支持的资源类型。
         * @example `instance`
         */
        ResourceType: string;
        /**
         * 诊断指标列表。
         */
        MetricIds: string[];
    }[];
}
