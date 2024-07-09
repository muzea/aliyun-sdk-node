export interface DescribeDBClusterAvailableResourcesResponse {
    /**
     * 请求ID。
     * @example `2B19F698-8FFC-4918-B9E2-58D878******`
     */
    RequestId: string;
    /**
     * 可售卖的资源信息列表。
     */
    AvailableZones: {
        /**
         * 可售卖引擎列表。
         */
        SupportedEngines: {
            /**
             * 数据库引擎版本。
             * @example `mysql57`
             */
            Engine: string;
            /**
             * 可售卖的资源列表。
             */
            AvailableResources: {
                /**
                 * 节点规格。
                 * @example `polar.mysql.x4.large`
                 */
                DBNodeClass: string;
                /**
                 * 集群系列，取值范围如下：
                 * * **Normal**：集群版
                 * * **Basic**：单节点
                 * * **ArchiveNormal**：高压缩引擎（X-Engine）
                 * * **NormalMultimaster**：多主集群（库表）
                 * * **SENormal**：标准版
                 * > * 仅PolarDB MySQL版支持单节点产品系列。
                 * > * 仅PolarDB MySQL版8.0版本的集群，支持高压缩引擎（X-Engine）和多主集群（库表）系列。
                 * @example `Normal`
                 */
                Category: string;
            }[];
        }[];
        /**
         * 可用区ID。
         * @example `cn-hangzhou-i`
         */
        ZoneId: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
    }[];
}
