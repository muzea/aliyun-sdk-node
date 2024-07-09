export interface DeleteLiveRecordFilesResponse {
    /**
     * Id of the request
     * @example `13cbb83e-043c-4728-ac35-*****`
     */
    RequestId: string;
    /**
     * 删除失败的文件列表。
     */
    DeleteFileInfoList: {
        /**
         * 标识删除结果的Code。
         * @example `OK`
         */
        Code: string;
        /**
         * 描述删除结果。
         * @example `OK`
         */
        Message: string;
        /**
         * 被删除的录制的文件的ID。
         * @example `13cbb83e-043c-4728-ac35-*****`
         */
        RecordId: string;
    }[];
    /**
     * 全局返回状态描述。
     * @example `OK`
     */
    Message: string;
}
