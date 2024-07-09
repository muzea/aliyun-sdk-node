export interface ListServicesRequest {
    /**
     * 排序字段。按时间戳类型默认倒序排序。
     * @example `CreateTime`
     */
    "Sort"?: string;
    /**
     * 排序方式，取值如下：
     * - desc（默认值）：降序。
     * - asc：升序。
     * @example `asc`
     */
    "Order"?: string;
    /**
     * 模糊匹配字段。只支持按服务名字模糊匹配。
     * @example `foo`
     */
    "Filter"?: string;
    /**
     * 服务列表的请求页码，默认为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页显示的服务数量，默认为100。
     * @example `100`
     */
    "PageSize"?: number;
    /**
     * 服务群组名称，如何获取服务群组名称，请参见[ListServices ](~~412109~~)。
     * @example `foo`
     */
    "GroupName"?: string;
    /**
     * Band成员服务对应的主服务ID。
     * @example `eas-m-ijafy3c8cxxxx`
     */
    "ParentServiceUid"?: string;
    /**
     * 服务类型，取值如下：
     * - Async
     * - Standard
     * - Offline Task
     * - Proxima
     * @example `Standard`
     */
    "ServiceType"?: string;
    /**
     * 按标签过滤。
     */
    "Label"?: any;
    /**
     * 服务运行的状态。
     * @example `Running`
     */
    "ServiceStatus"?: string;
    /**
     * 服务名。
     * @example `echo_test`
     */
    "ServiceName"?: string;
    /**
     * 服务UID。
     * @example `eas-m-c9iw3yitxxxx`
     */
    "ServiceUid"?: string;
    /**
     * 服务所属的资源组名称或ID。
     * @example `eas-r-hd0qwy8cxxxx`
     */
    "ResourceName"?: string;
    /**
     * 工作空间ID。
     * @example `1234**`
     */
    "WorkspaceId"?: string;
    /**
     * 配额ID。
     * @example `quota1****`
     */
    "QuotaId"?: string;
}
