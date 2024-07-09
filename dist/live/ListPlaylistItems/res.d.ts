export interface ListPlaylistItemsResponse {
    /**
     * 节目单项数量。
     * @example `1`
     */
    Total: number;
    /**
     * 请求ID。
     * @example `5c6a2a0d-f228-4a64-af62-20e91b9****`
     */
    RequestId: string;
    /**
     * 节目单列表。
     */
    ProgramItems: {
        /**
         * 编排索引。
         * @example `1`
         */
        Index: number;
        /**
         * 资源类型。
         * @example `vod`
         */
        ResourceType: string;
        /**
         * 节目单项ID。
         * @example `c10f3d63-eacf-4fbf-bd48-a07a6ba7****`
         */
        ProgramItemId: string;
        /**
         * 节目单ID。可作为编辑节目单，删除节目单，查询节目单，启动节目单，停止节目单的请求参数。
         * @example `445409ec-7eaa-461d-8f29-4bec2eb9****`
         */
        ProgramId: string;
        /**
         * 节目单项名称。
         * @example `playlistItem1`
         */
        ProgramItemName: string;
        /**
         * 资源ID。
         * @example `asdfasdf8as9df8sa9df89****`
         */
        ResourceValue: string;
    }[];
}
