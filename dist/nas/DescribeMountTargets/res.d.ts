export interface DescribeMountTargetsResponse {
    /**
     * 挂载点总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `3BAB90FD-B4A0-48DA-9F09-2B963510****`
     */
    RequestId: string;
    /**
     * 分页查询时，每个分页包含的挂载点个数。
     * @example `1`
     */
    PageSize: number;
    /**
     * 文件系统列表的分页页码。
     * @example `1`
     */
    PageNumber: number;
    MountTargets: {
        /**
         * 挂载点信息集合。
         */
        MountTarget: {
            /**
             * 专有网络ID。
             * @example `vpc-2zesj9afh3y518k9o****`
             */
            VpcId: string;
            /**
             * 当前挂载点状态。
             * 包括：
             * - Active：可用
             * - Inactive：不可用
             * - Pending：任务排队中
             * - Deleting：删除中
             * - Hibernating：休眠中
             * - Hibernated：已休眠
             * > 当状态为Active时才可以挂载文件系统。
             * @example `Active`
             */
            Status: string;
            ClientMasterNodes: {
                /**
                 * 客户端管理节点信息集合。
                 */
                ClientMasterNode: {
                    /**
                     * 管理节点ECS实例ID。
                     * @example `i-hp3i3odi5ory1buo****`
                     */
                    EcsId: string;
                    /**
                     * 默认登录密码。
                     * @example `12****`
                     */
                    DefaultPasswd: string;
                    /**
                     * 管理节点ECS实例IP。
                     * @example `192.168.1.0`
                     */
                    EcsIp: string;
                }[];
            };
            /**
             * IPv4挂载点。
             * @example `1ca404a666-w****.cn-hangzhou.nas.aliyuncs.com`
             */
            MountTargetDomain: string;
            /**
             * 挂载点所应用的权限组名称。
             * @example `DEFAULT_VPC_GROUP_NAME`
             */
            AccessGroup: string;
            /**
             * IPv4和IPv6双栈挂载点。
             * @example `174494b666-x****.dualstack.cn-hangzhou.nas.aliyuncs.com`
             */
            DualStackMountTargetDomain: string;
            /**
             * 交换机ID。
             * @example `vsw-2zevmwkwyztjuoffg****`
             */
            VswId: string;
            /**
             * 网络类型。取值为**Vpc**，表示专有网络。
             * @example `Vpc`
             */
            NetworkType: string;
            /**
             * 挂载点类型。
             * - IPv4：IPv4挂载点。
             * - DualStack：双栈挂载点。
             * @example `IPv4`
             */
            IPVersion: string;
        }[];
    };
}
