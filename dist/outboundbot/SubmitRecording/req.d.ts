export interface SubmitRecordingRequest {
    /**
     * 实例id
     * @example `af81a389-91f0-4157-8d82-720edd02b66a`
     */
    "InstanceId": string;
    /**
     * 任务id
     * @example `e4e2a770-b97b-465a-80d8-06dca008c503`
     */
    "TaskId": string;
    /**
     * 话术录音数据
     * @example `{"contactId":"3d35c0487cc041abb7ad0ce61752601f","duration":27,"fileName":"ce2659e5-a20b-4f8e-91b5-5cd909c6b96e_3d35c0487cc041abb7ad0ce61752601f.wav","filePath":"oss://ForCompatibility/waveforms/","startTime":1579057583670,"type":"Source"}`
     */
    "ResourceRecording"?: string;
    /**
     * 话术录音数据
     * @example `{"contactId":"3d35c0487cc041abb7ad0ce61752601f","duration":27,"fileName":"ce2659e5-a20b-4f8e-91b5-5cd909c6b96e_3d35c0487cc041abb7ad0ce61752601f.wav","filePath":"oss://ForCompatibility/waveforms/","startTime":1579057583670,"type":"Merged"}`
     */
    "MergedRecording": string;
}
