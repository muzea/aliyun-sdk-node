export interface ListRegionsResponse {
    /**
     * 主机ID
     * @example `easygene.cn-beijing.aliyuncs.com`
     */
    HostId: string;
    /**
     * 请求ID
     * @example `DA980AD0-158F-44F3-847D-5EAB96C0EB6B`
     */
    RequestId: string;
    /**
     * 基因云产品上线区域
     */
    Regions: {
        /**
         * 名称
         * @example `华北2-北京`
         */
        LocalName: string;
        /**
         * 访问Endpoint
         * @example `easygene.cn-beijing.aliyuncs.com`
         */
        RegionEndpoint: string;
        /**
         * 区域ID
         * @example `cn-beijing`
         */
        RegionId: string;
    }[];
}
