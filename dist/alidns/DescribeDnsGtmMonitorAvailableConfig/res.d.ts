export interface DescribeDnsGtmMonitorAvailableConfigResponse {
    Ipv4IspCityNodes: {
        /**
         * 公网Ipv4监控节点列表。
         */
        Ipv4IspCityNode: {
            /**
             * 城市编码。
             * @example `503`
             */
            CityCode: string;
            /**
             * 节点分组名称。
             * @example `BGP节点`
             */
            GroupName: string;
            /**
             * 运营商编码。
             * @example `465`
             */
            IspCode: string;
            /**
             * 城市展示名。
             * @example `张家口市`
             */
            CityName: string;
            /**
             * 运营商展示名。
             * @example `阿里巴巴`
             */
            IspName: string;
            /**
             * 节点分组类型，当前支持：
             * - BGP：BGP节点
             * - OVERSEAS：国际节点
             * - ISP：运营商节点
             * @example `BGP`
             */
            GroupType: string;
            /**
             * 是否默认选中。
             * @example `true`
             */
            DefaultSelected: boolean;
            Ips: {
                /**
                 * 节点ip列表。
                 */
                Ip: string[];
            };
        }[];
    };
    DomainIpv4IspCityNodes: {
        /**
         * 公网域名Ipv4监控节点列表。
         */
        DomainIpv4IspCityNode: {
            /**
             * 城市编码。
             * @example `503`
             */
            CityCode: string;
            /**
             * 节点分组名称。
             * @example `BGP节点`
             */
            GroupName: string;
            /**
             * 运营商编码。
             * @example `465`
             */
            IspCode: string;
            /**
             * 城市展示名。
             * @example `张家口市`
             */
            CityName: string;
            /**
             * 运营商展示名。
             * @example `阿里巴巴`
             */
            IspName: string;
            /**
             * 节点分组类型，当前支持：
             * - BGP：BGP节点
             * - OVERSEAS：国际节点
             * - ISP：运营商节点
             * @example `BGP`
             */
            GroupType: string;
            /**
             * 是否默认选中。
             * @example `true`
             */
            DefaultSelected: boolean;
            Ips: {
                /**
                 * 节点ip列表。
                 */
                Ip: string[];
            };
        }[];
    };
    /**
     * 唯一请求识别码。
     * @example `6856BCF6-11D6-4D7E-AC53-FD579933522B`
     */
    RequestId: string;
    DomainIpv6IspCityNodes: {
        /**
         * 公网域名Ipv6监控节点列表。
         */
        DomainIpv6IspCityNode: {
            /**
             * 城市编码。
             * @example `503`
             */
            CityCode: string;
            /**
             * 节点分组名称。
             * @example `BGP节点`
             */
            GroupName: string;
            /**
             * 运营商编码。
             * @example `465`
             */
            IspCode: string;
            /**
             * 城市展示名。
             * @example `张家口市`
             */
            CityName: string;
            /**
             * 运营商展示名。
             * @example `阿里巴巴`
             */
            IspName: string;
            /**
             * 节点分组类型，当前支持：
             * - BGP：BGP节点
             * - OVERSEAS：国际节点
             * - ISP：运营商节点
             * @example `BGP`
             */
            GroupType: string;
            /**
             * 是否默认选中。
             * @example `false`
             */
            DefaultSelected: boolean;
            Ips: {
                /**
                 * 暂不开放此返回参数。
                 */
                ip: string[];
            };
        }[];
    };
    Ipv6IspCityNodes: {
        /**
         * 公网Ipv6监控节点列表。
         */
        Ipv6IspCityNode: {
            /**
             * 城市编码。
             * @example `503`
             */
            CityCode: string;
            /**
             * 节点分组名称。
             * @example `BGP节点`
             */
            GroupName: string;
            /**
             * 运营商编码。
             * @example `465`
             */
            IspCode: string;
            /**
             * 城市展示名。
             * @example `张家口市`
             */
            CityName: string;
            /**
             * 运营商展示名。
             * @example `阿里巴巴`
             */
            IspName: string;
            /**
             * 节点分组类型，当前支持：
             * - BGP：BGP节点
             * - OVERSEAS：国际节点
             * - ISP：运营商节点
             * @example `BGP`
             */
            GroupType: string;
            /**
             * 是否默认选中。
             * @example `true`
             */
            DefaultSelected: boolean;
            Ips: {
                /**
                 * 暂不开放此返回参数。
                 */
                Ip: string[];
            };
        }[];
    };
}
