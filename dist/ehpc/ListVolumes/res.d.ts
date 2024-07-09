export interface ListVolumesResponse {
    /**
     * 本页条数。
     * @example `1`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 列表条目总数。
     * @example `1`
     */
    TotalCount: number;
    Volumes: {
        /**
         * 挂载到E-HPC集群的文件系统信息数组。
         */
        VolumeInfo: {
            /**
             * 文件系统ID。
             * @example `bc8a****`
             */
            VolumeId: string;
            /**
             * 集群名称。
             * @example `cluster1`
             */
            ClusterName: string;
            /**
             * 文件系统挂载的远程目录。
             * @example `/test1`
             */
            RemoteDirectory: string;
            /**
             * 挂载点地址。
             * @example `bc8a****-rgd51.cn-hangzhou.nas.aliyuncs.com`
             */
            VolumeMountpoint: string;
            /**
             * 挂载到集群的文件系统类型，目前仅支持NAS。
             * @example `NAS`
             */
            VolumeType: string;
            /**
             * 存储协议类型。可能值：
             * - NFS
             * - SMB
             * @example `NFS`
             */
            VolumeProtocol: string;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 集群ID。
             * @example `ehpc-hz-FYUr32****`
             */
            ClusterId: string;
            AdditionalVolumes: {
                /**
                 * 新增文件系统挂载的信息列表。
                 */
                VolumeInfo: {
                    /**
                     * 作业所属队列。
                     * @example `all.q`
                     */
                    JobQueue: string;
                    /**
                     * 文件系统ID。
                     * @example `86y3****`
                     */
                    VolumeId: string;
                    /**
                     * 文件系统挂载的远程目录。
                     * @example `/test`
                     */
                    RemoteDirectory: string;
                    /**
                     * 挂载点地址。
                     * @example `86y3****-rgd51.cn-hangzhou.nas.aliyuncs.com`
                     */
                    VolumeMountpoint: string;
                    /**
                     * 挂载的节点类型。可能值：
                     * - Manager：管控节点
                     * - Login：登录节点
                     * - Compute：计算节点
                     * @example `Compute`
                     */
                    Role: string;
                    /**
                     * 本地挂载目录。
                     * @example `/testopt`
                     */
                    LocalDirectory: string;
                    /**
                     * 新增的文件系统类型，目前仅支持NAS。
                     * @example `NAS`
                     */
                    VolumeType: string;
                    /**
                     * 集群所在位置。可能值：
                     * - OnPremise：混合云集群。
                     * - PublicCloud：公有云集群。
                     * @example `PublicCloud`
                     */
                    Location: string;
                    /**
                     * 存储协议类型。可能值：
                     * - NFS
                     * - SMB
                     * @example `NFS`
                     */
                    VolumeProtocol: string;
                }[];
            };
        }[];
    };
}
