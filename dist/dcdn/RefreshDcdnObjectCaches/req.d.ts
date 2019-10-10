interface RefreshDcdnObjectCachesRequest {
    "RegionId"?: string;
    /**
    * 刷新路径，多个URL用换行符（\n）或（\r\n）分隔。
    * @example `example.com/image/1.png`
    */ "ObjectPath": string;
    "OwnerId"?: number;
    /**
    * 刷新类型。取值范围：
    * - **File**
    * - **Directory**
    * 默认值：**File**
    * @example `File`
    */ "ObjectType"?: string;
}
export { RefreshDcdnObjectCachesRequest };