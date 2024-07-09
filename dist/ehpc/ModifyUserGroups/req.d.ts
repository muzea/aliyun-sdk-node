export interface ModifyUserGroupsRequest {
    /**
     * 集群ID。
     * 您可以通过调用[ListClusters](~~87116~~)获取集群ID。
     * @example `ehpc-hz-FYUr32****`
     */
    "ClusterId": string;
    /**
     * 用户信息。可以传入1~100个用户信息。
     */
    "User": {
        /**
         * 要修改权限的用户名。
         * 您可以通过调用[ListUsers](~~188572~~)获取该集群中的用户名。
         * @example `user11`
         */
        Name: string;
        /**
         * 需要修改的用户组。取值范围：
         * - users：普通权限组，适用于只有提交、调试作业需求的普通用户。
         * - wheel：sudo权限组，适用于需要管理集群的管理员，除提交、调试作业外，还可以执行sudo命令进行安装软件、重启节点等操作。
         * @example `users`
         */
        Group: string;
    }[];
    /**
     * 是否采用异步消息链路修改用户组。
     * 默认值：false。
     * @example `false`
     */
    "Async"?: boolean;
}
