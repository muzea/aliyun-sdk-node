export interface ListMergeRequestFilesReadsRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `60de7a6852743a5162b5f957`
     */
    "organizationId": string;
    /**
     * 个人访问令牌。
     * 使用阿里云AK+SK或使用STS临时授权方式不需要传该字段
     * @example `agp_4d57a6796b3626f52064ab1fba5384a5`
     */
    "accessToken"?: string;
    /**
     * 代码库ID或者全路径
     * @example `2835387 或 codeup/codeup-demo`
     */
    "repositoryIdentity": string;
    /**
     * 合并请求局部ID，表示代码库下的第几个合并请求
     * @example `5`
     */
    "localId": number;
    /**
     * 合并目标的版本业务ID
     * > 关于from和to，在合并请求以及比较相关的接口中，from和to与常识是相反的，即 from应该是合并目标，to才是合并源，该顺序符合实际Git执行时的顺序，页面UI的源和目标实际上是经过处理后的，才会符合直觉。
     * @example `5e733626d53f4b04a6aa0e23d4ff72b8`
     */
    "fromPatchSetBizId": string;
    /**
     * 合并源的版本业务ID
     * > 关于from和to，在合并请求以及比较相关的接口中，from和to与常识是相反的，即 from应该是合并目标，to才是合并源，该顺序符合实际Git执行时的顺序，页面UI的源和目标实际上是经过处理后的，才会符合直觉。
     * @example `513fcfd81a9142d2bb0db4f72c0aa15b`
     */
    "toPatchSetBizId": string;
}
