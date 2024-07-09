export interface PreloadVodObjectCachesRequest {
    /**
     * 预热文件URL。多个URL使用换行符（\n或\r\n）分隔。
     * @example `vod.test.com/test.txt`
     */
    "ObjectPath": string;
    /**
     * 预热区域，取值：**domestic**, **overseas**。
     * @example `domestic`
     */
    "Area"?: string;
    /**
     * 是否直接预热到L2节点。取值：
     * - **true**：代表预热的节点层级必须包含L2节点。
     * - **false**：代表仅预热回源层节点（false为默认值，回源层节点可能是L2节点，也可能是L3节点）。
     * @example `true`
     */
    "L2Preload"?: boolean;
    /**
     * 预热请求默认携带的header是Accept-Encoding:gzip，如果您需要预热请求携带其他header，或者实现多副本预热，那么可以使用该参数来实现自定义预热header。用JSON串格式提交。
     * @example `{
          "Accept-Encoding": [
                "gzip, deflate, br"
          ]
    }`
     */
    "WithHeader"?: string;
}
