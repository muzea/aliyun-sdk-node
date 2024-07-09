export interface DeleteLiveAISubtitleRequest {
    /**
     * 字幕模板ID。
     * @example `445409ec-7eaa-461d-8f29-4bec2eb9****`
     */
    "SubtitleId": string;
    /**
     * 字幕模板名称，仅支持数字、大小写字母或短横线-，短横线不和位于首位。
     * @example `sub01`
     */
    "SubtitleName"?: string;
}
