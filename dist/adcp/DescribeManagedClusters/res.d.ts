export interface DescribeManagedClustersResponse {
    /**
     * 请求ID。
     * @example `BDA85C7A-FC81-56C4-9BC2-9112EE970059`
     */
    RequestId: string;
    /**
     * 集群信息列表。
     */
    Clusters: {
        /**
         * 集群信息。
         */
        Cluster: {
            /**
             * 集群名称。
             * @example `ackone-heyuan`
             */
            Name: string;
            /**
             * 集群ID。
             * @example `c2f41fd4599454a9c9ad8b3daafe8****`
             */
            ClusterID: string;
            /**
             * 集群所在地域。
             * @example `cn-hangzhou`
             */
            Region: string;
            /**
             * 子集群状态：
             * - `initial`：初始化中。
             * - `failed`：创建失败。
             * - `running`：运行中。
             * - `inactive`：待激活。
             * - `deleting`：删除中。
             * - `delete_failed`：删除失败。
             * - `deleted`：已删除。
             * @example `running`
             */
            State: string;
            /**
             * 集群类型。
             * @example `One`
             */
            ClusterType: string;
            /**
             * 集群的创建时间。
             * @example `2022-03-23T06:22:28Z
            `
             */
            Created: string;
            /**
             * 集群更新时间。
             * @example `2022-03-23T06:22:28Z
            `
             */
            Updated: string;
            /**
             * 集群的初始版本号。
             * @example `1.20.4-aliyun.1
            `
             */
            InitVersion: string;
            /**
             * 集群的最新版本号。
             * @example `1.22.3-aliyun.1
            `
             */
            CurrentVersion: string;
            /**
             * 资源组ID。
             * @example `rg-acfmx7o7ewy****`
             */
            ResourceGroupId: string;
            /**
             * VPC ID。
             * @example `vpc-bp1fhizs9fxuvit06****`
             */
            VpcID: string;
            /**
             * 虚拟交换机ID。
             * @example `vsw-m5e0pbkgmhvzecf7e****`
             */
            VSwitchID: string;
            /**
             * 集群标识。
             * @example `Default`
             */
            Profile: string;
            /**
             * 集群规格。`ack.pro.small`表示基础版。
             * @example `ack.pro.small`
             */
            ClusterSpec: string;
        };
        /**
         * 子集群在主控集群中的状态。
         */
        Status: {
            /**
             * 子集群在主控集群中的状态：
             * - `Installing`：添加中。
             * - `Successed`：添加成功。
             * - `Failed`：添加失败。
             * - `Deleting`: 移除中
             * - `Deleted`：已移除。
             * @example `Successed`
             */
            State: string;
            /**
             * 状态信息。
             * @example `SUCCESS`
             */
            Message: string;
        };
        /**
         * 子集群在服务网格中的状态。
         */
        MeshStatus: {
            /**
             * 子集群是否在服务网格中，取值：
             * - `true`：子集群在服务网格实例中。
             * - `false`：子集群不在服务网格实例中。
             * @example `true`
             */
            InMesh: boolean;
        };
    }[];
}
