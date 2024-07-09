export interface AddCasterEpisodeGroupContentResponse {
    ItemIds: {
        ItemId: string[];
    };
    /**
     * 节目单ID。可作为创建或添加节目单项，删除节目单项，查询节目单项，编辑节目单，删除节目单，查询节目单，启动节目单，停止节目单的请求参数。
     * @example `16A96B9A-F203-4EC5-8E43-CB92E68X****`
     */
    ProgramId: string;
    /**
     * 请求ID。
     * @example `16A96B9A-F203-4EC5-8E43-CB92E68F4CD8`
     */
    RequestId: string;
}
