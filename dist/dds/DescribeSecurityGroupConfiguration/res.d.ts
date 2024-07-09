export interface DescribeSecurityGroupConfigurationResponse {
    /**
     * 请求ID。
     * @example `3C4A2494-85C4-45C5-93CF-548DB3375193`
     */
    RequestId: string;
    Items: {
        /**
         * ECS安全组信息。
         */
        RdsEcsSecurityGroupRel: {
            /**
             * ECS安全组ID。
             * @example `sg-bpxxxxxxxx`
             */
            SecurityGroupId: string;
            /**
             * ECS安全组的网络类型。返回值：
             * - **vpc**：专有网络。
             * - **classic**：经典网络。
             * @example `vpc`
             */
            NetType: string;
            /**
             * ECS安全组所属的地域。
             * @example `cn-hangzhou`
             */
            RegionId: string;
        }[];
    };
}
