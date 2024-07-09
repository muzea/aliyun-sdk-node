export interface ListDirectoryUsersResponse {
    /**
     * 下一个查询开始的Token，NextToken为空表示没有下一个。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * AD目录对应的用户名称组成的数组。如果AD目录对应的用户只有Administrator和Guest，而没有其他用户，将返回空的Users数组。
     */
    Users: {
        /**
         * 用户名称。
         * @example `Alice`
         */
        EndUser: string;
        /**
         * 显示名称。
         * @example `Alice`
         */
        DisplayName: string;
    }[];
}
