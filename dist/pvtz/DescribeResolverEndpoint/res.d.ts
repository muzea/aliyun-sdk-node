export interface DescribeResolverEndpointResponse {
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
     * 唯一请求识别码
     * @example `45020ED9-6319-4CA7-9475-6E8D6446E84F`
     */
    RequestId: string;
    /**
     * 安全组ID
     * @example `sg-8vb3sigz86xc-group-test`
     */
    SecurityGroupId: string;
    /**
     * 创建时间
     * @example `2020-07-13 10:45:56`
     */
    CreateTime: string;
    /**
     * 终端节点名称
     * @example `终端节点-test`
     */
    Name: string;
    /**
     * 出站VPC所在地域名称
     * @example `华北`
     */
    VpcRegionName: string;
    /**
     * 出站VPC ID
     * @example `vpc-8vbl8mpum-vpc-id`
     */
    VpcId: string;
    /**
     * 更新时间
     * @example `2020-07-13 10:48:39`
     */
    UpdateTime: string;
    /**
     * 出站VPC所在地域ID
     * @example `cn-hangzhou`
     */
    VpcRegionId: string;
    /**
     * 出站VPC名称
     * @example `vpc-name-test`
     */
    VpcName: string;
    /**
     * 出站流量源IP配置列表
     */
    IpConfigs: {
        /**
         * 交换机的ID
         * @example `vsw-8vbmks7hzrmk-vswitch-id`
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
         * @example `cn-hangzhou-a`
         */
        AzId: string;
    }[];
    /**
     * 更新时间戳
     * @example `1594608519000`
     */
    UpdateTimestamp: number;
    /**
     * 终端节点ID
     * @example `hra0**`
     */
    Id: string;
    /**
     * 创建时间戳
     * @example `1594608356000`
     */
    CreateTimestamp: number;
}
