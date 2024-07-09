export interface DescribeResourcePackageProductResponse {
    /**
     * 状态码。
     * @example `Success`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `Successful!`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `BBEF51A3-E933-4F40-A534-C673CBDB9C80`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 订单ID。
     * @example `72353765387`
     */
    OrderId: number;
    /**
     * 返回数据。
     */
    Data: {
        ResourcePackages: {
            /**
             * 资源包详情数组。
             */
            ResourcePackage: {
                /**
                 * 产品类型。
                 * @example `ossbag`
                 */
                ProductType: string;
                /**
                 * 资源包名称。
                 * @example `对象存储OSS资源包(包月)`
                 */
                Name: string;
                /**
                 * 产品代码。
                 * @example `ossbag`
                 */
                ProductCode: string;
                PackageTypes: {
                    /**
                     * 资源包类型。
                     */
                    PackageType: {
                        /**
                         * 资源包代码。
                         * @example `FPT_ossbag_deadlineAcc_CdnOut_common_sz`
                         */
                        Code: string;
                        /**
                         * 资源包类型名称。
                         * @example `回源流量包(华南1)`
                         */
                        Name: string;
                        Properties: {
                            /**
                             * 属性详情。
                             */
                            Property: {
                                /**
                                 * 属性名称。
                                 * @example `region`
                                 */
                                Name: string;
                                /**
                                 * 属性值。
                                 * @example `cn-shenzhen`
                                 */
                                Value: string;
                            }[];
                        };
                        Specifications: {
                            /**
                             * 规格详情。
                             */
                            Specification: {
                                /**
                                 * 规格名称。
                                 * @example `1TB`
                                 */
                                Name: string;
                                /**
                                 * 规格值。
                                 * @example `1024`
                                 */
                                Value: string;
                                AvailableDurations: {
                                    /**
                                     * 可选时间长度详情。
                                     */
                                    AvailableDuration: {
                                        /**
                                         * 时长值。
                                         * @example `6`
                                         */
                                        Value: number;
                                        /**
                                         * 时长名称。
                                         * @example `6 Month`
                                         */
                                        Name: string;
                                        /**
                                         * 资源包时长单位。取值范围：
                                         * - Month：月。
                                         * - Year：年。
                                         * 默认Month。
                                         * @example `Month`
                                         */
                                        Unit: string;
                                    }[];
                                };
                            }[];
                        };
                    }[];
                };
            }[];
        };
    };
}
