interface AddMediaRequest {
    "RegionId"?: string;
    "FileURL": string;
    "OwnerId"?: number;
    "Title"?: string;
    "Description"?: string;
    "CoverURL"?: string;
    "Tags"?: string;
    "MediaWorkflowId"?: string;
    "MediaWorkflowUserData"?: string;
    "InputUnbind"?: boolean;
    "CateId"?: number;
    "OverrideParams"?: string;
}
export { AddMediaRequest };