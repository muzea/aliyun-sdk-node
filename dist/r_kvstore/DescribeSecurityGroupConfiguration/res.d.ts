export interface DescribeSecurityGroupConfigurationResponse {
    /**
     * 请求ID。
     * @example `981C0D6A-D9DD-466C-92DA-F29DF755****`
     */
    RequestId: string;
    Items: {
        /**
         * 安全组列表。
         */
        EcsSecurityGroupRelation: {
            /**
             * 安全组ID。
             * @example `sg-bp14p9y07ns3gwq****`
             */
            SecurityGroupId: string;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 安全组的网络类型，返回值：
             * * **classic**：经典网络。
             * * **vpc**：专有网络。
             * @example `vpc`
             */
            NetType: string;
        }[];
    };
}
