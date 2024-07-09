export interface GetLiveRecordTemplateRequest {
    /**
     * 模板ID。
     * @example `69e1f9fe-1e97-11ed-ba64-0c42a1b73d66`
     */
    "TemplateId": string;
    /**
     * 录制任务ID。传入JobId获取该任务使用的模板快照。
     * @example `ab0e3e76-1e9d-11ed-ba64-0c42a1b73d66`
     */
    "JobId"?: string;
}
