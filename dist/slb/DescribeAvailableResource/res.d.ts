export interface DescribeAvailableResourceResponse {
    /**
     * 请求ID。
     * @example `173B0EEA-22ED-4EE2-91F9-3A1CDDFFBBBA`
     */
    RequestId: string;
    AvailableResources: {
        /**
         * 可用区及支持的资源列表。
         */
        AvailableResource: {
            /**
             * 备可用区。
             * @example `cn-shanghai-b`
             */
            SlaveZoneId: string;
            /**
             * 主可用区。
             * @example `cn-shanghai-a`
             */
            MasterZoneId: string;
            SupportResources: {
                /**
                 * 支持的资源。
                 */
                SupportResource: {
                    /**
                     * 网络类型。
                     * 取值：
                     * - **vpc**：专有网络的私网负载均衡实例。
                     * - **classic_internet**：公网负载均衡实例。
                     * - **classic_intranet**：经典网络的私网负载均衡实例。
                     * @example `vpc`
                     */
                    AddressType: string;
                    /**
                     * IP地址类型。
                     * 取值：
                     * - **ipv4**
                     * - **ipv6**
                     * @example `ipv4`
                     */
                    AddressIPVersion: string;
                }[];
            };
        }[];
    };
}
