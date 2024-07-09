export interface ListCloudGtmMonitorNodesResponse {
    /**
     * 唯一请求识别码。
     * @example `536E9CAD-DB30-4647-AC87-AA5CC38C5382`
     */
    RequestId: string;
    Ipv4IspCityNodes: {
        /**
         * 公网IPv4监控节点列表。
         */
        Ipv4IspCityNode: {
            /**
             * 国家编码。
             * @example `001`
             */
            CountryCode: string;
            /**
             * 国家名称。
             * @example `中国`
             */
            CountryName: string;
            /**
             * 城市编码。
             * @example `503`
             */
            CityCode: string;
            /**
             * 城市名称。
             * @example `张家口市`
             */
            CityName: string;
            /**
             * 监控节点分组类型，当前支持：
             * - BGP：BGP节点
             * - OVERSEAS：国际节点
             * - ISP：运营商节点
             * @example `BGP`
             */
            GroupType: string;
            /**
             * 监控探点分组名称。
             * @example `BGP节点`
             */
            GroupName: string;
            /**
             * 运营商编码。
             * @example `465`
             */
            IspCode: string;
            /**
             * 运营商名称。
             * @example `阿里巴巴`
             */
            IspName: string;
            /**
             * 监控节点是否默认选中：
             * - true：默认选中
             * - false：默认不选中
             * @example `true`
             */
            DefaultSelected: boolean;
            /**
             * 探测节点的唯一标识 ID。
             * @example `node-ewze1bysndy4gf**j8`
             */
            NodeId: string;
            Ips: {
                /**
                 * 节点IP列表。
                 */
                Ip: string[];
            };
        }[];
    };
    Ipv6IspCityNodes: {
        /**
         * 公网IPv6监控节点列表。
         */
        Ipv6IspCityNode: {
            /**
             * 国家编码。
             * @example `001`
             */
            CountryCode: string;
            /**
             * 国家名称。
             * @example `中国`
             */
            CountryName: string;
            /**
             * 城市编码。
             * @example `503`
             */
            CityCode: string;
            /**
             * 城市名称。
             * @example `张家口市`
             */
            CityName: string;
            /**
             * 监控节点分组类型，当前支持：
             * - BGP：BGP节点
             * - OVERSEAS：国际节点
             * - ISP：运营商节点
             * @example `BGP`
             */
            GroupType: string;
            /**
             * 监控探点分组名称。
             * @example `BGP节点`
             */
            GroupName: string;
            /**
             * 运营商编码。
             * @example `465`
             */
            IspCode: string;
            /**
             * 运营商名称。
             * @example `阿里巴巴`
             */
            IspName: string;
            /**
             * 监控节点是否默认选中：
             * - true：默认选中
             * - false：默认不选中
             * @example `true`
             */
            DefaultSelected: boolean;
            /**
             * 探测节点的唯一标识 ID。
             * @example `node-ewze1bysndy4gf**j8
            `
             */
            NodeId: string;
            Ips: {
                /**
                 * 节点IP列表。
                 */
                Ip: string[];
            };
        }[];
    };
}
