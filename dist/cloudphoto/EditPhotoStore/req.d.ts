interface EditPhotoStoreRequest {
    "RegionId": string;
    "StoreName": string;
    "AutoCleanEnabled"?: string;
    "AutoCleanDays"?: number;
    "DefaultQuota"?: number;
    "DefaultTrashQuota"?: number;
    "Remark"?: string;
}
export { EditPhotoStoreRequest };