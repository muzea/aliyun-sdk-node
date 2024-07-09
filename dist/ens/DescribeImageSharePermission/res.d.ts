export interface DescribeImageSharePermissionResponse {
    /**
     * 镜像共享的总数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 当前查询每页的行数。
     * @example `100`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `A44EE357-6174-5E37-A801-48F5790F9ACE`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 镜像ID。
     * @example `m-5qkf6jv9a0tzd5ipwx5fi****`
     */
    ImageId: string;
    Accounts: {
        /**
         * 账号信息。
         */
        Account: string[];
    };
}
