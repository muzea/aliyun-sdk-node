export interface LookupEventsRequest {
    /**
     * 用于请求下一页检索的结果。
     * > 请求参数必须保证和上次请求一致。
     * @example `eyJhY2NvdW50IjoiMTQyNDM3OTU4NjM4NzE2MSIsImV2ZW50SWQiOiI3MkJDRTExRi02OTU3LTQ0NUItQjY0MC1CNEUyMkM4NUEwQzgiLCJsb2dJZCI6IjgyLTE0MjQzNzk1ODYzODcxNjEiLCJ0aW1lIjoxNjAyMzExNTQwMD****`
     */
    "NextToken"?: string;
    /**
     * 允许返回的最大结果数目。
     * 取值范围：1~50。
     * @example `20`
     */
    "MaxResults"?: string;
    /**
     * 检索事件的开始时间，默认为当前时间7天前的时间点。日期格式按照ISO8601标准，并使用UTC时间。格式为：`YYYY-MM-DDThh:mm:ssZ`。
     * @example `2020-10-08T11:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 检索事件的结束时间，默认为当前时间点。日期格式按照ISO8601标准，并使用UTC时间。格式为：`YYYY-MM-DDThh:mm:ssZ`。
     * @example `2020-10-15T11:00:00Z`
     */
    "EndTime"?: string;
    /**
     * 检索事件的读取顺序，取值：
     * - FORWARD：正序。
     * - BACKWARD（默认值）：反序。
     * @example `BACKWARD`
     */
    "Direction"?: string;
    /**
     * 检索条件。
     */
    "LookupAttribute"?: {
        /**
         * 检索条件的Key。取值：
         * - ServiceName：云服务名称。
         * - EventName：事件名称。
         * - User：调用者名称，即RAM用户。
         * - EventId：事件ID。
         * - ResourceType：资源类型。
         * - ResourceName：资源名称。
         * - EventRW：请求事件的读写类型。
         * - EventAccessKeyId：事件的AccessKey ID。
         * - SensitiveAction：敏感事件。
         * > 一次只能指定一个检索条件。
         * @example `ServiceName`
         */
        Key: string;
        /**
         * 检索条件的Value。取值：
         * - 当LookupAttribute.N.Key取值为ServiceName时，取值示例：`Ecs`。
         * - 当LookupAttribute.N.Key取值为EventName时，取值示例：`ConsoleSignin`。
         * - 当LookupAttribute.N.Key取值为User时，取值示例：`Alice`。
         * - 当LookupAttribute.N.Key取值为EventId时，取值示例：`B702AFA3-FD4B-40E3-88E4-C0752FAA****`。
         * - 当LookupAttribute.N.Key取值为ResourceType时，取值示例：`ACS::ECS::Instance`。
         * - 当LookupAttribute.N.Key取值为ResourceName时，取值示例：`i-bp14664y88udkt45****`。
         * - 当LookupAttribute.N.Key取值为EventRW时，取值：`Read`（读类型）、`Write`（写类型）。
         * - 当LookupAttribute.N.Key取值为EventAccessKeyId时，取值示例：`LTAI4FoDkCf4DU1bic1V****`。
         * - 当LookupAttribute.N.Key取值为SensitiveAction时，取值示例：`true`（是）。
         * @example `Ecs`
         */
        Value: string;
    }[];
}
