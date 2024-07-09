export interface DescribeParameterModificationHistoryRequest {
    /**
     * 实例ID，可调用[DescribeInstances](~~60933~~)接口获取。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId": string;
    /**
     * 节点ID。
     * > 传入本参数可查询集群实例中指定节点的参数配置。
     * @example `r-bp1xxxxxxxxxxxxx-db-0`
     */
    "NodeId"?: string;
    /**
     * 查询开始时间，格式为yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
     * @example `2022-09-05T08:49:27Z`
     */
    "StartTime": string;
    /**
     * 查询开始时间，必须晚于查询开始时间，格式为yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
     * @example `2022-09-05T09:49:27Z`
     */
    "EndTime": string;
    /**
     * 参数名。
     * @example `script_check_enable`
     */
    "ParameterName"?: string;
}
