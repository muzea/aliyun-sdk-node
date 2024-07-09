export interface DownloadScriptRecordingRequest {
    /**
     * 实例id
     * @example `b3865dc3-40fa-4afd-9fe4-dc7cda305a24`
     */
    "InstanceId": string;
    /**
     * 录音所在场景id
     * @example `aa279896-64a6-4182-864c-4f2b04ec8d17`
     */
    "ScriptId": string;
    /**
     * 录音唯一ID
     * @example `5feaab8a-97fd-4720-8108-79e017f2d3ac`
     */
    "Uuid": string;
}
