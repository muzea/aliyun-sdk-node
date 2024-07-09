export interface ResendPromoteResourceAccountEmailResponse {
    /**
     * 成员信息。
     */
    Account: {
        /**
         * 成员加入状态。
         * - CreateSuccess：创建成功。
         * - CreateVerifying：创建确认中。
         * - CreateFailed：创建失败。
         * - CreateExpired：创建过期。
         * - CreateCancelled：创建取消。
         * - PromoteVerifying：升级确认中。
         * - PromoteFailed：升级失败。
         * - PromoteExpired：升级过期。
         * - PromoteCancelled：升级取消。
         * - PromoteSuccess：升级成功。
         * - InviteSuccess：邀请成功。
         * - Removed：已移出。
         * @example `PromoteVerifying`
         */
        Status: string;
        /**
         * 成员类型。
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
         * 账号记录ID。
         * @example `16950264-3f0d-4ca9-82dd-6ee7a3d3****`
         */
        RecordId: string;
        /**
         * 成员加入时间。
         * @example `2015-01-23T12:33:18Z`
         */
        JoinTime: string;
        /**
         * 账号ID。
         * @example `12323344****`
         */
        AccountId: string;
        /**
         * 成员加入方式。
         * - invited：邀请。
         * - created：创建。
         * @example `created`
         */
        JoinMethod: string;
        /**
         * 账号名称。
         * @example `someone@example.com`
         */
        AccountName: string;
        /**
         * 成员修改时间。
         * @example `2015-01-23T12:33:18Z`
         */
        ModifyTime: string;
    };
    /**
     * 请求ID。
     * @example `9B34724D-54B0-4A51-B34D-4512372FE1BE`
     */
    RequestId: string;
}
