interface QueryAppDeviceListRequest {
    "RegionId"?: string;
    "IotInstanceId"?: string;
    "CurrentPage"?: number;
    "PageSize"?: number;
    "ProductKeyList"?: string[];
    "CategoryKeyList"?: string[];
    "TagList"?: string[];
    "AppKey"?: string;
}
export { QueryAppDeviceListRequest };