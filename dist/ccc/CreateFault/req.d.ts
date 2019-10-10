interface CreateFaultRequest {
    "RegionId"?: string;
    "InstanceId": string;
    "AgentId": number;
    "ConnectId": string;
    "StartTime": number;
    "EndTime": number;
    "AgentOssFileName"?: string;
    "AgentFilePath"?: string;
    "CustomOssFileName"?: string;
    "CustomFilePath"?: string;
    "Description"?: string;
    "ClientIp"?: string;
    "ClientPort"?: string;
    "OperatingSystemVersion"?: string;
    "BrowserVersion"?: string;
    "MicrophoneList"?: string;
    "MicrophoneEquipment"?: string;
    "SpeakerList"?: string;
    "SpeakerEquipment"?: string;
    "ServiceIp"?: string;
    "ServicePort"?: string;
}
export { CreateFaultRequest };