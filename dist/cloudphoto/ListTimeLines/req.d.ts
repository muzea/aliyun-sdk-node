interface ListTimeLinesRequest {
    "RegionId": string;
    "StoreName": string;
    "Direction"?: string;
    "PhotoSize"?: number;
    "Cursor"?: number;
    "TimeLineCount"?: number;
    "TimeLineUnit"?: string;
    "FilterBy"?: string;
    "Order"?: string;
    "LibraryId"?: string;
}
export { ListTimeLinesRequest };