interface ListAppInfoRequest {
    "RegionId"?: string;
    "OwnerId"?: number;
    "ResourceRealOwnerId"?: number;
    /**
    * 应用状态。取值范围：**Normal**（正常），**Disable**（停用）。应用创建后默认为Normal。
    * @example `Normal`
    */ "Status"?: string;
    /**
    * 页号。默认从1开始。
    * @example `1`
    */ "PageNo"?: number;
    /**
    * 每页返回条数。默认值为**10**，最大值为**100**。
    * @example `10`
    */ "PageSize"?: number;
}
export { ListAppInfoRequest };