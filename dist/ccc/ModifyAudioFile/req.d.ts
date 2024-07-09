export interface ModifyAudioFileRequest {
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
    /**
     * 音频资源ID，唯一标识一个音频文件。
     * @example `acc300c4-75c9-41ba-ba5e-2a365c96c248`
     */
    "AudioResourceId": string;
    /**
     * 音频文件的展示名，长度为1-32个字符，修改音频文件时无法修改展示名，因此此处需要填写音频文件原始的展示名。
     * @example `欢迎语`
     */
    "Name": string;
    /**
     * 待修改的音频文件在OSS中的Key。
     * @example `ccc-test/new-test-file.wav`
     */
    "OssFileKey": string;
    /**
     * 待修改的音频文件名称，可以填写新的音频文件内容。
     * @example `new-test-file.wav`
     */
    "AudioFileName": string;
    /**
     * 音频文件用途，默认为General(用于IVR等场景), 其他可选值为HoldMusic(通话保持等待音)。
     * @example `General`
     */
    "Usage"?: string;
}
