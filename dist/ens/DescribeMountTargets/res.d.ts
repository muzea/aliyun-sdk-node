export interface DescribeMountTargetsResponse {
    /**
     * 单页行数。
     * @example `2`
     */
    PageSize: number;
    /**
     * 总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 挂载点信息集合。
     */
    MountTargets: {
        /**
         * 挂载点路径。
         * @example `LB:/fileSystemName/mountTargetName`
         */
        MountTargetDomain: string;
        /**
         * 挂载点名称
         * @example `TestMountPath`
         */
        MountTargetName: string;
        /**
         * 网络ID。
         * @example `n-***`
         */
        NetWorkId: string;
        /**
         * 挂载点状态。包括：
         * - active：可用
         * - inactive：不可用
         * - pending：任务排队中
         * - deleting：删除中
         * @example `active`
         */
        Status: string;
        /**
         * 地域ID。
         * @example `cn-beijing-cmcc`
         */
        EnsRegionId: string;
        /**
         * 文件系统ID。
         * @example `c50f8*****`
         */
        FileSystemId: string;
    }[];
    /**
     * 请求ID。
     * @example `762DD527-358B-1E48-8005-CCE3ED4EB9E0`
     */
    RequestId: string;
}
