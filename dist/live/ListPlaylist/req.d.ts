export interface ListPlaylistRequest {
    /**
     * 节目单ID。如果填此参数，则返回该节目单信息。若不填，默认返回该用户所有节目单信息。
     * 如果您通过[AddPlaylistItems接口](~~203414~~)添加节目单项，请查看AddPlaylistItems接口调用返回的参数ProgramId值。
     * @example `c09f3d63-eacf-4fbf-bd48-a07a6ba7****`
     */
    "ProgramId"?: string;
    /**
     * 查询分页页数。
     * @example `1`
     */
    "Page"?: number;
    /**
     * 查询分页每页数量。
     * @example `20`
     */
    "PageSize"?: number;
}
