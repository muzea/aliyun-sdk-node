export interface DescribeRegionsResponse {
    /**
     * 本次请求编号
     * @example `36BBBAD4-1CFB-489F-841A-8CA52EEA787E`
     */
    RequestId: string;
    Regions: {
        /**
         * 由 Region 组成的数组格式，返回区域信息
         * @example `cn-huhehaote`
         */
        Region: {
            /**
             * 区域服务接入点
             * @example `apigateway.cn-shenzhen.aliyuncs.com`
             */
            RegionEndpoint: string;
            /**
             * 区域名称
             * @example `华南1（深圳）`
             */
            LocalName: string;
            /**
             * 区域ID
             * @example `cn-shenzhen`
             */
            RegionId: string;
        }[];
    };
}
