export interface DescribeDcdnWafGeoInfoResponse {
    /**
     * 请求ID。
     * @example `66A98669-CC6E-4F3E-80A6-3014697B11AE`
     */
    RequestId: string;
    /**
     * 国家地区信息分类。
     */
    Content: {
        /**
         * 区域类型。
         * - CN：中国境内。
         * - Other：中国境外。
         * @example `CN`
         */
        Type: string;
        /**
         * 国家地区信息。
         */
        Continents: {
            /**
             * 国家地区所属大区。
             * @example `中国境内`
             */
            Name: string;
            /**
             * 地区信息。
             */
            Regions: {
                /**
                 * 国家地区名称。
                 * @example `北京市`
                 */
                Name: string;
                /**
                 * 国家地区代码值。
                 * @example `110000`
                 */
                Value: string;
            }[];
        }[];
    }[];
}
