interface FindSimilarFacesRequest {
    "RegionId"?: string;
    "SetId": string;
    "ImageUri"?: string;
    "Project": string;
    "FaceId"?: string;
    "Limit"?: number;
    "MinSimilarity"?: number;
    "ResponseFormat"?: string;
}
export { FindSimilarFacesRequest };