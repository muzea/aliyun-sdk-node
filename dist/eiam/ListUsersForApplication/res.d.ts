export interface ListUsersForApplicationResponse {
    /**
     * 请求ID。
     * @example `0441BD79-92F3-53AA-8657-F8CE4A2B912A`
     */
    RequestId: string;
    /**
     * 列表总条数目。
     * @example `100`
     */
    TotalCount: number;
    /**
     * 账户ID列表。
     */
    Users: {
        /**
         * 账户ID。
         * @example `user_d6sbsuumeta4h66ec3il7yxxxx`
         */
        UserId: string;
    }[];
}
