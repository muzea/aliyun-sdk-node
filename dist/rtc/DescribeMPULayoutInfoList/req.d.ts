export interface DescribeMPULayoutInfoListRequest {
    /**
     * 应用ID。仅支持传单个ID，您可以在控制台创建和查询。
     * @example `yourAppId`
     */
    "AppId": string;
    /**
     * 布局ID。获取布局ID，请参见[CreateMPULayout](~~162192~~).
     * @example `2`
     */
    "LayoutId"?: number;
    /**
     * 布局名称。
     * @example `LayoutName`
     */
    "Name"?: string;
    /**
     * 页码，默认为**1**。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 每页显示数量，默认为**10**。
     * @example `10`
     */
    "PageSize"?: number;
}
