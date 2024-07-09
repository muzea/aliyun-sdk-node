export interface DescribeDcdnBlockedRegionsResponse {
    /**
     * 请求ID。
     * @example `BFFCDFAD-DACC-484E-9BE6-0AF3B3A0DD23`
     */
    RequestId: string;
    InfoList: {
        /**
         * 国家地区信息。
         */
        InfoItem: {
            /**
             * 国家地区缩写。
             * @example `AE`
             */
            CountriesAndRegions: string;
            /**
             * 国家地区所属大区。
             * @example `中东`
             */
            Continent: string;
            /**
             * 国家地区名称。
             * @example `阿拉伯联合酋长国`
             */
            CountriesAndRegionsName: string;
        }[];
    };
}
