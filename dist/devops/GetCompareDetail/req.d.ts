export interface GetCompareDetailRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 代码库ID
     * @example `2369234`
     */
    "repositoryId": number;
    /**
     * 起始版本（指commitId）
     * @example `c9fb781f3d66ef6ee60bdd5c414f5106454b1426`
     */
    "from": string;
    /**
     * 截止版本（指commitId）
     * @example `b8f6f28520b1936aafe2e638373e19ccafa42b02`
     */
    "to": string;
    /**
     * 是否使用merge-base进行比较
     * @example `false`
     */
    "mergeBase"?: boolean;
    /**
     * 返回的最大文件数量
     * > 限制最大安全返回的文件数量为5000
     * @example `5000`
     */
    "maxDiffFile"?: number;
    /**
     * 返回的最大diff字节数
     * > 限制最大返回的字节数为24MB
     * @example `24 * 1024 * 1024`
     */
    "maxDiffByte"?: number;
}
