export interface DeleteUsersRequest {
    /**
     * 集群ID。
     * 您可以通过调用[ListClusters](~~87116~~)获取集群ID。
     * @example `ehpc-hz-FYUr32****`
     */
    "ClusterId": string;
    /**
     * 用户信息。
     */
    "User": {
        /**
         * 第N个要删除的用户名。N的取值范围：1~100
         * 您可以通过调用[ListUsers](~~188572~~)获取该集群中的用户名。
         * @example `user1`
         */
        Name: string;
    }[];
    /**
     * 采用异步消息链路删除用户。
     * 默认值：false。
     * @example `false`
     */
    "Async"?: boolean;
}
