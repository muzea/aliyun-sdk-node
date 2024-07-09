export interface DescribeServiceEventRequest {
    /**
     * 服务事件列表的页码，默认为1。
     * @example `1`
     */
    "PageNum"?: string;
    /**
     * 分页查询时设置的每页显示的事件数量，默认为100。
     * @example `20`
     */
    "PageSize"?: string;
    /**
     * 服务所在地域ID。
     * @example `cn-shanghai`
     */
    "ClusterId": string;
    /**
     * 服务对应名称。如何获取服务名称，请参见[ListServices ](~~412109~~)。
     * @example `foo`
     */
    "ServiceName": string;
    /**
     * 查询起始UCT时间。默认为7天前。
     * @example `2006-01-02 15:04:05`
     */
    "StartTime"?: string;
    /**
     * 查询终止时间，默认当前时刻。
     * @example `2006-01-02 15:04:05`
     */
    "EndTime"?: string;
    /**
     * 事件类型：
     * - Normal：正常事件。
     * - Warning：异常事件。
     * @example `Normal`
     */
    "EventType"?: string;
    /**
     * 服务实例的名字。如何获取实例名称，请参见[ListServiceInstances](~~412108~~)。
     * @example `echo-test-784xxxx85d-hhnd8`
     */
    "InstanceName"?: string;
}
