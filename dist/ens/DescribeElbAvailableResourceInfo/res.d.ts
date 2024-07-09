export interface DescribeElbAvailableResourceInfoResponse {
    /**
     * 公共参数，每个请求的ID都是唯一的，可用于排查和定位问题。
     * @example `25AAD194-4A37-51CF-B1CA-1E86FDAC23A6`
     */
    RequestId: string;
    /**
     * 资源信息集合。
     */
    ElbAvailableResourceInfo: {
        /**
         * ENS的节点ID。
         * @example `cn-guangdong-10`
         */
        EnsRegionId: string;
        /**
         * 节点英文名称。
         * @example `cn-guangdong-10`
         */
        EnName: string;
        /**
         * 区域。
         * @example `SouthEast`
         */
        Area: string;
        /**
         * 所在省份。
         * @example `Shanghai`
         */
        Province: string;
        /**
         * 节点名称。
         * @example `test`
         */
        Name: string;
        /**
         * 可购买数量。
         * @example `1`
         */
        CanBuyCount: string;
        /**
         * 负载均衡实例的规格。
         */
        LoadBalancerSpec: string[];
    }[];
}
