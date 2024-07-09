export interface DeleteMPULayoutRequest {
    /**
     * 应用ID。仅支持传单个ID，您可以在控制台创建和查询。
     * @example `yourAppId`
     */
    "AppId": string;
    /**
     * 布局ID。仅支持传单个ID，获取布局ID，请参见[CreateMPULayout](~~162192~~)。
     * @example `2`
     */
    "LayoutId": number;
}
