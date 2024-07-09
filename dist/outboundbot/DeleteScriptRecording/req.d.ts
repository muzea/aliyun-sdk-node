export interface DeleteScriptRecordingRequest {
    /**
     * 录音所属实例id
     * @example `1eefcb81-cd58-4143-8180-6a962d79d708`
     */
    "InstanceId": string;
    /**
     * 录音所属场景id
     * @example `dcc42f0d-cfd8-4866-9bbf-002042503745`
     */
    "ScriptId": string;
    /**
     * 录音id列表(JSON格式)
     * @example `[
          "d17d5bfa-4972-4389-9718-f9602edabe48"
    ]`
     */
    "UuidsJson"?: string;
}
