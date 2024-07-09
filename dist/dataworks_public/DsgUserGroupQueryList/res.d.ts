export interface DsgUserGroupQueryListResponse {
    /**
     * 调用是否成功。取值如下：
     * - true：调用成功。
     * - false：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `1029030003`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `param error`
     */
    ErrorMessage: string;
    /**
     * HTTP状态码。
     * @example `400`
     */
    HttpStatusCode: number;
    /**
     * 分页数据查询结果。
     */
    PageData: {
        /**
         * 分页的页码数。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 每页显示的条数，最大为100。
         * @example `10`
         */
        PageSize: number;
        /**
         * 返回的用户组总条数。
         * @example `100`
         */
        TotalCount: number;
        /**
         * 用户组列表。
         * @example `{     "accounts": [         "role_project_scheduler"     ],     "gmtCreate": "2024-05-10 15:22:18",     "gmtModified": "2024-05-10 15:22:18",     "id": 1955,     "name": "dsg_fin_test-复制",     "owner": "UAT" }`
         */
        Data: {
            /**
             * 用户组中的用户名集合。
             */
            Accounts: string[];
            /**
             * 用户组ID。
             * @example `123`
             */
            Id: number;
            /**
             * 用户组的创建时间。
             * @example `2024-05-10 17:14:44`
             */
            GmtCreate: string;
            /**
             * 用户组的修改时间。
             * @example `2024-05-10 17:14:44`
             */
            GmtModified: string;
            /**
             * 用户组名称。
             * @example `test_group`
             */
            Name: string;
            /**
             * 用户组负责人。
             * @example `user1`
             */
            Owner: string;
        }[];
    };
    /**
     * 请求的ID。用于定位日志，排查问题。
     * @example `102400001`
     */
    RequestId: string;
}
