export interface SuspendJobRequest {
    /**
     * 任务模板ID。
     * @example `ee1a7a07-abcb-4652-a1d3-2d57f415****`
     */
    "AppId": string;
    /**
     * 是否暂停任务模板。
     * @example `true`
     */
    "Suspend": boolean;
}
