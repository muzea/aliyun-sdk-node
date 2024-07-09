export interface ListFileRequest {
    /**
     * 服务空间ID。
     * @example `0e16bb12-14af-4635-xxxx-5ac1a9a7bb9f`
     */
    "SpaceId": string;
    /**
     * 每页行数，默认值为10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 关键字。
     * @example `关键字1`
     */
    "Keyword"?: string;
    /**
     * 要查询的文件的ID/URL。
     * 支持同时查询多个文件，多个文件ID使用半角逗号（,）分隔。最多可以设置50个文件ID/文件URL。
     * @example `id1`
     */
    "FileId"?: string;
    /**
     * 用来标记当前开始读取的位置。置空表示从头开始。
     * >仅商业版支持该功能
     * @example `CAESBgoEIgIIABgAIrQBCrEBA6wAAAAxTDdmZmZmZmZmZjg5OWJlMzguUzZkNzAyZDY2Mz***`
     */
    "NextToken"?: string;
    /**
     * 文件列表模式，可选值为：
     * - DEFAULT（默认） ：默认模式，所有文件按照上传时间倒序展示。
     * - DIRECTORY：文件夹模式。
     * @example `DIRECTORY`
     */
    "Mode"?: string;
    /**
     * 路径前缀。默认查询根目录。
     * @example `/images`
     */
    "Prefix"?: string;
    /**
     * 鉴权有效时间，单位秒。只有在您开启了CDN配置中的鉴权功能时有效。
     * @example `1800`
     */
    "AuthDelta"?: number;
}
