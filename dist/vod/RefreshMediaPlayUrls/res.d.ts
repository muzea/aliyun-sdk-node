export interface RefreshMediaPlayUrlsResponse {
    /**
     * 刷新或预热的任务ID
     * @example `41d465e31957****`
     */
    MediaRefreshJobId: string;
    /**
     * 不存在的音/视频ID列表。
     * @example `ca3a8f6e4957b658067095869****`
     */
    NonExistMediaIds: string;
    /**
     * 被禁止操作的音/视频ID列表，通常是由于没有多应用的权限而导致被禁止操作，更多信息，请参见[多应用](~~113600~~)。
     * @example `a6e49sfgd23p5g9ja7095863****`
     */
    ForbiddenMediaIds: string;
    /**
     * 请求ID。
     * @example `25818875-5F78-4AF6-04D5-D7393642****`
     */
    RequestId: string;
}
