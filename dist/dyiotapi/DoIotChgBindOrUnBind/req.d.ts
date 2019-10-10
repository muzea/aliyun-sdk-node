interface DoIotChgBindOrUnBindRequest {
    "RegionId"?: string;
    "Iccid": string;
    "Imei": string;
    "OpionType": string;
    "OwnerId"?: number;
    "NewImei"?: string;
    "MidChannelId"?: string;
}
export { DoIotChgBindOrUnBindRequest };