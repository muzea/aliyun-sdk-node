export interface CreateAudioFileRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 音频展示名，长度为1-32的字符。
     * @example `欢迎语`
     */
    "Name": string;
    /**
     * 音频文件名称，长度为1-32个字符。
     * @example `test-file.wav`
     */
    "AudioFileName": string;
    /**
     * OSS文件的Key，由GetAudioFileUploadParameters接口返回。
     * @example `ccc-test/test-file.wav`
     */
    "OssFileKey": string;
    /**
     * 音频文件用途，默认为General(用于IVR等场景), 其他可选值为HoldMusic(通话保持等待音)。
     * @example `General`
     */
    "Usage"?: string;
}
