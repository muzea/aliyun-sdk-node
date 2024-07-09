export interface DeleteLiveRecordFilesRequest {
    /**
     * 文件ID集合。
     */
    "RecordIds": string[];
    /**
     * 是否删除OSS中的文件。
     * @example `true`
     */
    "RemoveFile"?: boolean;
}
