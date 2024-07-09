export interface DescribeGrantRulesToCenResponse {
    /**
     * 请求ID。
     * @example `4906B209-8613-5C19-9CC9-B7A3FFDA731C`
     */
    RequestId: string;
    GrantRules: {
        /**
         * 授权信息列表。
         */
        GrantRule: {
            /**
             * 网络实例的类型。
             * - **VPC**：专有网络实例。
             * - **VBR**：边界路由器实例。
             * - **CCN**：云连接网实例。
             * - **VPN**：IPsec连接。
             * - **ECR**：专线网关实例。
             * @example `VPC`
             */
            ChildInstanceType: string;
            /**
             * 网络实例所属地域ID。
             * @example `cn-hangzhou`
             */
            ChildInstanceRegionId: string;
            /**
             * 网络实例所属阿里云账号（主账号）ID。
             * @example `1250123456123456`
             */
            ChildInstanceOwnerId: number;
            /**
             * 网络实例ID。
             * @example `vpc-bp1rgeww9mdstuuar****`
             */
            ChildInstanceId: string;
            /**
             * 云企业网实例ID。
             * @example `cen-nye53d7p3hzyu4****`
             */
            CenId: string;
            /**
             * 网络实例的付费方。取值：
             * - **PayByCenOwner**：表示网络实例产生的转发路由器连接费、转发路由器流量处理费由云企业网实例所属的账号承担。
             * - **PayByResourceOwner**：表示网络实例产生的转发路由器连接费、转发路由器流量处理费由网络实例所属的账号承担。
             * @example `PayByCenOwner`
             */
            OrderType: string;
            /**
             * 云企业网实例所属的阿里云账号（主账号）ID。
             * @example `1210123456123456`
             */
            CenOwnerId: number;
            /**
             * 授权创建的时间。
             * 时间按照ISO8601标准表示，并使用UTC时间。格式为：YYYY-MM-DDThh:mmZ。
             * @example `2024-01-24T16:27Z`
             */
            CreateTime: number;
        }[];
    };
    /**
     * 列表条目数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * - 如果您未指定请求参数**MaxResults**的值，则表示您不需要分批次查询。返回参数**MaxResults**的值表示列表条目总数。
     * - 如果您指定了请求参数**MaxResults**的值，则表示您需要分批次查询。返回参数**MaxResults**的值表示当前查询批次下列表条目的数量。
     * @example `20`
     */
    MaxResults: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
}
