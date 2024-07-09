export interface ModifyClusterCnnfStatusUserConfirmRequest {
    /**
     * 集群ID列表。
     */
    "ClusterIds"?: string[];
    /**
     * 用户是否修复集群拦截状态。取值：
     * - true：确认修复
     * - false：不修复
     * @example `true`
     */
    "UserConfirm"?: boolean;
}
