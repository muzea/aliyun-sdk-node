export interface DeleteLiveSnapshotFilesResponse {
    /**
     * 请求ID。
     * @example `****2876-6263-4B75-8F2C-CD0F7FCF****`
     */
    RequestId: string;
    /**
     * 删除结果列表。
     */
    DeleteFileResultList: {
        /**
         * OK表示删除成功，其他表示删除失败。
         * @example `OK`
         */
        Result: string;
        /**
         * 创建时间戳。
         * @example `1660638613798`
         */
        CreateTimestamp: number;
    }[];
}
