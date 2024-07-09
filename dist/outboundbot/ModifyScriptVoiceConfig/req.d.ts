export interface ModifyScriptVoiceConfigRequest {
    /**
     * 实例id
     * @example `bdd49242-114c-4045-b1d1-25ccc1756c75`
     */
    "InstanceId": string;
    /**
     * 话术id
     * @example `1d7a26e0-628b-4c3c-9918-7f2e23273f54`
     */
    "ScriptId": string;
    /**
     * 录音配置id
     * @example `e15cc646-50e5-4bc0-87ec-e4f2d1063b90`
     */
    "ScriptVoiceConfigId": string;
    /**
     * 录音类型，TTS 或者 WAVEFORM
     * @example `WAVEFORM`
     */
    "Type": string;
    /**
     * 话术文本和录音的对应关系
     * @example `[{"ScriptContent":"请问你是","ScriptWaveformId":"07db2f0a-acb2-4e68-b9f4-66397414f50c"},{"ScriptContent":"吗？","ScriptWaveformId":"c2a69440-03e3-406e-b0a9-a9791fccb31b"}]`
     */
    "ScriptWaveformRelation"?: string;
}
