interface SendRoomUserNotificationRequest {
    "RegionId"?: string;
    "RoomId": string;
    "AppUid": string;
    "ToAppUid": string;
    "Data": string;
    "OwnerId"?: number;
    "AppId": string;
    "Priority"?: number;
}
export { SendRoomUserNotificationRequest };