export interface SetMemberDeletionPermissionResponse {
    /**
     * 请求ID。
     * @example `C55A4CAA-9039-1DDF-91CE-FCC134513D29`
     */
    RequestId: string;
    /**
     * 成员删除许可状态。取值：
     * - Enabled：已开启。
     * - Disabled：已关闭。
     * @example `Enabled`
     */
    MemberDeletionStatus: string;
    /**
     * 资源目录的管理账号ID。
     * @example `151266687691****`
     */
    ManagementAccountId: string;
    /**
     * 资源目录ID。
     * @example `rd-3G****`
     */
    ResourceDirectoryId: string;
}
