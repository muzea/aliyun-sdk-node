export interface DeleteMultiZoneClusterRequest {
    /**
     * 要删除的多可用区集群Id。
     * @example `d-t4nn71xa0yn56****`
     */
    "ClusterId": string;
    /**
     * 是否立即删除实例（默认是走回收站，7日后完全清理）
     * - true：立即删除， 不走回收站，慎重提交。
     * - false：不立即删除，走回收站， 默认。
     * @example `false`
     */
    "ImmediateDeleteFlag"?: boolean;
}
