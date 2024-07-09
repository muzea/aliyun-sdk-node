export interface DescribeVscMountPointsRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "InputRegionId": string;
    /**
     * 挂载点ID。
     * @example `f-037cb49e1d-c****.dfs.aliyuncs.com`
     */
    "MountPointId"?: string;
    /**
     * 文件系统ID。
     * @example `e389e5c7-bcb4-4558-846a-e5afc444****`
     */
    "FileSystemId": string;
    /**
     * 已挂载HDFS文件系统的VSC ID。
     * @example `vsc-asjodjoio****`
     */
    "VscId"?: string;
    /**
     * 已挂载HDFS文件系统的ECS实例状态。
     * 取值：
     * - NORMAL ： 挂载成功。
     * - CREATING：挂载中。
     * - INVALID：挂载失败。
     * - OK：可查询到NORMAL、CREATING、INVALID三个状态的实例。
     * @example `NORMAL`
     */
    "Status"?: string;
    /**
     * 已挂载HDFS文件系统的ECS实例ID。
     * @example `i-bp1g6zv0ce8oghu7****`
     */
    "InstanceId"?: string;
}
