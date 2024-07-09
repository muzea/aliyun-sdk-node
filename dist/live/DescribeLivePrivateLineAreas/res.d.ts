export interface DescribeLivePrivateLineAreasResponse {
    LiveAreasList: {
        /**
         * 区域详情列表。
         */
        LiveArea: {
            /**
             * 区域类型，取值：
             * - domestic：中国大陆。
             * - overseas：除中国大陆以外的国家和地区。
             * @example `domestic`
             */
            RegionType: string;
            Regions: {
                /**
                 * 区域列表。
                 */
                Region: {
                    /**
                     * 区域名。
                     * @example `深圳`
                     */
                    LocalName: string;
                    /**
                     * 区域ID。
                     * @example `cn-shenzhen`
                     */
                    RegionId: string;
                }[];
            };
        }[];
    };
    /**
     * 请求ID。
     * @example `C4865B85-664B-19D3-BB16-C62FB83C8226`
     */
    RequestId: string;
}
