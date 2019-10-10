interface CreateTemplateRequest {
    "RegionId"?: string;
    "Type": string;
    "OwnerId"?: number;
    "ShowLog"?: string;
    "Name": string;
    "Description"?: string;
    "Region"?: string;
    "OssBucket"?: string;
    "OssEndpoint"?: string;
    "OssFilePrefix"?: string;
    "StartTime"?: string;
    "EndTime"?: string;
    "Interval"?: number;
    "Retention"?: number;
    "FileFormat"?: string;
    "JpgOverwrite"?: string;
    "JpgSequence"?: string;
    "Mp4"?: string;
    "Flv"?: string;
    "HlsM3u8"?: string;
    "HlsTs"?: string;
    "Callback"?: string;
}
export { CreateTemplateRequest };