export interface DescribeDnsGtmAddrAttributeInfoResponse {
    /**
     * 唯一请求识别码。
     * @example `6856BCF6-11D6-4D7E-AC53-FD579933522B`
     */
    RequestId: string;
    Addr: {
        /**
         * 地址池地址。
         */
        Addr: {
            /**
             * 地址归属信息。
             */
            AttributeInfo: {
                /**
                 * 父线路的code。
                 * @example `telecom`
                 */
                FatherCode: string;
                /**
                 * 地址归属区域分组名称。
                 * @example `Global`
                 */
                GroupName: string;
                /**
                 * 归属线路code。
                 * @example `default`
                 */
                LineCode: string;
                /**
                 * 地址归属线路名称。
                 * @example `Global`
                 */
                LineName: string;
                /**
                 * 地址归属区域分组code。
                 * @example `DEFAULT`
                 */
                GroupCode: string;
            };
            /**
             * 地址。
             * @example `1.1.XX.XX`
             */
            Addr: string;
        }[];
    };
}
