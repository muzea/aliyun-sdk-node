export interface ModifyAccountPasswordRequest {
    /**
     * 实例ID。
     * @example `cds-bp1l5ys6****wzrx`
     */
    "ClusterId": string;
    /**
     * 用户名。
     * @example `cassandra_test`
     */
    "Account": string;
    /**
     * 账号密码。大小写字母、数字、特殊字符占三种，长度为8-32位；特殊字符为!@#$%^&*()_+-=
     * @example `Alibaba@#￥**`
     */
    "Password": string;
}
