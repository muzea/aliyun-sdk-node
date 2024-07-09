export interface UpdateMigrationTaskResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpCode: string;
    /**
     * 数据结构。
     */
    Data: {
        /**
         * 任务ID。
         * @example `1`
         */
        Id: string;
        /**
         * 用户ID。
         * @example `183876217*****`
         */
        UserId: string;
        /**
         * 集群类型。
         * - Nacos-Ans
         * - ZooKeeper
         * - Eureka
         * @example `Nacos-Ans`
         */
        ClusterType: string;
        /**
         * 源实例节点地址。
         * @example `192.168.100.2:2181`
         */
        OriginInstanceAddress: string;
        /**
         * 源实例名称。
         * @example `src`
         */
        OriginInstanceName: string;
        /**
         * 命名空间列表，当来源集群是Nacos时选填。
         * @example `fsdfsdfdsf`
         */
        OriginInstanceNamespace: string;
        /**
         * 目标实例ID。
         * @example `mse-cn-zvp2u*****`
         */
        TargetInstanceId: string;
        /**
         * 目标实例名称。
         * @example `multiple-nacos`
         */
        TargetClusterName: string;
        /**
         * 目标实例Url。
         * @example `mse-0b*****-nacos-ans.mse.aliyuncs.com:8848`
         */
        TargetClusterUrl: string;
        /**
         * 描述。
         * @example `1232345`
         */
        ProjectDesc: string;
        /**
         * 创建时间。
         * @example `2022-01-07T10:07:57.000+0000`
         */
        GmtCreate: string;
        /**
         * 修改日期。
         * @example `2022-01-07T10:07:57.000+0000`
         */
        GmtModified: string;
        SyncType: string;
    };
    /**
     * 请求ID。
     * @example `AF21683A-29C7-4853-AC0F-B5ADEE4****`
     */
    RequestId: string;
    /**
     * 信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 错误码。
     * @example `mse-100-000`
     */
    ErrorCode: string;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
}
