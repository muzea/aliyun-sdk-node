export interface DescribeDomainResolveResponse {
    /**
     * 结果的请求ID。
     * @example `CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D`
     */
    RequestId: string;
    /**
     * 域名解析结果。
     */
    ResolveResult: {
        /**
         * 域名解析结果，多个IP地址用半角逗号（,）分隔。
         * @example `11.1.X.X,12.1.X.X`
         */
        IpAddrs: string;
        /**
         * 解析时间戳。单位：秒。
         * @example `1579091739`
         */
        UpdateTime: number;
    };
}
