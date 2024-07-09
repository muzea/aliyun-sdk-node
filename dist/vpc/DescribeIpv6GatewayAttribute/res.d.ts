export interface DescribeIpv6GatewayAttributeResponse {
    /**
     * IPv6网关所在的VPC ID。
     * @example `vpc-123sedrfswd23****`
     */
    VpcId: string;
    /**
     * IPv6网关的状态。取值：
     * - **Pending**：配置中。
     * - **Available**：可用。
     * @example `Available`
     */
    Status: string;
    /**
     * IPv6网关的创建时间。
     * @example `2018-12-05T09:21:35Z`
     */
    CreationTime: string;
    /**
     * IPv6网关所在的地域ID。
     * @example `cn-huhehaote`
     */
    RegionId: string;
    /**
     * IPv6网关的计费方式。
     * @example `PostPaid`
     */
    InstanceChargeType: string;
    /**
     * 请求ID。
     * @example `0ED8D006-F706-4D23-88ED-E11ED28DCAC`
     */
    RequestId: string;
    /**
     * IPv6网关的实例ID。
     * @example `ipv6gw-hp3y0l3ln89j8cdvf****`
     */
    Ipv6GatewayId: string;
    /**
     * IPv6网关的描述信息。
     * @example `test`
     */
    Description: string;
    /**
     * IPv6网关的过期时间。
     * @example `2019-1-05T09:21:35Z`
     */
    ExpiredTime: string;
    /**
     * IPv6网关的状态，取值：
     * - **Normal**：正常。
     * - **FinancialLocked**：欠费锁定。
     * - **SecurityLocked**：安全锁定。
     * @example `Normal`
     */
    BusinessStatus: string;
    /**
     * IPv6网关的名称。
     * @example `test`
     */
    Name: string;
    /**
     * 资源组ID。
     * @example `rg-acfmxazb4ph6aiy****`
     */
    ResourceGroupId: string;
    /**
     * IPv6网关绑定的网关路由表ID。
     * > 仅绑定了网关路由表的IPv6网关显示此参数。
     * @example `vtb-5ts0ohchwkp3dydt2****`
     */
    GatewayRouteTableId: string;
    Tags: {
        /**
         * 标签列表信息。
         */
        Tag: {
            /**
             * 标签键。最多支持输入20个标签键。一旦传入该值，则不允许为空字符串。
             * 一个标签键最多支持128个字符，必须以字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-），不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
             * @example `FinanceDept`
             */
            Key: string;
            /**
             * 标签值。最多支持输入20个标签值。一旦传入该值，可以为空字符串。
             * 一个标签值最多支持128个字符，必须以字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-），不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
             * @example `FinanceJoshua`
             */
            Value: string;
        }[];
    };
}
