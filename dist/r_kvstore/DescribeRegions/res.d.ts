export interface DescribeRegionsResponse {
    /**
     * 请求ID。
     * @example `AD425AD3-CC7B-4EE2-A5CB-2F61BA73****`
     */
    RequestId: string;
    RegionIds: {
        /**
         * **RegionIds**为对象
         */
        KVStoreRegion: {
            /**
             * 地域的Endpoint。
             * @example `r-kvstore.aliyuncs.com`
             */
            RegionEndpoint: string;
            /**
             * 地域名称。
             * @example `华东1（杭州）`
             */
            LocalName: string;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 可用区ID。
             * @example `cn-hangzhou-h`
             */
            ZoneIds: string;
            ZoneIdList: {
                /**
                 * 可用区ID列表。
                 */
                ZoneId: string[];
            };
        }[];
    };
}
