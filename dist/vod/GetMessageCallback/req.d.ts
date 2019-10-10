interface GetMessageCallbackRequest {
    "RegionId"?: string;
    "OwnerId"?: string;
    /**
    * 资源所有者ID。
    * @example `346`
    */ "ResourceRealOwnerId"?: number;
    /**
    * 应用ID，不传时为系统默认应用的ID，即**app-1000000**。
    * @example `app-1000000`
    */ "AppId"?: string;
}
export { GetMessageCallbackRequest };