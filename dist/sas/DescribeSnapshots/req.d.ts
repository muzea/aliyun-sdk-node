export interface DescribeSnapshotsRequest {
    /**
     * 要查询的服务器的UUID。
     * >调用[DescribeBackupPolicy](~~DescribeBackupPolicy~~)接口可以获取该参数。
     * @example `061d8042-59ff-416e-bc33-294a1cf5****`
     */
    "Uuid"?: string;
    /**
     * 服务器所在的地域。
     * > 如果未指定参数Uuid，则该参数需必填。
     * @example `us-east-1`
     */
    "MachineRegion"?: string;
    /**
     * 要查询的服务器的名称或IP地址。
     * @example `192.168.XX.XX`
     */
    "MachineRemark"?: string;
    /**
     * 可恢复快照状态列表。取值：
     * - **COMPLETE**：已完成
     * - **PARTIAL_COMPLETE**：备份部分成功
     * @example `["COMPLETE"]`
     */
    "StatusList"?: string;
    /**
     * 指定分页查询时，每页显示的数据最大条数。
     * @example `20`
     */
    "PageSize": number;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 用来标记当前开始读取的位置，置空表示从头开始。
     * > 第一次调用不用填写，会在返回结果中包含第二次调用时用的NextToken，之后每次调用返回结果中都有下一次调用时的NextToken。
     * @example `CAESGgoSChAKDGNvbXBsZXRlVGltZRABCgQiAggAGAAiQAoJAB4SwmEAAAAACjMDLgAAADFTNzMyZDMwMzAzMDM0NzY3YTZjNjI3NjZmNmU3MjcxNjk3NDY5MzY3MjY4****`
     */
    "NextToken"?: string;
    /**
     * 防护策略的版本。取值：
     * - **1.0.0**：表示防护策略的版本为1.0.0
     * - **2.0.0**：表示防护策略的版本为2.0.0
     * @example `2.0.0`
     */
    "ApiVersion": string;
    /**
     * 是否阿里云ECS主机。取值：
     * - **true**：是
     * - **false**：否
     * @example `true`
     */
    "IsAliYunEcs"?: string;
}
