export interface DescribeDeletedInstancesResponse {
    /**
     * 页码大小。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求Id。
     * @example `0CAC5702-C862-44C0-AD54-C9CE70F4B246`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 总记录数。
     * @example `1`
     */
    TotalCount: number;
    Instances: {
        /**
         * 已删除但未完全释放的集群列表。
         */
        Instance: {
            /**
             * 当前状态，此处只有DELETED。
             * @example `DELETED`
             */
            Status: string;
            /**
             * 集群Id。
             * @example `hb-bp10q7n2zdw12xxxx`
             */
            InstanceId: string;
            /**
             * 地域Id。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 父级实例Id（如果是组件时存在）。
             * @example `null`
             */
            ParentId: string;
            /**
             * 集群类型，单节点single或集群版cluster。
             * @example `cluster`
             */
            ClusterType: string;
            /**
             * 集群名称。
             * @example `e2e-test`
             */
            InstanceName: string;
            /**
             * 所属可用区信息。
             * @example `cn-hangzhou-f`
             */
            ZoneId: string;
            /**
             * 删除时间。
             * @example `2020-11-02T07:27:24Z`
             */
            DeleteTime: string;
            /**
             * 组件的软件栈版本（如果是组件时）。
             * @example `null`
             */
            ModuleStackVersion: string;
            /**
             * 主版本号。
             * @example `2.0`
             */
            MajorVersion: string;
            /**
             * 集群引擎类型。
             * @example `hbase`
             */
            Engine: string;
            /**
             * 创建时间。
             * @example `2020-11-02T07:16:07Z`
             */
            CreatedTime: string;
        }[];
    };
}
