export interface GetK8sClusterResponse {
    /**
     * 接口状态或POP错误码。
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `C3CE915C-0C83-4AA5-8D66-E8BEED62939E`
     */
    RequestId: string;
    /**
     * 集群分页显示列表。
     */
    ClusterPage: {
        /**
         * 分页查询时当前显示第几页，默认值为1。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时每页显示几条，默认值为1000。
         * @example `10`
         */
        PageSize: number;
        /**
         * 显示总页数。
         * @example `5`
         */
        TotalSize: number;
        ClusterList: {
            /**
             * 集群列表。
             */
            Cluster: {
                /**
                 * VPC ID。
                 * @example `vpc-**z1mlwpbjx3e9m**`
                 */
                VpcId: string;
                /**
                 * 交换机ID。
                 * @example `vsw-bp1uf97****xjxgip****`
                 */
                VswitchId: string;
                /**
                 * 子网的网段。
                 * @example `172.20.0.0/16`
                 */
                SubNetCidr: string;
                /**
                 * 内存总量，单位：MB。
                 * @example `2048`
                 */
                Mem: number;
                /**
                 * 命名空间ID。
                 * @example `test`
                 */
                RegionId: string;
                /**
                 * 容器集群运行状态：
                 * - initial：初始化中。
                 * - failed：创建失败。
                 * - running：运行中。
                 * - updating：更新中。
                 * - scaling：扩容中。
                 * - removing：移除节点中。
                 * - upgrading：升级中。
                 * - deleting：删除中。
                 * - delete_failed：删除失败。
                 * - deleted：已删除（该状态用户不可见）。
                 * @example `running`
                 */
                CsClusterStatus: string;
                /**
                 * CPU总核数。
                 * @example `4`
                 */
                Cpu: number;
                /**
                 * 网络类型：
                 * - 1：经典网络。
                 * - 2：VPC。
                 * @example `2`
                 */
                NetworkMode: number;
                /**
                 * 容器服务集群ID。
                 * @example `2ce62869f4d4466b920312315f05****`
                 */
                CsClusterId: string;
                /**
                 * 集群描述。
                 * @example `test`
                 */
                Description: string;
                /**
                 * 集群类型：
                 * - 2：ECS集群。
                 * - 5：容器服务K8s集群或Serverless K8s集群。
                 * @example `5`
                 */
                ClusterType: number;
                /**
                 * 集群名称。
                 * @example `test`
                 */
                ClusterName: string;
                /**
                 * 节点数量。
                 * @example `4`
                 */
                NodeNum: number;
                /**
                 * 集群ID。
                 * @example `81453e4b-4df0-4592-****-b835a2ee****`
                 */
                ClusterId: string;
                /**
                 * 集群的导入状态：
                 * - 0：没有导入。
                 * - 1：导入成功。
                 * - 2：导入失败。
                 * - 3：正在导入。
                 * - 4：集群已删除。
                 * @example `1`
                 */
                ClusterImportStatus: number;
                /**
                 * 集群子类型：
                 * * Ask：Serverless K8s 集群。
                 * * ManagedKubernetes：容器服务 K8s 集群。
                 * @example `Ask`
                 */
                SubClusterType: string;
                /**
                 * 集群运行状态：
                 * - 1：正常。
                 * - 2：异常。
                 * - 3：离线。
                 * @example `1`
                 */
                ClusterStatus: number;
            }[];
        };
    };
}
