export interface DescribeAvailableResourcesResponse {
    /**
     * 请求ID。
     * @example `61DC563C-F8E4-593A-8D27-CE**********`
     */
    RequestId: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    RegionId: string;
    /**
     * 售卖资源信息。
     */
    Resources: {
        /**
         * 支持的引擎和规格信息。
         */
        SupportedEngines: {
            /**
             * 支持的引擎版本。
             * @example `6.0`
             */
            SupportedEngineVersion: string;
            /**
             * 支持的规格。
             */
            SupportedInstanceClasses: {
                /**
                 * Segment节点规格描述。
                 * @example `单segment节点2核配置，含16GB 内存`
                 */
                Description: string;
                /**
                 * Segment规格信息。
                 * @example `2C16G`
                 */
                DisplayClass: string;
                /**
                 * Segment规格信息。
                 * @example `2C16G`
                 */
                InstanceClass: string;
                /**
                 * Segment节点信息。
                 */
                NodeCount: {
                    /**
                     * 增加节点时的步长。
                     * 例如该参数取值为4时，则表示增加Segment节点时，增加的节点数量必须为4的倍数。
                     * @example `4`
                     */
                    Step: string;
                    /**
                     * Segment节点的最小值。
                     * @example `4`
                     */
                    MinCount: string;
                    /**
                     * Segment节点的最大值。
                     * @example `256`
                     */
                    MaxCount: string;
                };
                /**
                 * 存储类型。取值说明：
                 * - **cloud_essd**：ESSD云盘。
                 * - **cloud_efficiency**：高效云盘。
                 * - **oss**：OSS。
                 * @example `cloud_essd`
                 */
                StorageType: string;
                /**
                 * Segment存储容量。
                 */
                StorageSize: {
                    /**
                     * Segment存储扩容步长。
                     * @example `50`
                     */
                    Step: string;
                    /**
                     * Segment最小存储容量。
                     * @example `50`
                     */
                    MinCount: string;
                    /**
                     * Segment最大存储容量。
                     * @example `1000`
                     */
                    MaxCount: string;
                };
                /**
                 * 实例系列。取值说明：
                 * - **HighAvailability**：高可用版。
                 * - **Basic**：基础版
                 * @example `HighAvailability`
                 */
                Category: string;
            }[];
            /**
             * 实例资源类型。取值说明：
             * - **ecs**：存储弹性模式。
             * - **serverless**：Serverless模式。
             * @example `ecs`
             */
            Mode: string;
        }[];
        /**
         * 可用区ID。
         * @example `cn-hangzhou-h`
         */
        ZoneId: string;
    }[];
}
