export interface DescribeSiteMonitorISPCityListResponse {
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `B35D7D84-547B-4E61-B909-48A1F8A0C756`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: string;
    IspCityList: {
        /**
         * 探测点列表。
         */
        IspCity: {
            /**
             * 城市名称（英文）。
             * @example `Guiyang`
             */
            CityName.en: string;
            /**
             * IPv4探针数量。
             * @example `4`
             */
            IPV4ProbeCount: string;
            /**
             * 城市ID。
             * @example `4`
             */
            City: string;
            /**
             * 运营商ID。
             * @example `232`
             */
            Isp: string;
            /**
             * 城市名称（简体中文）。
             * > 该参数仅适用于中国站。
             * @example `贵阳市`
             */
            CityName.zh_CN: string;
            /**
             * 省份（简体中文）。
             * > 该参数仅适用于中国站。
             * @example `贵州省`
             */
            Region.zh_CN: string;
            /**
             * 运营商名称（简体中文）。
             * > 该参数仅适用于中国站。
             * @example `联通`
             */
            IspName.zh_CN: string;
            /**
             * 国家（英文）。
             * @example `China`
             */
            Country.en: string;
            /**
             * IPv6探针数量。
             * @example `3`
             */
            IPV6ProbeCount: string;
            /**
             * 省份代码。
             * @example `264`
             */
            Region: string;
            /**
             * 国家代码。
             * @example `629`
             */
            Country: string;
            /**
             * 运营商名称（英文）。
             * @example `China-Unicom`
             */
            IspName.en: string;
            /**
             * 省份（英文）。
             * @example `Guizhou`
             */
            Region.en: string;
            /**
             * 国家（简体中文）。
             * > 该参数仅适用于中国站。
             * @example `中国`
             */
            Country.zh_CN: string;
            /**
             * 区域（简体中文）。
             * > 该参数仅适用于中国站。
             * @example `西南`
             */
            Area.zh_CN: string;
            /**
             * 区域（汉语拼音）。
             * @example `XiNan`
             */
            Area.en: string;
            IPPool: {
                /**
                 * IP地址池。
                 */
                IPPool: string[];
            };
        }[];
    };
}
