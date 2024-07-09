export interface GetRealtimeInstanceStatesRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 媒体类型，默认是语音(AUDIO)。
     * @example `AUDIO`
     */
    "MediaType"?: string;
}
