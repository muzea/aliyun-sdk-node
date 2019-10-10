interface ListFacesRequest {
    "RegionId": string;
    "State": string;
    "StoreName": string;
    "Direction"?: string;
    "Size"?: number;
    "Cursor"?: string;
    "LibraryId"?: string;
    "HasFaceName"?: string;
}
export { ListFacesRequest };