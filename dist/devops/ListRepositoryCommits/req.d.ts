export interface ListRepositoryCommitsRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `60de7a6852743a5162b5f957`
     */
    "organizationId": string;
    /**
     * 个人访问令牌。
     * 使用阿里云AK+SK或使用STS临时授权方式不需要传该字段
     * @example `f0b1e61db5961df5975a93f9129d2513`
     */
    "accessToken"?: string;
    /**
     * 代码库ID
     * @example `2334743`
     */
    "repositoryId": number;
    /**
     * 分支名称、标签名称或CommitID，默认为代码库库默认分支
     * @example `master 或 tag1.0或 sjjfssa`
     */
    "refName": string;
    /**
     * 起始时间
     * @example `2022-03-18 08:00:00`
     */
    "start"?: string;
    /**
     * 结束时间
     * @example `2022-08-18 08:00:00`
     */
    "end"?: string;
    /**
     * 页码
     * 默认值为1，从第1页开始
     * @example `1`
     */
    "page"?: number;
    /**
     * 每页大小
     * 默认值为20，取值范围【1,100】
     * @example `20`
     */
    "pageSize"?: number;
    /**
     * 代码仓库内的文件路径，获取该路径下的文件目录，默认获取代码库文件树的全部结构
     * @example `src/cpp/main.cpp`
     */
    "path"?: string;
    /**
     * 搜索关键字
     * @example `search`
     */
    "search"?: string;
    /**
     * 展示签名
     * 默认值：false
     * @example `false`
     */
    "showSignature"?: boolean;
    /**
     * 展示评论数量
     * 默认值：false
     * @example `false`
     */
    "showCommentsCount"?: boolean;
}
