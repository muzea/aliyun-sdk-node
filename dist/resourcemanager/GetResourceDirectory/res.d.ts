export interface GetResourceDirectoryResponse {
    /**
     * 请求ID。
     * @example `CD76D376-2517-4924-92C5-DBC52262F93A`
     */
    RequestId: string;
    /**
     * 资源目录信息。
     */
    ResourceDirectory: {
        /**
         * 管控策略状态。取值：
         * - Enabled：已开启。
         * - PendingEnable：开启中。
         * - Disabled：已关闭。
         * - PendingDisable：关闭中。
         * @example `Enabled`
         */
        ControlPolicyStatus: string;
        /**
         * 资源目录开通时间。
         * @example `2019-02-18T15:32:10.473Z`
         */
        CreateTime: string;
        /**
         * 成员实名信息。
         * @example `***有限公司`
         */
        IdentityInformation: string;
        /**
         * 管理账号ID。
         * @example `172845045600****`
         */
        MasterAccountId: string;
        /**
         * 管理账号名称。
         * @example `aliyun-admin`
         */
        MasterAccountName: string;
        /**
         * 是否开启了成员删除许可。取值：
         * - Enabled：已开启。允许通过调用[DeleteAccount](~~311546~~)删除资源账号类型的成员。
         * - Disabled：已关闭。不允许删除资源账号类型的成员。
         * @example `Enabled`
         */
        MemberDeletionStatus: string;
        /**
         * 资源目录ID。
         * @example `rd-St****`
         */
        ResourceDirectoryId: string;
        /**
         * Root资源夹ID。
         * @example `r-Zo****`
         */
        RootFolderId: string;
    };
}
