export interface DescribeSystemEventCountRequest {
    /**
     * 云服务名称。
     * 调用DescribeSystemEventMetaList接口，获取返回参数`Product`的值，即可获得当前阿里云账号下所有事件的云服务名称。更多信息，请参见[DescribeSystemEventMetaList](~~114972~~)。
     * @example `ECS`
     */
    "Product"?: string;
    /**
     * 事件类型。
     * 调用DescribeSystemEventMetaList接口，获取返回参数`EventType`的值，即可获得当前阿里云账号下所有云服务的事件类型。更多信息，请参见[DescribeSystemEventMetaList](~~114972~~)。
     * @example `StatusNotification`
     */
    "EventType"?: string;
    /**
     * 事件名称。
     * 调用DescribeSystemEventMetaList接口，获取返回参数`Name`的值，即可获得当前阿里云账号下所有云服务的事件名称。更多信息，请参见[DescribeSystemEventMetaList](~~114972~~)。
     * @example `Instance:StateChange`
     */
    "Name"?: string;
    /**
     * 事件级别。取值：
     * - Critical：严重。
     * - Warn：警告。
     * - Info：信息。
     * 调用DescribeSystemEventMetaList接口，获取返回参数`Level`的值，即可获得当前阿里云账号下所有云服务的事件级别。更多信息，请参见[DescribeSystemEventMetaList](~~114972~~)。
     * @example `Info`
     */
    "Level"?: string;
    /**
     * 事件状态。
     * 调用DescribeSystemEventMetaList接口，获取返回参数`Status`的值，即可获得当前阿里云账号下所有云服务的事件状态。更多信息，请参见[DescribeSystemEventMetaList](~~114972~~)。
     * @example `Normal`
     */
    "Status"?: string;
    /**
     * 应用分组ID。
     * @example `17285****`
     */
    "GroupId"?: string;
    /**
     * 搜索事件内容包含的关键字。取值：
     * - 如果您需要搜索事件的内容中包括a和b，则可以搜索`a and b`。
     * - 如果您需要搜索事件的内容中包括a或b，可以搜索`a or b`。
     * @example `ECS`
     */
    "SearchKeywords"?: string;
    /**
     * 查询事件开始的时间戳。单位：毫秒。
     * @example `1635993541000`
     */
    "StartTime"?: string;
    /**
     * 查询事件结束的时间戳。单位：毫秒。
     * @example `1635993921000`
     */
    "EndTime"?: string;
}
