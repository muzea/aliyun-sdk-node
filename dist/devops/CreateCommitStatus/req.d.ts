export interface CreateCommitStatusRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 个人访问令牌。
     * 使用阿里云AK+SK或使用STS临时授权方式不需要传该字段
     * @example `f0b1e61db5961df5975a93f9129d2513`
     */
    "accessToken"?: string;
    /**
     * 代码库ID或者全路径
     * @example `2080972`
     */
    "repositoryIdentity": string;
    /**
     * 仅支持提交ID，即Commit SHA
     * @example `e0c1a1299a2656bfc155650bbd2df5e628fa1f4c`
     */
    "sha": string;
    /**
     * 请求Body
     */
    "body"?: {
        /**
         * 写入状态，且仅能填入以下四个字符串，否则会返回错误。
         * - error：异常
         * - failure：失败
         * - pending：运行中
         * - success：成功
         * @example `success`
         */
        state: string;
        /**
         * 提交状态的简要描述，且不能超过3000个字符
         * @example `提交状态描述内容`
         */
        description: string;
        /**
         * 用户自行写入的跳转链接，代码平台仅提供跳转的UI，一般可设置为三方系统的链接
         * @example `xxx`
         */
        targetUrl: string;
        /**
         * 用于区分不同系统写入的字符串标识，会以标题的作用在相应的页面UI处进行展示，默认为default，长度不超过50，且英文大小写不敏感
         * > 该参数在设置卡点和合并请求联动中非常重要，若非测试调试，切勿随意设置。
         * @example `default`
         */
        context: string;
    };
}
