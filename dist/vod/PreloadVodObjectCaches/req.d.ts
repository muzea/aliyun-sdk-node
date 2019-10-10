interface PreloadVodObjectCachesRequest {
    "RegionId"?: string;
    /**
    * 输入示例：a.com/image/1.png，多个URL间用换行符（\n或\r\n）分隔。
    * @example `vod.test.com/test.txt`
    */ "ObjectPath": string;
    "OwnerId"?: number;
}
export { PreloadVodObjectCachesRequest };