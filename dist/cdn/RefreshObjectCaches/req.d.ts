interface RefreshObjectCachesRequest {
    "RegionId"?: string;
    /**
    * 多个URL之间需要用换行符（\n）或（\r\n）分隔。
    * @example `abc.com/image/1.png`
    */ "ObjectPath": string;
    "OwnerId"?: number;
    /**
    * 刷新的类型， 其值可以为**File**或**Directory**。默认值：**File**。
    * @example `File`
    */ "ObjectType"?: string;
}
export { RefreshObjectCachesRequest };