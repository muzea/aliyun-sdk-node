interface CreateCADConversionTaskRequest {
    "RegionId"?: string;
    "SrcUri": string;
    "TgtUri": string;
    "Project": string;
    "TgtType"?: string;
    "NotifyTopicName"?: string;
    "NotifyEndpoint"?: string;
    "SrcType"?: string;
    "ZoomFactor"?: number;
    "ZoomLevel"?: number;
    "UnitHeight"?: number;
    "UnitWidth"?: number;
    "BaseRow"?: number;
    "BaseCol"?: number;
    "Thumbnails"?: boolean;
    "ModelId"?: string;
}
export { CreateCADConversionTaskRequest };