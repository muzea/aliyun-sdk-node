export interface ListOfficeSiteUsersResponse {
    /**
     * 下一个查询开始的Token，NextToken为空表示没有下一个。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `269BDB16-2CD8-4865-84BD-11C40BC21DB0`
     */
    RequestId: string;
    /**
     * AD用户名组成的数组。
     * 如果企业AD中的用户只有Administrator和Guest，没有其他用户，则将返回空的User数组。
     */
    Users: {
        /**
         * AD用户名。
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
