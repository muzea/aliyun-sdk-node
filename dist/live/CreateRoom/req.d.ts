interface CreateRoomRequest {
    "RegionId"?: string;
    "RoomId": string;
    "AnchorId": string;
    "OwnerId"?: number;
    "AppId": string;
    "TemplateIds"?: string;
    "UseAppTranscode"?: boolean;
}
export { CreateRoomRequest };