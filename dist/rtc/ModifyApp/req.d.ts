interface ModifyAppRequest {
    "RegionId"?: string;
    /**
    * 应用ID，通过控制台开通创建。
    * @example `yourAppId`
    */ "AppId": string;
    /**
    * 应用名称。
    * @example `yourAppName`
    */ "AppName": string;
    "OwnerId"?: number;
}
export { ModifyAppRequest };