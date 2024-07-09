export interface DescribeDcdnRegionAndIspResponse {
    /**
     * 请求ID。
     * @example `2387C335-932C-4E1E-862C-1C4363B6DE72`
     */
    RequestId: string;
    Regions: {
        /**
         * 地域列表。
         */
        Region: {
            /**
             * 地域英文名称。
             * @example `liaoning`
             */
            NameEn: string;
            /**
             * 地域中文名称。
             * @example `辽宁省`
             */
            NameZh: string;
        }[];
    };
    Isps: {
        /**
         * 运营商列表。
         */
        Isp: {
            /**
             * 运营商英文名称。
             * @example `unicom`
             */
            NameEn: string;
            /**
             * 运营商中文名称。
             * @example `联通`
             */
            NameZh: string;
        }[];
    };
}
