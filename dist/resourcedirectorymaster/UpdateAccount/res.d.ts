export interface UpdateAccountResponse {
    /**
     * 成员信息。
     */
    Account: {
        /**
         * 成员加入状态。取值：
         * - CreateSuccess：创建成功。
         * - InviteSuccess：邀请成功。
         * - Removed：已移除。
         * - SwitchSuccess：切换成功。
         * @example `CreateSuccess`
         */
        Status: string;
        /**
         * 成员类型。取值：
         * - CloudAccount：云账号。
         * - ResourceAccount：资源账号。
         * @example `ResourceAccount`
         */
        Type: string;
        /**
         * 成员名称。
         * @example `admin`
         */
        DisplayName: string;
        /**
         * 资源夹ID。
         * @example `fd-bVaRIG****`
         */
        FolderId: string;
        /**
         * 资源目录ID。
         * @example `rd-k3****`
         */
        ResourceDirectoryId: string;
        /**
         * 成员加入时间（UTC时间）。
         * @example `2015-01-23T12:33:18Z`
         */
        JoinTime: string;
        /**
         * 成员ID。
         * @example `12323344****`
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
         * @example `2015-01-23T12:33:18Z`
         */
        ModifyTime: string;
        /**
         * 阿里云账号名称。
         * @example `ecs-manager@aliyun.com`
         */
        AccountName: string;
    };
    /**
     * 请求ID。
     * @example `9B34724D-54B0-4A51-B34D-4512372FE1BE`
     */
    RequestId: string;
}
