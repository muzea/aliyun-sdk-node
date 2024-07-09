export interface RefreshVodObjectCachesRequest {
    /**
     * 预热文件URL。多个URL使用换行符（\n或\r\n）分隔。
     * @example `abc.com/image/1.png`
     */
    "ObjectPath": string;
    /**
     * 刷新的类型。取值：
     * - **File**（默认值）：文件刷新。
     * - **Directory**：目录刷新。
     * - **Regex**：正则刷新。
     * - **IgnoreParams**：去参数刷新。去参数指的是去除请求 URL 中?及?之后的参数，去参数刷新指的是用户先通过接口提交去参数后的 URL，然后用户提交的待刷新 URL 将会与已缓存资源的 URL 进行去参数匹配，如果已缓存资源的 URL 去参数以后与待刷新 URL 匹配，那么 CDN 节点将对缓存资源执行刷新处理。
     * @example `File`
     */
    "ObjectType"?: string;
    /**
     * 当回源内容和源站资源对比后不一致时，是否刷新对应目录下的资源。默认为 false。
     * - **true**：刷新对应目录下的全部资源。选择
     * “刷新全部资源” 时，如果用户请求的内容匹配到了目录下的资源，CDN 节点将会直接回源拉取新资源返回给用户，并重新缓存该资源。
     * - **false**：刷新对应目录下发生变更的资源。选择 “刷新变更资源” 时，如果用户请求的内容匹配到了目录下的资源，CDN 节点将会回源获取资源的 Last-Modified 信息，若与当前缓存资源一致，则直接返回已缓存资源，若不一致，则回源拉取新资源返回给用户，并重新缓存该资源。
     */
    "Force"?: boolean;
}
