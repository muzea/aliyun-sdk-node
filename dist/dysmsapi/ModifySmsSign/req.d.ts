interface ModifySmsSignRequest {
    "RegionId"?: string;
    "SignName": string;
    "SignSource": number;
    "Remark": string;
    "SignFileList": string[];
    "OwnerId"?: number;
}
export { ModifySmsSignRequest };