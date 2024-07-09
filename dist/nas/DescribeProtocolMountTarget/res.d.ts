export interface DescribeProtocolMountTargetResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0****`
     */
    RequestId: string;
    /**
     * 用户继续查询剩余导出目录的Marker。
     * @example `aBcdeg==`
     */
    NextToken: string;
    /**
     *
     * 协议服务导出目录集合。
     */
    ProtocolMountTargets: {
        /**
         * 协议服务导出目录ID。
         * @example `exp-19abf5beab8d****`
         */
        ExportId: string;
        /**
         * 协议服务导出目录的域名。
         * @example `cpfs-123****.cn-hangzhou.cpfs.aliyuncs.com`
         */
        ProtocolMountTargetDomain: string;
        /**
         * 协议服务支持的协议类型。
         * @example `NFS`
         */
        ProtocolType: string;
        /**
         * 协议服务导出的专有网络ID。
         * @example `vpc-2vct297b8157bth9z****`
         */
        VpcId: string;
        /**
         * 协议服务导出的交换机ID。
         * @example `vsw-2vc3c2lybvdllxyq4****`
         */
        VSwitchId: string;
        /**
         * 协议服务导出的Fileset ID。
         * @example `fset-1902718ea0ae****`
         */
        FsetId: string;
        /**
         * 协议服务导出的目录。
         * @example `/path/`
         */
        Path: string;
        /**
         * 协议服务导出目录绑定的权限组。
         * @example `DEFAULT_VPC_GROUP_NAME`
         */
        AccessGroupName: string;
        /**
         * 协议服务导出目录创建时间。
         * @example `2018-12-12T07:28:38Z`
         */
        CreateTime: string;
        /**
         * 挂载点状态。
         * @example `CREATING`
         */
        Status: string;
        /**
         * 协议服务ID。
         * @example `ptc-123****`
         */
        ProtocolServiceId: string;
        /**
         * 协议服务导出目录的描述。
         * @example `此协议服务导出目录的描述。`
         */
        Description: string;
    }[];
}
