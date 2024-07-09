export interface DescribeServiceLogRequest {
    /**
     * 服务日志的页码，默认为1。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 分页查询时设置的每页显示的日志行数，默认值为500。
     * @example `500`
     */
    "PageSize"?: number;
    /**
     * 要查询的机器IP。如何获取机器IP，请参见[ListServiceInstances](~~412108~~)。
     * @example `10.0.0.1`
     */
    "Ip"?: string;
    /**
     * 查询的关键字。
     * @example `key`
     */
    "Keyword"?: string;
    /**
     * 查询的开始UTC时间。
     * @example `2006-01-02 15:04:05`
     */
    "StartTime"?: string;
    /**
     * 查询的结束UTC时间。
     * @example `2006-01-02 15:04:05`
     */
    "EndTime"?: string;
    /**
     * 服务所在地域ID。
     * @example `cn-shanghai`
     */
    "ClusterId": string;
    /**
     * 服务名称。如何获取服务名称，请参见[ListServices ](~~412109~~)。
     * @example `echo`
     */
    "ServiceName": string;
    /**
     * 服务实例的名称。如何获取实例名称，请参见[ListServiceInstances](~~412108~~)。
     * @example `echo-da290ac8-7fckm`
     */
    "InstanceName"?: string;
    /**
     * 服务实例的容器名称。
     * @example `worker0`
     */
    "ContainerName"?: string;
    /**
     * 查看实例上次重启前的日志。注意：仅在实例出现重启时可用。
     * @example `true`
     */
    "Previous"?: boolean;
}
