export interface RefreshScdnObjectCachesRequest {
    /**
     * 刷新路径，多个URL之间需要用换行符`（\n或\r\n）`分隔。
     * @example `example.aliyundoc.com/examplefile.txt`
     */
    "ObjectPath": string;
    /**
     * 刷新的类型， 其值可以为**File** | **Directory**，默认是File。
     * @example `File`
     */
    "ObjectType"?: string;
}
