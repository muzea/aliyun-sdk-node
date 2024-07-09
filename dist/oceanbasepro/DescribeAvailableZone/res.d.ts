export interface DescribeAvailableZoneResponse {
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C`
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 可用区信息。
         */
        AvailableZones: {
            /**
             * 地域。
             * @example `cn-hangzhou`
             */
            Region: string;
            /**
             * 可用区列表。
             * @example `cn-hangzhou-h,cn-hangzhou-i,cn-hangzhou-j`
             */
            Zones: string;
            /**
             * 订单来源。
             * - PUBLIC
             * - FINANCE
             * @example `PUBLIC`
             */
            Channel: string;
            /**
             * 部署方案。
             * @example `multiple`
             */
            DeployType: string;
            /**
             * 实例类型。
             * @example `cluster`
             */
            InstanceType: string;
            /**
             * 系列。
             * @example `normal`
             */
            Series: string;
            /**
             * 节点规格。
             */
            SupportSpecifications: {
                /**
                 * 节点规格。
                 * @example `oceanbase.cluster.cd8.xlarge`
                 */
                Spec: string;
                /**
                 * 集群规格信息。
                 * @example `4C16GB`
                 */
                InstanceClass: string;
                /**
                 * 存储类型。
                 */
                DiskTypes: string[];
                /**
                 * 存储大小。
                 */
                DiskSizeRange: {
                    /**
                     * 最小调整粒度。
                     * @example `5`
                     */
                    Step: number;
                    /**
                     * 最大值。
                     * @example `40000`
                     */
                    Max: number;
                    /**
                     * 最小值。
                     * @example `1000`
                     */
                    Min: number;
                };
                /**
                 * 版本。
                 */
                SupportEngineVersions: {
                    /**
                     * OceanBase Server 版本号。
                     * @example `3.2.4.4`
                     */
                    ObVersion: string;
                    /**
                     * 是否支持隔离。
                     * @example `true`
                     */
                    SupportIsolationOptimization: boolean;
                    /**
                     * 全功能型副本数。
                     */
                    SupportReplicaModes: string[];
                }[];
            }[];
            /**
             * cpu架构
             * @example `x86`
             */
            CpuArch: string;
        }[];
    };
}
