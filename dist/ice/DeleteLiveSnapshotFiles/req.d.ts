export interface DeleteLiveSnapshotFilesRequest {
    /**
     * 截图任务ID。
     * @example `****a046-263c-3560-978a-fb287782****`
     */
    "JobId": string;
    /**
     * 创建时间戳列表。单次最多删除200个。
     */
    "CreateTimestampList": number[];
    /**
     * 是否删除原始文件，默认是false。
     * @example `true`
     */
    "DeleteOriginalFile"?: boolean;
}
