export interface RefreshErObjectCachesRequest {
    /**
     * 刷新URL。
     * >- 多个URL之间用换行符（\n）或（\r\n）分隔，ObjectPath的单条长度最长为1024个字符。
     * >- 一次请求中的URL都必须属于同一个域名。
     * >- 一次请求最多包含1000条URL。
     * @example `http://example.com/examplefile.txt`
     */
    "ObjectPath": string;
    /**
     * 刷新类型。取值范围：
     * - **File**（默认值）：URL。
     * - **Directory**：目录。
     * - **Regex**：正则刷新。
     * - **IgnoreParams**：去参数刷新。去参数指的是去除请求URL中`?`及`?`之后的参数，去参数刷新指的是用户先通过接口提交去参数后的URL，然后用户提交的待刷新URL将会与已缓存资源的URL进行去参数匹配，如果已缓存资源的URL去参数以后与待刷新URL匹配，那么CDN节点将对缓存资源执行刷新处理。
     * >目录刷新默认采用标记资源过期的处理方式，不支持删除目录。目录刷新会将节点上对应目录置为过期，后续有用户访问时，DCDN节点将会回源站校验目录是否更新，有更新时从源站重新拉取新版本返回给用户，未有更新时源站响应304状态码。
     * @example `File`
     */
    "ObjectType": string;
    /**
     * 合并刷新域名，刷新的时候会合并域名的调度域节点进行刷新。
     * >多个域名之间用英文逗号（,）隔开。
     * @example `a.test.com,b.test.com`
     */
    "MergeDomainName"?: string;
    /**
     * 边缘函数脚本的程序ID，也叫函数ID，由"Name.Subdomain"组合而成，作为客户边缘函数代码的唯一标识。
     * @example ` test.mysubdomain`
     */
    "RoutineId"?: string;
    /**
     * 当回源内容和源站资源对比后不一致时，是否刷新对应目录下的资源。默认为false。
     * - **true**：刷新对应目录下的全部资源。
     * - **false**：刷新对应目录下发生变更的资源。
     * @example `false`
     */
    "Force"?: boolean;
}
