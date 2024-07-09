export interface ListVpcEndpointServiceResourcesResponse {
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `0ED8D006-F706-4D23-88ED-E11ED28DCAC0`
     */
    RequestId: string;
    /**
     * 分批次查询时每次显示的条目数。
     * @example `50`
     */
    MaxResults: number;
    /**
     * 服务资源信息集合。
     */
    Resources: {
        /**
         * 服务资源所属的VPC。
         * @example `vpc-hp356stwkxg3fn2xe****`
         */
        VpcId: string;
        /**
         * 服务资源所属的交换机。
         * @example `vsw-hp3uf6045ljdhd5zr****`
         */
        VSwitchId: string;
        /**
         * 服务资源的类型。
         * - **slb**：表示服务资源类型为传统型负载均衡CLB（Classic Load Balancer）。
         * - **alb**：表示服务资源类型为应用型负载均衡ALB（Application Load Balancer）。
         * -  **nlb**：表示服务资源类型为网络型负载均衡NLB（Network Load Balancer ）。
         * @example `slb`
         */
        ResourceType: string;
        /**
         * 服务资源所属的可用区。
         * @example `cn-huhehaote-b`
         */
        ZoneId: string;
        /**
         * 服务资源的IP地址。
         * @example `192.168.10.23`
         */
        Ip: string;
        /**
         * 服务资源ID。
         * @example `lb-hp32z1wp5peaoox2q****`
         */
        ResourceId: string;
        /**
         * 服务资源所属的地域。
         * @example `cn-huhehaote`
         */
        RegionId: string;
        /**
         * 服务资源关联的终端节点的连接数量。
         * @example `10`
         */
        RelatedEndpointCount: number;
        /**
         * 平滑迁移场景下，作为被替换的服务资源关联的终端节点的连接数量。
         * @example `10`
         */
        RelatedDeprecatedEndpointCount: number;
        /**
         * 是否允许自动分配，取值：
         * - **true**：是。
         * - **false**：否。
         * @example `false`
         */
        AutoAllocatedEnabled: boolean;
        /**
         * 终端节点服务是否支持IPv6功能。取值：
         * - **true**：是。
         * - **false**：否。
         * @example `false`
         */
        ResourceSupportIPv6: boolean;
    }[];
}
