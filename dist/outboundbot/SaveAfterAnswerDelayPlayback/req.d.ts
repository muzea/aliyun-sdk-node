export interface SaveAfterAnswerDelayPlaybackRequest {
    /**
     * 实例id
     * @example `980116ec-2d3d-4747-8059-dc25e7af8501`
     */
    "EntryId": string;
    /**
     * 策略级别
     * @example `2`
     */
    "StrategyLevel"?: number;
    /**
     * 延迟播报的播放时间
     * @example `1000`
     */
    "AfterAnswerDelayPlayback"?: number;
}
