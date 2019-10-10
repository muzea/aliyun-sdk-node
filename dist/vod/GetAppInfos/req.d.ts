interface GetAppInfosRequest {
    "RegionId"?: string;
    /**
    * 应用ID列表，最多支持10个，多个使用英文逗号分隔。
    * @example `app-xxxxx`
    */ "AppIds": string;
    "OwnerId"?: number;
    "ResourceRealOwnerId"?: number;
}
export { GetAppInfosRequest };