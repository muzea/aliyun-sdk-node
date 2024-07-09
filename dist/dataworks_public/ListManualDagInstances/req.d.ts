export interface ListManualDagInstancesRequest {
    /**
     * 运维中心的调度环境标识，包括PROD（生产环境）和DEV（开发环境）。
     * @example `RPOD`
     */
    "ProjectEnv": string;
    /**
     * 手动业务流程所属的工作空间名称。您可以进入[DataWorks控制台](https://workbench.data.aliyun.com/console)，在工作空间配置页面获取。
     * @example `test_workspace`
     */
    "ProjectName": string;
    /**
     * 触发手动业务流程运行的Dag实例ID。您可以调用[RunManualDagNodes](~~212830~~)接口获取。
     * @example `7000001231241`
     */
    "DagId": string;
}
