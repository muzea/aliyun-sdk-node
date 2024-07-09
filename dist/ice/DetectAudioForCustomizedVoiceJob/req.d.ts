export interface DetectAudioForCustomizedVoiceJobRequest {
    /**
     * 人声 Id
     * @example `xiaozhuan`
     */
    "VoiceId": string;
    /**
     * 录音文件 URL 地址
     * ><notice>必须是您账号下的 OSS 地址，并且 OSS Bucket 的所在区域要与调用本接口时服务所在的区域相同></notice>
     * ><notice>音频格式要求：音频文件必须是 wav 或 pcm 格式，且为单声道（mono）16 bit 采样位数音频。音频采样率为 48000 Hz></notice>
     * @example `https://your-bucket.oss-cn-hangzhou.aliyuncs.com/record1.wav`
     */
    "RecordUrl": string;
    /**
     * RecordUrl 对应的音频序号
     * @example `1`
     */
    "AudioRecordId": number;
}
