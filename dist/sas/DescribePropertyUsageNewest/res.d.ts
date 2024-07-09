export interface DescribePropertyUsageNewestResponse {
    /**
     * 该服务器上创建的账户。固定值：**user**，表示用户账号。
     * @example `user`
     */
    Type: string;
    /**
     * 列表个数。
     * @example `5`
     */
    ItemCount: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `9F85AC10-A1FE-54D7-935A-F28D5256FF47`
     */
    RequestId: string;
    /**
     * 账户信息集合。
     */
    NewestStatisticItems: {
        /**
         * 账户名。
         * @example `root`
         */
        Name: string;
        /**
         * 账户创建时间戳。
         * @example `1566178646000`
         */
        Create: number;
    }[];
}
