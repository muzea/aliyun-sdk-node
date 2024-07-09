export interface QueryDBBackupCollectionsResponse {
    /**
     * 唯一请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 已备份的集合列表。
     */
    Collections: string[];
}
