export interface DeleteSnapshotFilesResponse {
    /**
     * 删除截图失败的数量。
     * @example `1`
     */
    FailureCount: number;
    /**
     * 请求ID。
     * @example `90F60327-ABEC-5A93-BF1F-****`
     */
    RequestId: string;
    SnapshotDeleteInfoList: {
        /**
         * 快照删除信息列表。
         */
        SnapshotDeleteInfo: {
            /**
             * 请求被删除的截图生成毫秒级时间戳。
             * @example `1653641526637`
             */
            CreateTimestamp: number;
            /**
             * 对每个截图的处理结果。取值：
             * - **OK**：删除成功。
             * - **FileNotFound**：未找到该截图文件。
             * @example `OK`
             */
            Message: string;
        }[];
    };
    /**
     * 删除截图成功的数量。
     * @example `1`
     */
    SuccessCount: number;
}
