export interface ListMessageAcksRequest {
    /**
     * 分页每页数据集数。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * iovcc项目工程ID。
     * @example `gsgshhfs`
     */
    "ProjectId": string;
    /**
     * dis系统设备ID。可实现查询结果：
     * 1. 单独DeviceId条件查询时，返回该设备消息ack记录列表。
     * 2. 与MessageId参数联合查询时，返回指定设备指定消息ack记录。
     * @example `fc71429ddd9b473c81d7ef5f33ab10cc`
     */
    "DeviceId"?: string;
    /**
     * 消息id。可实现查询结果：
     * 1. 单独MessageId条件查询时，返回该消息ack记录列表。
     * 2. 与DeviceId参数联合查询时，返回指定设备指定消息ack记录。
     * @example `24266`
     */
    "MessageId"?: number;
    /**
     * 分页查询页码。
     * @example `1`
     */
    "PageIndex"?: number;
}
