export interface CreateRtmpDeviceRequest {
    "PullKeyExpireTime"?: number;
    "Description"?: string;
    "ProductKey": string;
    "DeviceName"?: string;
    "IotInstanceId": string;
    "PushKeyExpireTime"?: number;
    "PushAuthKey"?: string;
    "PullAuthKey"?: string;
    "SubStreamName"?: string;
}
