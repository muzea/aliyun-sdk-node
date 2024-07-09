export interface PreloadScdnObjectCachesRequest {
    /**
     * 多个URL之间需要用换行符（`\n或\r\n`）分隔。
     * @example `example.aliyundoc.com/examplefile.txt`
     */
    "ObjectPath": string;
    /**
     * 预热区域，取值：**domestic**, **overseas**。
     * @example `overseas`
     */
    "Area"?: string;
    /**
     * 是否预热到 L2 Cache。
     * @example `false`
     */
    "L2Preload"?: boolean;
    /**
     * 支持用户自定义预热Header，用JSON串格式提交。
     * @example `{
          "Accept-Encoding": [
                "gzip"
          ]
    }`
     */
    "WithHeader"?: string;
}
