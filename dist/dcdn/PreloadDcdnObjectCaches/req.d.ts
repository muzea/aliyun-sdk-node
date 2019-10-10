interface PreloadDcdnObjectCachesRequest {
    "RegionId"?: string;
    /**
    * 多个URL用换行符（\n）或（\r\n）分隔。
    * @example `example.com/image/1.png`
    */ "ObjectPath": string;
    "OwnerId"?: number;
    /**
    * 预热区域。取值范围：
    * - **domestic**
    * - **overseas**
    * @example `domestic`
    */ "Area"?: string;
}
export { PreloadDcdnObjectCachesRequest };