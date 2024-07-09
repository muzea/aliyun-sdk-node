export interface ModifySecurityGroupConfigurationResponse {
    /**
     * 实例ID。
     * @example `rm-uf6wjk5****`
     */
    DBInstanceName: string;
    /**
     * 请求ID。
     * @example `8585861B-8F0D-4D17-9460-C42255EB10C0`
     */
    RequestId: string;
    Items: {
        /**
         * 关联的安全组信息列表。
         */
        EcsSecurityGroupRelation: {
            /**
             * ECS安全组的网络类型。取值：
             * * **Classic**：经典网络
             * * **VPC**：专有网络
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
        }[];
    };
}
