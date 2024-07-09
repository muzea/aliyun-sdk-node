export interface DescribeRecommendInstanceTypeResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    Data: {
        /**
         * 推荐的实例规格集合。
         */
        RecommendInstanceType: {
            /**
             * 实例规格的商品编码。
             * @example `ecs`
             */
            CommodityCode: string;
            /**
             * 实例规格所在的可用区ID。
             * @example `cn-hangzhou-h`
             */
            ZoneId: string;
            /**
             * 排序优先级。
             * @example `2`
             */
            Priority: number;
            /**
             * ECS实例的网络类型。
             * @example `vpc`
             */
            NetworkType: string;
            /**
             * 在哪种场景下推荐实例规格。
             * @example `CREATE`
             */
            Scene: string;
            /**
             * 抢占式实例的抢占策略。
             * @example `NoSpot`
             */
            SpotStrategy: string;
            /**
             * 实例规格所在的地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 实例的计费方式。
             * @example `PostPaid`
             */
            InstanceChargeType: string;
            Zones: {
                /**
                 * 实例规格所在的可用区集合。
                 */
                zone: {
                    /**
                     * 实例规格所在的可用区ID。
                     * @example `cn-hangzhou-h`
                     */
                    ZoneNo: string;
                    NetworkTypes: {
                        /**
                         * 实例规格的网络类型集合。
                         */
                        NetworkType: string[];
                    };
                }[];
            };
            /**
             * 实例规格名称。
             */
            InstanceType: {
                /**
                 * 实例规格是否支持I/O优化。
                 * @example `optimized`
                 */
                SupportIoOptimized: string;
                /**
                 * 实例规格的vCPU核数。
                 * @example `1`
                 */
                Cores: number;
                /**
                 * 实例规格的内存大小，单位为MB。
                 * @example `8192`
                 */
                Memory: number;
                /**
                 * 实例规格名称。
                 * @example `ecs.hfg6.large`
                 */
                InstanceType: string;
                /**
                 * 实例规格族。
                 * @example `ecs.hfg6`
                 */
                InstanceTypeFamily: string;
                /**
                 * 实例规格族系列。
                 * @example `ecs-4`
                 */
                Generation: string;
            };
        }[];
    };
}
