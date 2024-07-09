export interface DescribeResourcesModificationResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    AvailableZones: {
        /**
         * 数据中心信息AvailableZone组成的集合。
         */
        AvailableZone: {
            /**
             * 可用区ID。
             * @example `cn-hangzhou-e`
             */
            ZoneId: string;
            /**
             * 资源状态。可能值：
             *
             * - Available：资源充足。
             * - SoldOut：资源已售罄。
             *
             * @example `Available`
             */
            Status: string;
            /**
             * 根据库存详细分类资源类别。可能值：
             * - WithStock：库存充足。
             * - ClosedWithStock：库存接近水位低线。
             * - WithoutStock：库存告罄。
             * @example `WithStock`
             */
            StatusCategory: string;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            AvailableResources: {
                /**
                 * 可供创建的具体资源组成的数组。
                 */
                AvailableResource: {
                    /**
                     * 资源类型。可能值：
                     *
                     * - Zone：可用区。
                     * - IoOptimized：I/O优化。
                     * - InstanceType：实例规格。
                     * - SystemDisk：系统盘类型。
                     * - DataDisk：数据盘类型。
                     * - Network：网络类型。
                     *
                     * @example `InstanceType`
                     */
                    Type: string;
                    SupportedResources: {
                        /**
                         * 支持的可供创建的具体资源组成的数组。
                         */
                        SupportedResource: {
                            /**
                             * 资源状态。可能值：
                             *
                             * - Available：资源充足。
                             * - SoldOut：资源已售罄。
                             *
                             * @example `Available`
                             */
                            Status: string;
                            /**
                             * 资源值。
                             * @example `ecs.g5.large`
                             */
                            Value: string;
                            /**
                             * 云盘容量范围的最大值。
                             * 仅当入参DestinationResource取值为SystemDisk时该参数才生效。
                             * @example `2048`
                             */
                            Max: number;
                            /**
                             * 云盘容量的单位。
                             * 仅当入参DestinationResource取值为SystemDisk时该参数才生效。
                             * @example `GiB`
                             */
                            Unit: string;
                            /**
                             * 根据库存详细分类资源类别。可能值：
                             * - WithStock：库存充足。
                             * - ClosedWithStock：库存接近水位低线。
                             * - WithoutStock：库存告罄。
                             * @example `WithStock`
                             */
                            StatusCategory: string;
                            /**
                             * 云盘容量范围的最小值。
                             * 仅当入参DestinationResource取值为SystemDisk时该参数才生效。
                             * @example `20`
                             */
                            Min: number;
                        }[];
                    };
                    ConditionSupportedResources: {
                        /**
                         * 有条件支持的可供创建的具体资源列表。满足条件后，可以将当前资源变更到列表中的资源。
                         */
                        ConditionSupportedResource: {
                            Conditions: {
                                /**
                                 * 条件列表。
                                 */
                                Condition: {
                                    /**
                                     * 条件名。目前可选值：
                                     * DiskCategory：盘类型不满足。
                                     * @example `DiskCategory`
                                     */
                                    Key: string;
                                }[];
                            };
                            /**
                             * 资源的库存状态。可能值：
                             * - Available：资源充足。
                             * - SoldOut：资源已售罄。
                             * @example `Available`
                             */
                            Status: string;
                            /**
                             * 资源值。
                             * @example `ecs.g5.large`
                             */
                            Value: string;
                            /**
                             * 云盘容量范围的最大值。
                             * 仅当入参DestinationResource取值为SystemDisk时该参数才生效。
                             * @example `2048`
                             */
                            Max: number;
                            /**
                             * 云盘容量的单位。
                             * 仅当入参DestinationResource取值为SystemDisk时该参数才生效。
                             * @example `GiB`
                             */
                            Unit: string;
                            /**
                             * 根据库存详细分类资源类别。可能值：
                             * - WithStock：库存充足。
                             * - ClosedWithStock：库存接近水位低线。
                             * - WithoutStock：库存告罄。
                             * @example `WithStock`
                             */
                            StatusCategory: string;
                            /**
                             * 云盘容量范围的最小值。
                             * 仅当入参DestinationResource取值为SystemDisk时该参数才生效。
                             * @example `20`
                             */
                            Min: number;
                        }[];
                    };
                }[];
            };
        }[];
    };
}
