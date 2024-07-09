export interface UpdateRtmpKeyRequest {
    "PullKeyExpireTime"?: number;
    "ProductKey"?: string;
    "DeviceName"?: string;
    "IotInstanceId": string;
    "PushKeyExpireTime"?: number;
    "PushAuthKey"?: string;
    "IotId"?: string;
    "PullAuthKey"?: string;
}
