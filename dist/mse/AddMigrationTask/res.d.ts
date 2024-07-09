export interface AddMigrationTaskResponse {
    /**
     * 数据结构。
     */
    Data: {
        /**
         * 任务ID。
         * @example `12`
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
         * @example `192.168.1.1:8848
        `
         */
        OriginInstanceAddress: string;
        /**
         * 源实例名称。
         * @example `来源集群`
         */
        OriginInstanceName: string;
        /**
         * 命名空间列表，当来源集群是Nacos时选填。
         * @example `namesapceId1,namesapceId2`
         */
        OriginInstanceNamespace: string;
        /**
         * 目标实例ID。
         * @example `mse-cn-7pp2w*****`
         */
        TargetInstanceId: string;
        /**
         * 目标实例名称。
         * @example `目标集群`
         */
        TargetClusterName: string;
        /**
         * 目标实例Url。
         * @example `mse-94d****-nacos-ans.mse.aliyuncs.com:8848`
         */
        TargetClusterUrl: string;
        /**
         * 描述。
         * @example `testsdfsdfsd`
         */
        ProjectDesc: string;
        SyncType: string;
    };
    /**
     * 请求ID。
     * @example `7466566F-F30F-4A29-965D-3E0AF21D****`
     */
    RequestId: string;
    /**
     * 信息。
     * @example `The request is processed successfully.`
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
