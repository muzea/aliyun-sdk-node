export interface CreateResourceAccountResponse {
    /**
     * 成员信息。
     */
    Account: {
        /**
         * 成员加入状态。取值为CreateSuccess，表示创建成功。
         * @example `CreateSuccess`
         */
        Status: string;
        /**
         * 成员类型。取值为ResourceAccount，表示资源账号。
         * @example `ResourceAccount`
         */
        Type: string;
        /**
         * 成员显示名称。
         * @example `Dev`
         */
        DisplayName: string;
        /**
         * 资源夹ID。
         * @example `fd-r23M55****`
         */
        FolderId: string;
        /**
         * 资源目录ID。
         * @example `rd-3G****`
         */
        ResourceDirectoryId: string;
        /**
         * 成员加入时间（UTC时间）。
         * @example `2020-12-31T03:37:39.456Z`
         */
        JoinTime: string;
        /**
         * 成员ID。
         * @example `112730938585****`
         */
        AccountId: string;
        /**
         * 成员加入方式。取值：
         * - invited：邀请。
         * - created：创建。
         * @example `created`
         */
        JoinMethod: string;
        /**
         * 成员修改时间（UTC时间）。
         * @example `2020-12-31T03:37:39.456Z`
         */
        ModifyTime: string;
        /**
         * 账号名称。
         * @example `alice@rd-3g****.aliyunid.com`
         */
        AccountName: string;
    };
    /**
     * 请求ID。
     * @example `B356A415-D860-43E5-865A-E2193D62BBD6`
     */
    RequestId: string;
}
