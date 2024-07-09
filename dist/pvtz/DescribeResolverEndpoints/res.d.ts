export interface DescribeResolverEndpointsResponse {
    /**
     * 终端节点列表
     */
    Endpoints: {
        /**
         * 终端节点状态：
         * - SUCCESS: 工作正常
         * - INIT：创建中
         * - FAILED：创建失败
         * - CHANGE_INIT: 修改中
         * - CHANGE_FAILED: 修改失败
         * - EXCEPTION: 工作异常
         * @example `SUCCESS`
         */
        Status: string;
        /**
         * 出站VPC ID
         * @example `vpc-8vbl8mpum-test-vpc-id`
         */
        VpcId: string;
        /**
         * 更新时间
         * @example `2020-07-13 10:38:24`
         */
        UpdateTime: string;
        /**
         * 安全组Id
         * @example `sg-8vb3sigz86xc-test-group`
         */
        SecurityGroupId: string;
        /**
         * 创建时间
         * @example `2020-07-13 10:36:26`
         */
        CreateTime: string;
        /**
         * 出站VPC所在地域ID
         * @example `cn-zhangjiakou`
         */
        VpcRegionId: string;
        /**
         * 出站流量源IP列表
         */
        IpConfigs: {
            /**
             * 交换机的ID
             * @example `vsw-8vbmks7h-test-vswitchId`
             */
            VSwitchId: string;
            /**
             * 交换机的IPv4网段。
             * @example `172.16.0.0/24`
             */
            CidrBlock: string;
            /**
             * IPv4地址
             * @example `172.16.xx.xx`
             */
            Ip: string;
            /**
             * 交换机所属的可用区ID
             * @example `cn-zhangjiakou-a`
             */
            AzId: string;
        }[];
        /**
         * 出站VPC名称
         * @example `vpc-test-name`
         */
        VpcName: string;
        /**
         * 更新时间戳
         * @example `1594607904000`
         */
        UpdateTimestamp: number;
        /**
         * 出站VPC所在地域名称
         * @example `杭州VPC测试`
         */
        VpcRegionName: string;
        /**
         * 终端节点名称
         * @example `终端节点-test`
         */
        Name: string;
        /**
         * 终端节点ID
         * @example `hra0**`
         */
        Id: string;
        /**
         * 创建时间戳
         * @example `1594607786000`
         */
        CreateTimestamp: number;
    }[];
    /**
     * 页面大小
     * @example `2`
     */
    PageSize: number;
    /**
     * 唯一请求识别码
     * @example `83D1682B-B69A-4060-9FA8-2907C2A35600`
     */
    RequestId: string;
    /**
     * 当前页码
     * @example `1`
     */
    PageNumber: number;
    /**
     * 总页数
     * @example `1`
     */
    TotalPages: number;
    /**
     * 总个数
     * @example `1`
     */
    TotalItems: number;
}
