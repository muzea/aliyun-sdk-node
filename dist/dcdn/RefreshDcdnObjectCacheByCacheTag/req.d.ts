export interface RefreshDcdnObjectCacheByCacheTagRequest {
    /**
     * 加速域名。
     * @example `example.com	`
     */
    "DomainName": string;
    /**
     * 缓存标签。多个用逗号隔开。
     * @example `tag1,tag2`
     */
    "CacheTag": string;
    /**
     * 当回源内容和源站资源对比后不一致时，是否刷新对应目录下的资源。默认为false。
     * - **true**：刷新对应目录下的全部资源。
     * - **false**：刷新对应目录下发生变更的资源。
     * @example `true`
     */
    "Force"?: boolean;
}
