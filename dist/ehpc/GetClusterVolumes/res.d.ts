export interface GetClusterVolumesResponse {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    RegionId: string;
    /**
     * 请求ID。
     * @example `8BCFD52E-0336-4490-AE7D-F560F106****`
     */
    RequestId: string;
    Volumes: {
        /**
         * 挂载到E-HPC的文件系统信息列表。
         */
        VolumeInfo: {
            /**
             * 作业队列。
             * @example `workq`
             */
            JobQueue: string;
            /**
             * 文件系统ID。
             * @example `0e754****`
             */
            VolumeId: string;
            /**
             * 远程挂载目录。
             * @example `/test`
             */
            RemoteDirectory: string;
            /**
             * 挂载点地址。
             * @example `0e754****-kal90.cn-hangzhou.nas.aliyuncs.com`
             */
            VolumeMountpoint: string;
            /**
             * 本地挂载目录。
             * @example `/ehpcdata`
             */
            LocalDirectory: string;
            /**
             * 文件系统类型。
             * @example `NAS`
             */
            VolumeType: string;
            /**
             * 是否为可卸载资源。
             * @example `true`
             */
            MustKeep: boolean;
            /**
             * 集群类型。可能值：
             * - OnPremise：混合云集群。
             * - PublicCloud：公有云集群。
             * @example `PublicCloud`
             */
            Location: string;
            /**
             * 文件系统的存储协议类型。
             * @example `NFS`
             */
            VolumeProtocol: string;
            Roles: {
                /**
                 * 挂载文件系统的节点信息列表。
                 */
                RoleInfo: {
                    /**
                     * 挂载文件系统的节点类型。可能值：
                     * - Compute：计算节点
                     * - Manager：管控节点
                     * - Login：登录节点
                     * @example `Compute`
                     */
                    Name: string;
                }[];
            };
        }[];
    };
}
