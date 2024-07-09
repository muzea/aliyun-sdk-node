export interface DescribeAvailableResourceResponse {
    /**
     * 请求ID。
     * @example `6829735A-FF76-58C6-AECB-27CBF135A7AA`
     */
    RequestId: string;
    AvailableZones: {
        /**
         * 可用区级别的资源信息集合。
         */
        AvailableZone: {
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 可用区ID。
             * @example `cn-hangzhou-e`
             */
            ZoneId: string;
            AvailableResources: {
                /**
                 * 该可用区支持的资源信息集合。
                 */
                AvailableResource: {
                    /**
                     * 资源类型。可能值：
                     * - InstanceTypeFamily：表示实例规格族。
                     * - InstanceType：表示实例规格。
                     * @example `InstanceTypeFamily`
                     */
                    Type: string;
                    SupportedResources: {
                        /**
                         * 资源信息组成的数组。
                         */
                        SupportedResource: {
                            /**
                             * 支持的ECS实例规格信息。
                             * - 当Type为InstanceTypeFamily时，Value值为实例规格族。
                             * - 当Type为InstanceType时，Value值为实例规格。
                             * @example `ecs.c6`
                             */
                            Value: string;
                            /**
                             * 根据库存详细分类资源类别。可能值：
                             * - WithStock：库存充足。
                             * - ClosedWithStock：库存供应保障能力低，建议选用WithStock状态的实例规格。
                             * - WithoutStock：库存售罄，将会补充资源，建议选用WithStock状态的实例规格。
                             * - ClosedWithoutStock：库存售罄，且不补充资源，请选用WithStock状态的实例规格。
                             * @example `WithStock`
                             */
                            StatusCategory: string;
                        }[];
                    };
                }[];
            };
        }[];
    };
}
