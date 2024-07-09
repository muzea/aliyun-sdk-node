export interface DescribeDnsGtmAccessStrategyAvailableConfigResponse {
    SelectedDomainLines: {
        /**
         * 主地址池集合已选择域名区域列表。
         */
        SelectedDomainLine: string[];
    };
    DomainAddrPools: {
        /**
         * 域名类型可用地址池列表。
         */
        DomainAddrPool: {
            /**
             * 地址池名称。
             * @example `testpool`
             */
            Name: string;
            /**
             * 地址数量。
             * @example `1`
             */
            AddrCount: number;
            /**
             * 地址池id。
             * @example `pool1`
             */
            Id: string;
        }[];
    };
    Ipv4AddrPools: {
        /**
         * Ipv4类型可用地址池列表。
         */
        Ipv4AddrPool: {
            /**
             * 地址池名称。
             * @example `testpool`
             */
            Name: string;
            /**
             * 地址数量。
             * @example `1`
             */
            AddrCount: number;
            /**
             * 地址池id。
             * @example `pool1`
             */
            Id: string;
        }[];
    };
    /**
     * 唯一请求识别码。
     * @example `C2851BA9-CE56-49AF-8D12-4FC6A49EE688`
     */
    RequestId: string;
    SelectedIpv4Lines: {
        /**
         * 主地址池集合已选择Ipv4区域列表。
         */
        SelectedIpv4Line: string[];
    };
    Ipv6AddrPools: {
        /**
         * Ipv6类型可用地址池列表。
         */
        Ipv6AddrPool: {
            /**
             * 地址池名称。
             * @example `testpool`
             */
            Name: string;
            /**
             * 地址数量。
             * @example `1`
             */
            AddrCount: number;
            /**
             * 地址池id。
             * @example `pool1`
             */
            Id: string;
        }[];
    };
    /**
     * 建议设置全局线路。
     * @example `true`
     */
    SuggestSetDefaultLine: boolean;
    SelectedIpv6Lines: {
        /**
         * 主地址池集合已选择Ipv6区域列表。
         */
        SelectedIpv6Line: string[];
    };
    Lines: {
        /**
         * 解析请求来源列表。
         */
        Line: {
            /**
             * 父线路的code，如果没有则为空。
             * @example `telecom`
             */
            FatherCode: string;
            /**
             * 解析请求来源分组名称。
             * @example `Global`
             */
            GroupName: string;
            /**
             * 解析请求来源编码。
             * @example `default`
             */
            LineCode: string;
            /**
             * 解析请求来源名称。
             * @example `Global`
             */
            LineName: string;
            /**
             * 解析请求来源分组编号。
             * @example `DEFAULT`
             */
            GroupCode: string;
        }[];
    };
}
