export interface DescribeSecurityGroupConfigurationResponse {
    /**
     * 实例ID。
     * @example `rm-uf6wjk****`
     */
    DBInstanceName: string;
    /**
     * 请求ID。
     * @example `87BDAE8C-ACB0-4A26-BBCC-7D1DD31D630D`
     */
    RequestId: string;
    Items: {
        /**
         * 关联的安全组信息列表。
         */
        EcsSecurityGroupRelation: {
            /**
             * ECS安全组的网络类型。返回值：
             * * **Classic**：经典网络。
             * * **VPC**：专有网络。
             * @example `VPC`
             */
            NetworkType: string;
            /**
             * ECS安全组ID。
             * @example `sg-****`
             */
            SecurityGroupId: string;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 安全组名称。
             * @example `security-group-emraccess`
             */
            SecurityGroupName: string;
        }[];
    };
}
