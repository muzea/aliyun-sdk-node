export interface DescribeClustersResponse {
    /**
     * 每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `7FCC0CD3-53C2-508E-9E1C-39BF14F0E75A`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 集群总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 集群信息列表。
     */
    Clusters: {
        /**
         * VPC ID。
         * @example `vpc-bp1vi54o1on2sijpm****`
         */
        VpcId: string;
        /**
         * 集群状态。可能值：
         * * creating
         * * starting
         * * running
         * * deleted
         * * indebt
         * @example `running`
         */
        Status: string;
        /**
         * 与集群关联的NAT网关的ID。
         * > 当集群没有与NAT网关关联时，此值为空。
         * @example `ngw-uf63l0kkf73ieyf9k****`
         */
        NatId: string;
        /**
         * 集群中的实例个数。
         * @example `1`
         */
        InstanceCount: number;
        /**
         * 创建时间。
         * @example `2020-09-17T02:02:25Z`
         */
        CreateTime: string;
        /**
         * 与集群关联的NAT网关所使用的弹性公网IP。
         * > 当集群没有与NAT网关关联时，此值为空。
         * @example `192.168.XX.XX`
         */
        NatEip: string;
        /**
         * 安全组ID。
         * @example `sg-bp18ny7dvho4g0s7****`
         */
        SecurityGroup: string;
        /**
         * 集群名称。
         * @example `cluster-xxx`
         */
        Name: string;
        /**
         * * gws.s1.standard 集群：返回空值。
         * * gws.s1.advanced 集群：关联用户AD域之后，此值对应已关联的用户AD域，例如：example.com。取消关联后，此值为空。
         * @example `example.com`
         */
        DomainName: string;
        /**
         * 集群ID。
         * @example `gws-rhzlyl5zx3ua****`
         */
        ClusterId: string;
    }[];
}
