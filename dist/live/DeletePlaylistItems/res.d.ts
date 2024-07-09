export interface DeletePlaylistItemsResponse {
    /**
     * 节目单ID。可作为查询节目单项，编辑节目单，删除节目单，查询节目单，启动节目单，停止节目单的请求参数。
     * @example `445409ec-7eaa-461d-8f29-4bec2eb9****`
     */
    ProgramId: string;
    /**
     * 请求ID。
     * @example `5c6a2a0d-f228-4a64-af62-20e91b96****`
     */
    RequestId: string;
}
