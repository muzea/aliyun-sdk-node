export interface DescribeRecordingRequest {
    /**
     * 实例id
     * @example `7cefbff0-8d50-4d6f-b93c-73cee23c1555`
     */
    "InstanceId": string;
    /**
     * 会话id
     * @example `abb4aa26-3a8e-43dd-82f8-0c3898c9c67f`
     */
    "ConversationId": string;
    "NeedVoiceSliceRecording"?: boolean;
}
