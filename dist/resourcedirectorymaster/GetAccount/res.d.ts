export interface GetAccountResponse {
    /**
     * 成员信息。
     */
    Account: {
        /**
         * 成员加入状态。取值：
         * - CreateSuccess：创建成功。
         * - PromoteVerifying：升级确认中。
         * - PromoteFailed：升级失败。
         * - PromoteExpired：升级过期。
         * - PromoteCancelled：升级取消。
         * - PromoteSuccess：升级成功。
         * - InviteSuccess：邀请成功。
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
         * 实名认证信息。
         * @example `aliyun-admin`
         */
        IdentityInformation: string;
        /**
         * 成员加入时间。
         * @example `2015-01-23T12:33:18Z`
         */
        JoinTime: string;
        /**
         * 成员ID。
         * @example `181761095690****`
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
         * 成员修改时间。
         * @example `2015-01-23T12:33:18Z`
         */
        ModifyTime: string;
        /**
         * 账号名称。
         * @example `someone@example.com`
         */
        AccountName: string;
        /**
         * 成员在资源目录中的路径ID（RDPath）。
         * @example `rd-k3****​/r-Wm****​/fd-bVaRIG****​/181761095690****`
         */
        ResourceDirectoryPath: string;
        /**
         * 标签。
         */
        Tags: {
            /**
             * 标签键。
             * @example `tag_key`
             */
            Key: string;
            /**
             * 标签值。
             * @example `tag_value`
             */
            Value: string;
        }[];
        /**
         * 成员所在资源目录的位置。
         * @example `root/AlRd****​/Z5Aa****`
         */
        Location: string;
        /**
         * 邮箱状态。取值：
         * - 空：不存在邮箱修改记录。
         * - WAIT_MODIFY：正在修改中。
         * - CANCELLED：修改取消。
         * - EXPIRED：修改过期。
         * @example `WAIT_MODIFY`
         */
        EmailStatus: string;
        /**
         * 成员是否已绑定安全手机。取值：
         * - true：成员已绑定安全手机。
         * - false：成员未绑定安全手机。
         * @example `true`
         */
        HasSecureMobilePhone: boolean;
    };
    /**
     * 请求ID。
     * @example `9B34724D-54B0-4A51-B34D-4512372FE1BE`
     */
    RequestId: string;
}
