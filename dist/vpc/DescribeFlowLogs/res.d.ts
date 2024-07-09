export interface DescribeFlowLogsResponse {
    /**
     * 分页查询时每页的行数。
     * @example `20`
     */
    PageSize: string;
    /**
     * 列表的页码。
     * @example `1`
     */
    PageNumber: string;
    /**
     * 请求ID。
     * @example `F7DDDC17-FA06-4AC2-8F35-59D2470FCFC1`
     */
    RequestId: string;
    /**
     * 查询到的流日志列表条目数。
     * @example `1`
     */
    TotalCount: string;
    /**
     * 是否调用成功。取值：
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: string;
    FlowLogs: {
        /**
         * 流日志列表。
         */
        FlowLog: {
            /**
             * 流日志的状态。取值：
             * - **Active**：流日志为启动状态。
             * - **Activating**：流日志正在创建中。
             * - **Inactive**：流日志为未启动状态。
             * @example `Active`
             */
            Status: string;
            /**
             * 流日志的创建时间。
             * @example `2022-01-21T03:08:50Z`
             */
            CreationTime: string;
            /**
             * 流日志名称。
             * @example `myFlowlog`
             */
            FlowLogName: string;
            /**
             * 流日志捕获的流量类型。取值：
             * - **All**：全部流量。
             * - **Allow**：访问控制允许的流量。
             * - **Drop**：访问控制拒绝的流量。
             * @example `All`
             */
            TrafficType: string;
            /**
             * 流日志捕获的流量的资源类型：
             * - **NetworkInterface**：弹性网卡。
             * - **VSwitch**：交换机内的所有弹性网卡。
             * - **VPC**：专有网络内的所有弹性网卡。
             * @example `NetworkInterface`
             */
            ResourceType: string;
            /**
             * 流日志描述信息。
             * @example `Description`
             */
            Description: string;
            /**
             * 管理捕获到的流量的Project。
             * @example `FlowLogProject`
             */
            ProjectName: string;
            /**
             * 存储捕获到的流量的Logstore。
             * @example `FlowLogStore`
             */
            LogStoreName: string;
            /**
             * 流日志捕获的流量的资源ID。
             * @example `eni-askldfas****`
             */
            ResourceId: string;
            /**
             * 流日志所属地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 流日志ID。
             * @example `fl-bp1f6qqhsrc2c12ta****`
             */
            FlowLogId: string;
            /**
             * 业务状态。取值：
             * - **Normal**：正常状态。
             * - **FinancialLocked**：欠费锁定。
             * @example `Normal`
             */
            BusinessStatus: string;
            /**
             * 流日志的采样间隔。单位：分钟。
             * @example `10`
             */
            AggregationInterval: number;
            TrafficPath: {
                /**
                 * 采集的流量路径。取值：
                 * - **all**：表示全量采集。
                 * - **internetGateway**：表示公网流量采集。
                 */
                TrafficPathList: string[];
            };
            /**
             * 云服务的托管类型。
             * - 可以为空，表示该流日志为用户自己创建。
             * - 非空时只支持取值为：**sls**，表示该流日志为通过日志服务控制台创建。
             * > 通过日志服务控制台创建的流日志实例可以展示在VPC列表中，但在VPC中无法对该流日志实例进行修改、启动、停止、删除操作，如果您需要对该流日志进行相关操作，您可以登录[日志服务控制台](https://sls.console.aliyun.com)对其进行修改、启动、停止、删除操作。
             * @example `sls`
             */
            ServiceType: string;
            /**
             * 流日志所属的资源组ID。
             * @example `rg-bp67acfmxazb4ph****`
             */
            ResourceGroupId: string;
            Tags: {
                /**
                 * 标签列表。
                 */
                Tag: {
                    /**
                     * 标签键。
                     * @example `FinanceDept`
                     */
                    Key: string;
                    /**
                     * 标签值。
                     * @example `FinanceJoshua`
                     */
                    Value: string;
                }[];
            };
            /**
             * 流日志的投递状态，取值：
             * - **SUCCESS**：投递成功。
             * - **FAILED**：投递失败。
             * @example `FAILED`
             */
            FlowLogDeliverStatus: string;
            /**
             * 当流日志投递失败时，可以根据报错信息排查问题，可能的报错信息有：
             * - **UnavaliableTarget**：日志服务SLS的Logstore不可用，无法接收日志。建议查看对应Logstore是否真实存在且可访问。
             * - **ProjectNotExist**： 日志服务SLS的Project不存在。建议删除原流日志，创建新流日志指向真实存在的Project。
             * - **UnknownError**：发生内部错误，请稍后重试。
             * @example `UnavaliableTarget`
             */
            FlowLogDeliverErrorMessage: string;
        }[];
    };
}
