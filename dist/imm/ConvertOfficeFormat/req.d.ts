interface ConvertOfficeFormatRequest {
    "RegionId"?: string;
    "SrcUri": string;
    "TgtUri": string;
    "Project": string;
    "TgtType"?: string;
    "ExternalID"?: string;
    "ImageSpec"?: string;
    "SrcType"?: string;
    "StartPage"?: number;
    "EndPage"?: number;
    "MaxSheetRow"?: number;
    "MaxSheetCol"?: number;
    "MaxSheetCount"?: number;
    "SheetOnePage"?: boolean;
    "ModelId"?: string;
    "Password"?: string;
}
export { ConvertOfficeFormatRequest };