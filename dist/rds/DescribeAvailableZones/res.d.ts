export interface DescribeAvailableZonesResponse {
    /**
     * 请求ID。
     * @example `4256E149-C3C4-4FA7-BDEA-13CA415E8763`
     */
    RequestId: string;
    /**
     * RDS可用区资源列表。
     */
    AvailableZones: {
        /**
         * 可用区ID。
         * @example `cn-hangzhou-e`
         */
        ZoneId: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 支持售卖的数据库类型列表。
         */
        SupportedEngines: {
            /**
             * 数据库类型。
             * @example `MySQL`
             */
            Engine: string;
            /**
             * 支持售卖的数据库版本列表。
             */
            SupportedEngineVersions: {
                /**
                 * 数据库版本。
                 * @example `8.0`
                 */
                Version: string;
                /**
                 * 支持售卖的数据库系列列表。
                 */
                SupportedCategorys: {
                    /**
                     * 实例系列。
                     * @example `HighAvailability`
                     */
                    Category: string;
                    /**
                     * 支持售卖的存储类型列表。
                     */
                    SupportedStorageTypes: {
                        /**
                         * 实例存储类型。
                         * @example `local_ssd`
                         */
                        StorageType: string;
                    }[];
                }[];
            }[];
        }[];
    }[];
}
