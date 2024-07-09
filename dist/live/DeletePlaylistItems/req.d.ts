export interface DeletePlaylistItemsRequest {
    /**
     * 节目单ID。如果您通过[AddPlaylistItems接口](~~203414~~)添加节目单项，请查看AddPlaylistItems接口调用返回的参数ProgramId值。
     * @example `445409ec-7eaa-461d-8f29-4bec2eb9****`
     */
    "ProgramId": string;
    /**
     * 节目单项ID列表。
     * @example `["c09f3d63-eacf-4fbf-bd48-a07a6ba7****","c10f3d63-eacf-4fbf-bd48-a07a6ba7****"]`
     */
    "ProgramItemIds": string;
}
