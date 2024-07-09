export interface DescribeGtmMonitorAvailableConfigResponse {
    /**
     * 唯一请求识别码。
     * @example `6856BCF6-11D6-4D7E-AC53-FD579933522B`
     */
    RequestId: string;
    IspCityNodes: {
        /**
         * 监控节点列表。
         */
        IspCityNode: {
            /**
             * 城市编码。
             * @example `503`
             */
            CityCode: string;
            /**
             * 是否是中国内地。
             * @example `true`
             */
            Mainland: boolean;
            /**
             * 节点分组名称。
             * @example `国际节点`
             */
            GroupName: string;
            /**
             * 运营商编码
             * - GroupType为BGP或Overseas时，IspCode为非必传值，默认为465。
             * - GroupType为非BGP或Overseas时，IspCode为必传值。并与CityCode匹配使用。
             * @example `465`
             */
            IspCode: string;
            /**
             * 城市展示名。
             * @example `张家口市`
             */
            CityName: string;
            /**
             * 运营商展示名（目前仅阿里巴巴）。
             * @example `阿里巴巴`
             */
            IspName: string;
            /**
             * 节点分组类型：当前支持
             * BGP：BGP节点；
             * OVERSEAS：国际节点；
             * ISP：运营商节点。
             * @example `OVERSEAS`
             */
            GroupType: string;
            /**
             * 是否默认选中。
             * @example `true`
             */
            DefaultSelected: boolean;
        }[];
    };
}
