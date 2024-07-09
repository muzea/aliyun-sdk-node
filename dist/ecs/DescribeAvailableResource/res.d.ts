export interface DescribeAvailableResourceResponse {
    /**
     * 请求ID。
     * @example `0041D94C-FB92-4C49-B115-259DA1C*****`
     */
    RequestId: string;
    AvailableZones: {
        /**
         * 库存信息组成的集合。
         */
        AvailableZone: {
            /**
             * 可用区ID。
             * @example `cn-hangzhou-e`
             */
            ZoneId: string;
            /**
             * 可用区的状态描述。可能值：
             *
             * - Available：资源充足
             * - SoldOut：资源已售罄
             *
             * @example `Available`
             */
            Status: string;
            /**
             * 根据可用区下库存情况对可用区状态进行详细描述。可能值：
             * - WithStock：库存充足。
             * - ClosedWithStock：库存供应保障能力低，建议选用WithStock状态的产品规格。
             * - WithoutStock：库存售罄，将会补充资源，建议选用WithStock状态的产品规格。
             * - ClosedWithoutStock：库存售罄，且不补充资源，请选用WithStock状态的产品规格。
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
                     * - SystemDisk：系统盘。
                     * - DataDisk：数据盘。
                     * - Network：网络类型。
                     * - ddh：专有宿主机。
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
                             * 具体资源类型的状态描述。可能值：
                             *
                             * - Available：资源充足。
                             * - SoldOut：资源已售罄。
                             *
                             * @example `Available`
                             */
                            Status: string;
                            /**
                             * 资源值。
                             * @example `ecs.d1ne.xlarge`
                             */
                            Value: string;
                            /**
                             * 云盘容量范围的最大值。
                             * 仅当入参DestinationResource取值为SystemDisk或DataDisk时该参数才生效。
                             * @example `2048`
                             */
                            Max: number;
                            /**
                             * 云盘容量的单位。
                             * 仅当入参DestinationResource取值为SystemDisk或DataDisk时该参数才生效。
                             * @example `GiB`
                             */
                            Unit: string;
                            /**
                             * 根据库存情况对资源状态进行详细描述。可能值：
                             * - WithStock：库存充足。
                             * - ClosedWithStock：库存供应保障能力低，建议选用WithStock状态的产品规格。
                             * - WithoutStock：库存售罄，将会补充资源，建议选用WithStock状态的产品规格。
                             * - ClosedWithoutStock：库存售罄，且不补充资源，请选用WithStock状态的产品规格。
                             * @example `WithStock`
                             */
                            StatusCategory: string;
                            /**
                             * 云盘容量范围的最小值。
                             * 仅当入参DestinationResource取值为SystemDisk或DataDisk时该参数才生效。
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
