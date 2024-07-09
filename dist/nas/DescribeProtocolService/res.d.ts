export interface DescribeProtocolServiceResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 用户继续查询剩余协议服务的Marker。
     * @example `aBcdeg==`
     */
    NextToken: string;
    /**
     * 协议机服务信息列表。
     */
    ProtocolServices: {
        /**
         * 文件系统ID。
         * @example `cpfs-099394bd928c****`
         */
        FileSystemId: string;
        /**
         * 协议服务ID。
         * @example `ptc-197ed6a00f2b****`
         */
        ProtocolServiceId: string;
        /**
         * 协议机集群的规格。
         * - 取值范围：General
         * - 默认值：General
         * @example `General`
         */
        ProtocolSpec: string;
        /**
         * 协议服务的吞吐。单位：MB/s。
         * @example `500`
         */
        ProtocolThroughput: number;
        /**
         * 协议节点的内存缓存大小。单位：GiB。
         * @example `0`
         */
        InstanceRAM: number;
        /**
         * 协议节点的Base吞吐。单位：MB/s。
         * @example `100`
         */
        InstanceBaseThroughput: number;
        /**
         * 协议节点的Burst吞吐。单位：MB/s。
         * @example `100`
         */
        InstanceBurstThroughput: number;
        /**
         * 此协议服务中导出的CPFS目录和Fileset总数。
         * @example `5`
         */
        MountTargetCount: number;
        /**
         * 协议服务支持的协议类型。
         * 取值范围：
         *  - NFS：协议服务支持NFS协议访问。
         * @example `NFS`
         */
        ProtocolType: string;
        /**
         * 协议服务状态。
         * 取值：
         * - Creating：创建中
         * - Starting：启动中
         * - Running：可用
         * - Updating：更新中
         * - Deleting：删除中
         * - Stopping：停止中
         * - Stopped：停止
         * @example `Running`
         */
        Status: string;
        /**
         * 协议服务的描述。
         * 限制：
         * - 长度为2~128个英文或中文字符。
         * - 必须以大小写字母或中文开头，不能以`http://`和`https://`开头。
         * - 可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
         * @example `此协议服务的描述`
         */
        Description: string;
        /**
         * 协议机服务创建时间，UTC时间。
         * @example `2018-12-12T07:28:38Z`
         */
        CreateTime: string;
        /**
         * 协议机服务修改时间，UTC时间。
         * @example `2018-12-12T07:28:38Z`
         */
        ModifyTime: string;
    }[];
}
