export interface ModifyUserPasswordsRequest {
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
         * 用户的新密码。长度为8~30个字符，必须同时包含一下四项中的三项：
         * - 大写英文字母
         * - 小写英文字母
         * - 数字
         * - 特殊字符：`()~!@#$%^&*-_+=|{}[]:;'/<>,.?/`
         * >建议使用HTTPS协议调用API以避免可能发生的密码泄露。
         * @example `1@a****`
         */
        Password: string;
        /**
         * 要修改密码的用户的用户名。
         * 您可以通过调用[ListUsers](~~188572~~)获取该集群中的用户名。
         * @example `user1`
         */
        Name: string;
    }[];
    /**
     * 采用异步消息链路修改用户密码。
     * 默认值：false。
     * @example `false`
     */
    "Async"?: boolean;
}
