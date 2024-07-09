export interface SendLiveSnapshotJobCommandRequest {
    /**
     * 截图任务ID。
     * @example `****a046-263c-3560-978a-fb287782****`
     */
    "JobId": string;
    /**
     * 操作指令：start，stop，restart。
     * @example `start`
     */
    "Command": string;
}
