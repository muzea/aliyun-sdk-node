export interface UpdateClusterVolumesRequest {
    /**
     * 集群ID。
     * @example `ehpc-hz-FYUr32****`
     */
    "ClusterId": string;
    /**
     * 文件系统信息列表。
     */
    "AdditionalVolumes"?: {
        /**
         * 附加挂载文件系统的队列名称。
         * @example `work`
         */
        JobQueue: string;
        /**
         * 附加挂载的文件系统ID。
         * @example `extreme-00b88****`
         */
        VolumeId: string;
        /**
         * 挂载文件系统的节点信息列表。
         */
        Roles: {
            /**
             * 附加挂载的文件系统挂载的节点类型。取值范围：
             * - Manager：管控节点
             * - Login：登录节点
             * - Compute：计算节点
             * @example `["Compute"]`
             */
            Name: string;
        }[];
        /**
         * 附加挂载的文件系统挂载点地址。
         * @example `0088****-sihc.cn-hangzhou.extreme.nas.aliyuncs.com`
         */
        VolumeMountpoint: string;
        /**
         * 附加挂载的文件系统需要挂载的远程目录。
         * @example `/test`
         */
        RemoteDirectory: string;
        /**
         * 附加挂载的文件系统类型，目前仅支持NAS。
         * @example `NAS`
         */
        VolumeType: string;
        /**
         * 附加挂载文件系统的本地挂载目录。
         * @example `/ff`
         */
        LocalDirectory: string;
        /**
         * 附加挂载的文件系统协议类型。取值范围：
         * - NFS
         * - SMB
         * @example `NFS`
         */
        VolumeProtocol: string;
        /**
         * 附加挂载的文件系统的存储位置。可能值：
         * - OnPremise：混合云集群。
         * - PublicCloud：公有云集群。
         * @example `PublicCloud`
         */
        Location: string;
        /**
         * 附加挂载的文件系统的存储挂载选项。
         * @example `-t nfs -o vers=3,nolock,noresvport`
         */
        VolumeMountOption: string;
    }[];
}
