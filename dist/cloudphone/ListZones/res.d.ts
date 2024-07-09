export interface ListZonesResponse {
    /**
     * 请求ID
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    Zones: {
        /**
         * 当前地域支持的可用区列表
         */
        Zone: {
            /**
             * 可用区
             * @example `cn-hangzhou-i`
             */
            ZoneId: string;
        }[];
    };
}
