export interface DeleteSnapshotFilesRequest {
    /**
     * 需要删除的截图产生的时间戳列表。
     * @example `1653641526637`
     */
    "CreateTimestampList": number[];
    /**
     * 主播流域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 播流所属应用名称。
     * @example `liveApp****`
     */
    "AppName": string;
    /**
     * 播流名称。
     * @example `liveStream****`
     */
    "StreamName": string;
    /**
     * 是否同步删除OSS文件，取值：
     * - **true**：同步删除OSS文件。
     * - **false**：不同步删除OSS文件。
     * @example `true`
     */
    "RemoveFile": boolean;
}
