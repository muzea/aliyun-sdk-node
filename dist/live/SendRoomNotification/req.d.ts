interface SendRoomNotificationRequest {
    "RegionId"?: string;
    "RoomId": string;
    "Data": string;
    "OwnerId"?: number;
    "AppId": string;
    "AppUid"?: string;
    "Priority"?: number;
}
export { SendRoomNotificationRequest };