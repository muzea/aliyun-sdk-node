export interface DescribeVscMountPointsResponse {
    /**
     * 返回结果的数量。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `55C5FFD6-BF99-41BD-9C66-FFF39189****`
     */
    RequestId: string;
    /**
     * 挂载点信息集合。
     */
    MountPoints: {
        /**
         * 挂载点ID。
         * @example `f-037cb49e1d-c****.dfs.aliyuncs.com`
         */
        MountPointId: string;
        /**
         * 挂载点描述信息。
         * @example `内部实例挂载的HDFS文件系统。`
         */
        Description: string;
        /**
         * 待挂载HDFS文件系统的ECS实例数量。
         * @example `1`
         */
        InstanceTotalCount: number;
        /**
         * 挂载点别名。
         * @example `hdfs1`
         */
        MountPointAlias: string;
        /**
         * 已挂载HDFS文件系统的ECS实例信息集合。
         */
        Instances: {
            /**
             * 已挂载HDFS文件系统的ECS实例状态。
             * 包括：
             * - NORMAL ： 挂载成功。
             * - CREATING：挂载中。
             * - INVALID：挂载失败。
             * @example `NORMAL`
             */
            Status: string;
            /**
             * 已挂载HDFS文件系统的ECS实例ID。
             * @example `i-bp1g6zv0ce8oghu7****`
             */
            InstanceId: string;
            /**
             * 已挂载HDFS文件系统的VSC列表。
             */
            Vscs: {
                /**
                 * VSC ID
                 * @example `vsc-asjodjoio****`
                 */
                VscId: string;
                /**
                 * VSC类型。
                 * 包括：
                 * - Primary（默认值）：ECS实例上的预留默认VSC
                 * - Secondary：ECS实例上的可重复VSC
                 * @example `Primary`
                 */
                VscType: string;
                /**
                 * VSC挂载状态。
                 * 包括：
                 * - NORMAL ： 挂载成功。
                 * - CREATING：挂载中。
                 * - INVALID：挂载失败。
                 * @example `NORMAL`
                 */
                VscStatus: string;
            }[];
        }[];
    }[];
}
