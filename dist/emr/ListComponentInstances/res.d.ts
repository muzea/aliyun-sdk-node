export interface ListComponentInstancesResponse {
    ComponentInstances: {
        /**
         * 组件名称。
         * @example `DataNode`
         */
        ComponentName: string;
        /**
         * 应用名称。
         * @example `HDFS`
         */
        ApplicationName: string;
        /**
         * 组件实例操作状态，取值如下：
         * - WAITING：等待中
         * - INSTALLING：安装中
         * - INSTALLED：已安装
         * - INSTALL_FAILED：安装失败
         * - STARTING：启动中
         * - STARTED：已启动
         * - START_FAILED：启动失败
         * - STOPPING：停止中
         * - STOPPED：已停止
         * - STOP_FAILED：停止失败
         */
        ComponentInstanceState: string;
        /**
         * 节点ID。
         * @example `i-bp1cudc25w2bfwl5****`
         */
        NodeId: string;
        /**
         * 节点名称。
         * @example `core1-1`
         */
        NodeName: string;
        /**
         * Commission状态，取值如下：
         * - COMMISSIONED：已上线
         * - COMMISSIONING：上线中
         * - DECOMMISSIONED：已下线
         * - DECOMMISSIONINPROGRESS：下线进程中
         * - DECOMMISSIONFAILED：下线失败
         * - INSERVICE：服务中
         * - UNKNOWN：未知状态。
         * <p>
         * @example `INSERVICE`
         */
        CommissionState: string;
        /**
         * 组件服务状态，取值如下：
         * - active：主服务
         * - standby：备用服务。
         * @example `active`
         */
        BizState: string;
        /**
         * 安装时间戳。
         * @example `1628248947000`
         */
        CreateTime: number;
        /**
         * 期望状态，取值如下：
         * - WAITING：等待中
         * - INSTALLING：安装中
         * - INSTALLED：已安装
         * - INSTALL_FAILED：安装失败
         * - STARTING：启动中
         * - STARTED：已启动
         * - START_FAILED：启动失败
         * - STOPPING：停止中
         * - STOPPED：已停止
         * - STOP_FAILED：停止失败。
         * @example `STARTED`
         */
        DesiredState: string;
    }[];
    /**
     * 请求ID。
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C8944****`
     */
    RequestId: string;
    /**
     * 返回读取到的数据位置，空代表数据已经读取完毕。
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C89568980`
     */
    NextToken: string;
    /**
     * 本次请求所返回的最大记录条数。
     * @example `20`
     */
    MaxResults: number;
    /**
     * 本次请求条件下的数据总量。
     * @example `200`
     */
    TotalCount: number;
}
