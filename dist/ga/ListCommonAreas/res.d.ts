export interface ListCommonAreasResponse {
    /**
     * 请求ID。
     * @example `DE77A7F3-3B74-41C0-A5BC-CAFD188C28B6`
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
