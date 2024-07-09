export interface DeleteLiveStreamRecordIndexFilesRequest {
    /**
     * 索引文件ID组。
     * @example `c4d7f0a4-b506-43f9-8de3-07732c3f****`
     */
    "RecordId": string[];
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
     * 是否同步删除OSS文件。取值：
     * - **true**：同步删除OSS文件。
     * - **false**：不同步删除OSS文件。
     * @example `true`
     */
    "RemoveFile": string;
}
