export interface ListAccelerateAreasResponse {
    /**
     * 请求ID。
     * @example `6FEA0CF3-D3B9-43E5-A304-D217037876A8`
     */
    RequestId: string;
    /**
     * 区域信息。
     */
    Areas: {
        /**
         * 区域名称。
         * @example `华北`
         */
        LocalName: string;
        /**
         * 区域ID。
         * @example `cn-huabei`
         */
        AreaId: string;
        /**
         * 地域列表信息。
         */
        RegionList: {
            /**
             * 地域名称。
             * @example `青岛`
             */
            LocalName: string;
            /**
             * 地域ID。
             * @example `cn-qingdao`
             */
            RegionId: string;
        }[];
    }[];
}
