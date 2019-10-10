interface GetPictureSearchResultsRequest {
    "RegionId": string;
    "VcsId": string;
    "AlgorithmType": string;
    "PictureContents"?: string;
    "TopNum"?: number;
    "PageNum"?: number;
    "BeginTime"?: string;
    "EndTime"?: string;
    "DeviceList"?: string;
}
export { GetPictureSearchResultsRequest };