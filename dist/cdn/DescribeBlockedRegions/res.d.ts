export interface DescribeBlockedRegionsResponse {
    /**
     * 请求ID。
     * @example `BFFCDFAD-DACC-484E-9BE6-0AF3B3A0DD23`
     */
    RequestId: string;
    InfoList: {
        /**
         * 信息列表。
         */
        InfoItem: {
            /**
             * 国家地区缩写。
             * @example `AF`
             */
            CountriesAndRegions: string;
            /**
             * 国家地区所属大区。
             * @example `亚洲`
             */
            Continent: string;
            /**
             * 国家地区名称。
             * @example `阿富汗`
             */
            CountriesAndRegionsName: string;
        }[];
    };
}
