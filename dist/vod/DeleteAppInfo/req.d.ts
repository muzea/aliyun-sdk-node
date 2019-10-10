interface DeleteAppInfoRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    "ResourceRealOwnerId"?: number;
    /**
    * 应用ID。
    * @example `app-xxxxx`
    */ "AppId"?: string;
}
export { DeleteAppInfoRequest };