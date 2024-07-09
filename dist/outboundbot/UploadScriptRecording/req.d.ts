export interface UploadScriptRecordingRequest {
    /**
     * 实例id
     * @example `c209abb3-6804-4a75-b2c7-dd55c8c61b6a`
     */
    "InstanceId": string;
    /**
     * 话术id
     * @example `d004cfd2-6a81-491c-83c6-cbe186620c95`
     */
    "ScriptId": string;
    /**
     * 文件在oss上面的key
     * @example `cab_script_recording/upload/88a56c18-3dc8-4338-9116-911deb169780/hello.wav`
     */
    "FileId": string;
    /**
     * 文件名称
     * @example `hello.wav`
     */
    "FileName": string;
    /**
     * 录音文件的文本内容
     * @example `您好`
     */
    "Content": string;
}
