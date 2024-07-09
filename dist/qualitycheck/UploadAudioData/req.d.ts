export interface UploadAudioDataRequest {
    /**
     * 完整JSON字符串信息，具体内容参见以下详细信息。
     * @example `{“callList”:“xxxxx”}`
     */
    "JsonStr": string;
    /**
     * 业务空间Id，用于区分多业务空间场景下选择指定业务空间，默认为默认业务空间。
     * @example `123456`
     */
    "BaseMeAgentId"?: number;
}
