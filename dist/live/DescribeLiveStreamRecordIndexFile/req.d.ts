export interface DescribeLiveStreamRecordIndexFileRequest {
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
     * 索引文件ID。
     * @example `c4d7f0a4-b506-43f9-8de3-07732c3f****`
     */
    "RecordId": string;
}
