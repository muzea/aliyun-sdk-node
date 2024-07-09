export interface DescribeDBClusterAccessWhitelistResponse {
    /**
     * 请求ID。
     * @example `559E91A2-CDA3-4E9F-808B-29D738******`
     */
    RequestId: string;
    Items: {
        /**
         * 集群的IP白名单分组列表。
         */
        DBClusterIPArray: {
            /**
             * IP白名单分组属性。
             * @example `hidden`
             */
            DBClusterIPArrayAttribute: string;
            /**
             * IP白名单分组名称。
             * @example `default`
             */
            DBClusterIPArrayName: string;
            /**
             * IP白名单分组下的IP列表，最多1000个，多个IP间用英文逗号（,）隔开，支持如下两种格式：
             * - IP地址形式，例如：10.xx.xx.24。
             * - CIDR形式，例如：10.xx.xx.24/24（无类域间路由，24表示了地址中前缀的长度，范围为1~32）。
             * @example `11.***.***.***,11.***.***.***`
             */
            SecurityIps: string;
        }[];
    };
    DBClusterSecurityGroups: {
        /**
         * 集群关联的ECS安全组列表。
         */
        DBClusterSecurityGroup: {
            /**
             * ECS安全组ID。
             * @example `sg-bp**************`
             */
            SecurityGroupId: string;
            /**
             * ECS安全组名称。
             * @example `vpc-********************`
             */
            SecurityGroupName: string;
        }[];
    };
}
