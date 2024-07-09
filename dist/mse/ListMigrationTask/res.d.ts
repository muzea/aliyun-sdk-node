export interface ListMigrationTaskResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpCode: string;
    /**
     * 数组结构。
     */
    Data: {
        /**
         * 任务ID。
         * @example `1`
         */
        Id: number;
        /**
         * 用户ID。
         * @example `2`
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
         * @example `192.168.1.1:8848`
         */
        OriginInstanceAddress: string;
        /**
         * 源实例名称。
         * @example `test`
         */
        OriginInstanceName: string;
        /**
         * 命名空间列表，当来源集群是Nacos时选填。
         * @example `fsdfsdfdsf`
         */
        OriginInstanceNamespace: string;
        /**
         * 目标实例ID。
         * @example `mse-cn-zv*****`
         */
        TargetInstanceId: string;
        /**
         * 目标实例名称。
         * @example `multiple-nacos`
         */
        TargetClusterName: string;
        /**
         * 目标实例Url。
         * @example `mse-f1******-nacos-ans.mse.aliyuncs.com:8848`
         */
        TargetClusterUrl: string;
        /**
         * 描述。
         * @example `test`
         */
        ProjectDesc: string;
        /**
         * 创建时间。
         * @example `2022-01-07T10:07:57.000+0000`
         */
        GmtCreate: string;
        /**
         * 更新时间。
         * @example `2021-12-30T06:41:52.000+0000`
         */
        GmtModified: string;
        SyncType: string;
    }[];
    /**
     * 分页大小。
     * @example `10`
     */
    PageSize: number;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 总数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 请求ID。
     * @example `451EBE59-5F33-5B15-83C1-78593B9*****`
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
