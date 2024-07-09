export interface GetAudioFileDownloadUrlRequest {
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
}
