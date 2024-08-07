export interface GetMediaRefreshJobsRequest {
    /**
     * 音/视频刷新或预热的任务ID，为[提交音视频刷新或预热任务](~~431095~~)接口返回参数MediaRefreshJobId的值。
     * @example `41d465e31957****`
     */
    "MediaRefreshJobId": string;
    /**
     * 音/视频ID，为[提交音视频刷新或预热任务](~~431095~~)时传入的`MediaIds`，只能设置一个音/视频ID。
     * 若不传入本参数，则查询`MediaRefreshJobId`下所有音/视频的任务信息；若传入本参数，则只查询`MediaRefreshJobId`下该音/视频ID所对应的任务信息。
     * @example `ca3a8f6e4957b658067095869****`
     */
    "MediaId"?: string;
}
