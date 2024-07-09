export interface DescribeClientEventsRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云桌面支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 登录用户信息，RAM用户ID或AD用户名。不指定时，表示查询该地域下所有用户的事件。
     * @example `28961708130834****`
     */
    "EndUserId"?: string;
    /**
     * 云桌面ID。不指定时，表示查询该地域下所有云桌面。
     * @example `ecd-8fupvkhg0aayu****`
     */
    "DesktopId"?: string;
    /**
     * 云桌面的IP地址。不指定时，表示查询该地域下所有云桌面的事件。
     * @example `10.10.*.*`
     */
    "DesktopIp"?: string;
    /**
     * 本参数不开放使用。
     * @example `To be hidden.`
     */
    "DirectoryId"?: string;
    /**
     * 云桌面所属的工作区ID。不指定时，表示查询该地域下所有工作区下的用户事件。
     * @example `cn-hangzhou+dir-bh77qa8nmjot4****`
     */
    "OfficeSiteId"?: string;
    /**
     * 要查询的事件类型。当EventTypes不为空时，则以EventTypes组合类型为查询过滤条件。当EventTypes为空，且EventType为空，则查询所有事件。
     * @example `DESKTOP_DISCONNECT`
     */
    "EventType"?: string;
    /**
     * 开始时间。按照[ISO 8601](~~25696~~)标准表示，并需要使用UTC+0时间，格式为YYYY-MM-DDThh:mm:ssZ。
     * 如果不填，则按`EndTime`指定的时间往前查询。
     * @example `2020-11-30T06:32:31Z`
     */
    "StartTime"?: string;
    /**
     * 结束时间。按照[ISO 8601](~~25696~~)标准表示，并需要使用UTC+0时间，格式为YYYY-MM-DDThh:mm:ssZ。
     * 如果不填，则按当前时间。
     * @example `2020-11-31T06:32:31Z`
     */
    "EndTime"?: string;
    /**
     * 分页查询时每页行数。
     * 默认值：100。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 查询凭证（Token），取值为上一次API调用返回的NextToken参数值。
     * @example `AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL****`
     */
    "NextToken"?: string;
    /**
     * 工作区名称。
     * @example `test`
     */
    "OfficeSiteName"?: string;
    /**
     * 云桌面名称。
     * @example `test`
     */
    "DesktopName"?: string;
    /**
     * 要查询的事件类型组合，可以多个事件组合，查询结果包含所有组合的事件。
     */
    "EventTypes"?: string[];
}
