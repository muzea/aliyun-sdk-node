export interface ExportClientEventsRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 终端用户ID。
     * @example `user01`
     */
    "EndUserId"?: string;
    /**
     * 云桌面ID。
     * @example `ecd-gx2x1dhsmucyy****`
     */
    "DesktopId"?: string;
    /**
     * 云桌面名称。
     * @example `testName`
     */
    "DesktopName"?: string;
    /**
     * 工作区ID。
     * @example `cn-hangzhou+dir-363353****`
     */
    "OfficeSiteId"?: string;
    /**
     * 工作区名称。
     * @example `test`
     */
    "OfficeSiteName"?: string;
    /**
     * 要查询的事件类型。当EventTypes不为空时，则以EventTypes组合类型为查询过滤条件。当EventTypes为空，且EventType为空，则查询所有事件。
     * @example `CLIENT_LOGIN`
     */
    "EventType"?: string;
    /**
     * 开始时间。按照[ISO 8601](~~25696~~)标准表示，并需要使用UTC+0时间，格式为YYYY-MM-DDThh:mm:ssZ。
     * 如果不填，则按`EndTime`指定的时间往前查询。
     * @example `2022-03-23T04:10:21Z`
     */
    "StartTime"?: string;
    /**
     * 结束时间。按照[ISO 8601](~~25696~~)标准表示，并需要使用UTC+0时间，格式为YYYY-MM-DDThh:mm:ssZ。
     * 如果不填，则按当前时间。
     * @example `2022-03-23T07:11:01Z`
     */
    "EndTime"?: string;
    /**
     * 要查询的事件类型组合，可以多个事件组合，查询结果包含所有组合的事件。
     */
    "EventTypes"?: string[];
    /**
     * 前端页面显示的语言类型，后端根据该语言类型设置导出文件的语言类型。可选值及其含义：
     * - `zh-CN`：简体中文
     * - `en-GB`：英语（英国）
     * 默认值：`zh-CN`。
     * @example `zh-CN`
     */
    "LangType"?: string;
    /**
     * 导出的记录数量。
     * 最大值：5000。
     * 默认值：5000。
     * @example `50`
     */
    "MaxResults"?: number;
}
