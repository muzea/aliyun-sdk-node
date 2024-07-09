export interface ModifyClusterDeletionProtectionRequest {
    /**
     * 集群Id。
     * @example `ld-****************`
     */
    "ClusterId": string;
    /**
     * 是否进行删除保护。
     * true 设置后删除时会提示删除保护中不能删除。
     * false 设置后可随意删除。
     * @example `true`
     */
    "Protection": boolean;
}
