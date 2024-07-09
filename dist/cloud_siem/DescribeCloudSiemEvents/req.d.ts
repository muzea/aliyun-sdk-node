export interface DescribeCloudSiemEventsRequest {
    /**
     * 查询事件的开始时间，精确到毫秒（ms）。
     * @example `1577808000000`
     */
    "StartTime"?: number;
    /**
     * 查询结束时间，精确到毫秒（ms）。
     * @example `1577808000000`
     */
    "EndTime"?: number;
    /**
     * 事件威胁等级，格式为json数组。取值：
     * - serious：高危
     * - suspicious：中危
     * - remind：低危
     * @example `["serious","suspicious","remind"]`
     */
    "ThreadLevel"?: string[];
    /**
     * 事件名称。
     * @example `ECS unusual log in`
     */
    "EventName"?: string;
    /**
     * 事件ID。
     * @example `85ea4241-798f-4684-a876-65d4f0c3****`
     */
    "IncidentUuid"?: string;
    /**
     * 事件关联的资产ID。
     * @example `6c740667-80b2-476d-8924-2e706feb****`
     */
    "AssetId"?: string;
    /**
     * 事件状态。取值：
     * - 0：未处理
     * - 1：处理中
     * - 5：处理失败
     * - 10：已处理
     * @example `0`
     */
    "Status"?: number;
    /**
     * 事件列表排列字段。 取值：
     * - GmtModified：基于事件产生事件排序（默认）
     * - ThreatScore：基于事件威胁评分排序
     * @example `ThreatScore`
     */
    "OrderField"?: string;
    /**
     * 事件列表排列方向。 取值：
     * - desc：降序排列
     * - asc：升序排列
     * @example `desc`
     */
    "Order"?: string;
    /**
     * 列表当前页号，大于等于1。
     * @example `1`
     */
    "CurrentPage": number;
    /**
     * 列表每页条数，最大不超过100。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 视图类型。
     * - 0：当前阿里云账号视图。
     * - 1：企业下所有账号的视图。
     * @example `1`
     */
    "RoleType"?: number;
    /**
     * 管理员切换成其他成员视角的用户ID。
     * @example `113091674488****`
     */
    "RoleFor"?: number;
    /**
     * 威胁分析的数据管理中心所在地。您需要根据资产所在地域，选择管理中心所在地。取值：
     * - cn-hangzhou：资产属于中国内地与中国香港
     * - ap-southeast-1：资产属于海外地域
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
