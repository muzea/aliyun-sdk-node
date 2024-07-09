export interface GetRepoSyncTaskResponse {
    /**
     * 同步规则ID
     * @example `crsr-cllro6ho3wne****`
     */
    SyncRuleId: string;
    /**
     * 同步进度，取值：
     * - `0`：表示同步刚开始或同步失败
     * - `1`：表示同步成功
     * @example `1`
     */
    Progress: number;
    /**
     * 请求ID
     * @example `A6DEF8B0-5D45-46D6-867D-8C7FF0966B07`
     */
    RequestId: string;
    /**
     * 已同步大小，单位 Byte
     * @example `23655489`
     */
    SyncedSize: number;
    /**
     * 任务状态，取值：
     * `PENDING`：同步等待中
     * `SYNCHRONIZING`：同步进行中
     * `SUCCESS`：同步成功
     * `ERROR`：同步失败
     * @example `SUCCESS`
     */
    TaskStatus: string;
    /**
     * 是否同步传输加速。
     * @example `true`
     */
    SyncTransAccelerate: boolean;
    /**
     * 是否跨用户
     * @example `true`
     */
    CrossUser: boolean;
    /**
     * 同步任务ID
     * @example `rst-zxjkiv5oil6f****`
     */
    SyncTaskId: string;
    /**
     * 同步批任务ID
     * @example `a9434731-95ef-4087-9cf4-369c8e90****`
     */
    SyncBatchTaskId: string;
    /**
     * 返回值
     * @example `success`
     */
    Code: string;
    /**
     * 是否成功
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 同步任务触发类型，取值：
     * `PASSIVE`：自动触发同步任务
     * `INITIATIVE`：手动触发同步任务
     * @example `PASSIVE`
     */
    TaskTrigger: string;
    /**
     * 来源镜像
     */
    ImageFrom: {
        /**
         * 命名空间名称
         * @example `test`
         */
        RepoNamespaceName: string;
        /**
         * 实例ID
         * @example `cri-sgedpenzw80e****`
         */
        InstanceId: string;
        /**
         * 镜像TAG
         * @example `master`
         */
        ImageTag: string;
        /**
         * 仓库名称
         * @example `test`
         */
        RepoName: string;
        /**
         * 地域
         * @example `cn-shanghai`
         */
        RegionId: string;
    };
    /**
     * 目标镜像
     */
    ImageTo: {
        /**
         * 命名空间名称
         * @example `test`
         */
        RepoNamespaceName: string;
        /**
         * 实例ID
         * @example `cri-leqzomz5vijc****`
         */
        InstanceId: string;
        /**
         * 镜像TAG
         * @example `master`
         */
        ImageTag: string;
        /**
         * 仓库名称
         * @example `test`
         */
        RepoName: string;
        /**
         * 地域
         * @example `eu-west-1`
         */
        RegionId: string;
    };
    /**
     * 镜像层同步任务列表
     */
    LayerTasks: {
        /**
         * 任务状态
         * @example `SUCCESS`
         */
        TaskStatus: string;
        /**
         * 镜像digest值
         * @example `sha256:36fb85fcb5e919cb60e782397a6be04201868fe7b38ef7669fc01caec1c8fc4e`
         */
        Digest: string;
        /**
         * 已同步大小
         * @example `23655489`
         */
        SyncedSize: number;
        /**
         * 大小
         * @example `23655489`
         */
        Size: number;
        /**
         * 同步层任务ID
         * @example `rslt-074x4q20fx2d****`
         */
        SyncLayerTaskId: string;
        /**
         * 制品的digest值
         * @example `sha256:36fb85fcb5e919cb60e782397a6be04201868fe7b38ef7669fc01caec1c8fc4e`
         */
        ArtifactDigest: string;
    }[];
}
