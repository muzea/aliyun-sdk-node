export interface ListAvailableAccelerateAreasResponse {
    /**
     * 请求ID。
     * @example `A9B4E54C-9CCD-4002-91A9-D38C6C209192`
     */
    RequestId: string;
    /**
     * 区域信息列表。
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
         * 地域信息列表。
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
            /**
             * 加速地域公网线路类型。
             * - **BGP**（默认值）：BGP（多线）线路。
             * - **BGP_PRO**：BGP（多线）\_精品线路。
             */
            IspTypeList: string[];
            /**
             * 是否为中国大陆。取值：
             * - **true**：是中国大陆。
             * - **false**：不是中国大陆。
             * @example `true`
             */
            ChinaMainland: boolean;
            /**
             * 是否支持IPv6，取值：
             * - **true**：支持。
             * - **false**：不支持。
             * @example `true`
             */
            SupportIpv6: boolean;
            /**
             * 是否支持多可用区，取值：
             * - **true**：支持。
             * - **false**：不支持。
             * @example `true`
             */
            MultiAz: boolean;
        }[];
    }[];
}
