export interface DescribeEnsNetSaleDistrictResponse {
    /**
     * 业务码，成功返回0。
     * @example `0`
     */
    Code: number;
    EnsNetDistricts: {
        /**
         * 地域运营商信息。
         */
        EnsNetDistrict: {
            /**
             * 运营商信息。
             * @example `{                         "count":2,                         "name":"电信",                         "code":"telecom",                         "country":"cn"                     }`
             */
            EnsRegionIdCount: string;
            /**
             * 实例信息。
             * @example `{                         "count":2,                         "code":"multiCarrier"                     }`
             */
            InstanceCount: string;
            /**
             * 地域代码。
             * @example `100101`
             */
            NetDistrictCode: string;
            /**
             * 地域英文名。
             * @example `northEast`
             */
            NetDistrictEnName: string;
            /**
             * 地域上级代码。
             * @example `100000`
             */
            NetDistrictFatherCode: string;
            /**
             * 地域级别。取值：
             * - **Big**：大区。
             * - **Middle**：省份。
             * - **Small**：城市。
             * @example `Big`
             */
            NetDistrictLevel: string;
            /**
             * 地域中文名称。
             * @example `东北`
             */
            NetDistrictName: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `1707B55C-A12F-43EF-BC66-14FFDB9253C3`
     */
    RequestId: string;
}
