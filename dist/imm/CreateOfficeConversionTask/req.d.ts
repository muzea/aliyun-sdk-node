interface CreateOfficeConversionTaskRequest {
    "RegionId"?: string;
    "SrcUri": string;
    "TgtUri": string;
    "Project": string;
    "TgtType"?: string;
    "NotifyTopicName"?: string;
    "NotifyEndpoint"?: string;
    "SrcType"?: string;
    "StartPage"?: number;
    "EndPage"?: number;
    "MaxSheetRow"?: number;
    "MaxSheetCol"?: number;
    "MaxSheetCount"?: number;
    "SheetOnePage"?: boolean;
    "ModelId"?: string;
    "Password"?: string;
    "TgtFilePrefix"?: string;
    "TgtFileSuffix"?: string;
    "TgtFilePages"?: string;
    "FitToPagesTall"?: boolean;
    "FitToPagesWide"?: boolean;
    "IdempotentToken"?: string;
}
export { CreateOfficeConversionTaskRequest };