export interface DescribeDTCSecurityIpHostsForSQLServerResponse {
    /**
     * 实例ID。
     * @example `rm-uf6wjk5****`
     */
    DBInstanceId: string;
    /**
     * 请求ID。
     * @example `2CA62A70-2203-45C6-8E90-8971D5ACC0C2`
     */
    RequestId: string;
    /**
     * 分布式事务白名单条目数。
     * @example `1`
     */
    IpHostPairNum: string;
    Items: {
        /**
         * 分布式事务白名单分组列表。
         */
        WhiteListGroups: {
            /**
             * ECS实例的IP地址和Windows系统的计算机名。格式：`ip,hostname`。多个实例之间以英文分号（;）隔开。
             * @example `192.168.XX.XX,k3ecstest`
             */
            SecurityIpHosts: string;
            /**
             * 分布式事务白名单分组名称。
             * @example `test1`
             */
            WhitelistGroupName: string;
        }[];
    };
}
