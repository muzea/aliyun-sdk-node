export interface AddUsersRequest {
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
         * 新增用户的密码。长度为8~30个字符，必须同时包含以下四项中的三项：
         * - 大写英文字母
         * - 小写英文字母
         * - 数字
         * - 特殊字符：`()~!@#$%^&*-_+=|{}[]:;'/<>,.?/`
         * > 建议使用HTTPS协议调用API以避免可能发生的密码泄露。
         * @example `1@a2****`
         */
        Password: string;
        /**
         * 新增用户的用户名。长度为6~30个字符，必须以英文字母开头，可以包含数字、特殊字符（.）。
         * @example `user1`
         */
        Name: string;
        /**
         * 新增用户的用户组。取值范围：
         * - users：普通权限组，适用于只有提交、调试作业需求的普通用户。
         * - wheel：sudo权限组，适用于需要管理集群的管理员，除提交、调试作业外，还可以执行sudo命令进行安装软件、重启节点等操作。
         * @example `users`
         */
        Group: string;
    }[];
    /**
     * 是否采用异步消息链路新增用户。
     * 默认值：false。
     * @example `false`
     */
    "Async"?: boolean;
}
