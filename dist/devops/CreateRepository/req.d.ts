export interface CreateRepositoryRequest {
    /**
     * 个人访问令牌。
     * 使用阿里云AK+SK或使用STS临时授权方式不需要传该字段
     * @example `f0b1e61db5961df5975a93f9129d2513`
     */
    "accessToken"?: string;
    /**
     * 是否同步执行创建仓库
     * 可选值：true / false
     * @example `false`
     */
    "sync"?: boolean;
    /**
     * 是否创建父目录
     * 可选值：true / false
     * @example `true`
     */
    "createParentPath"?: boolean;
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `60de7a6852743a5162b5f957`
     */
    "organizationId": string;
    /**
     * 请求Body
     */
    "body": {
        /**
         * 代码库名称
         * @example `Demo库`
         */
        name: string;
        /**
         * 代码库路径
         * @example `Demo库（与name保持同层级，name与path的值可以不同，若带上了父路径，那么需要设置createParentPath字段为true，且父路径前面不加斜杠，如 parentPath/demo）`
         */
        path: string;
        /**
         * 代码库父路径id
         * @example `2022（需要保证当前用户在父路径下有创建代码库的权限；若需要创建父路径，那么namespaceId需要设置为企业的空间ID）`
         */
        namespaceId: number;
        /**
         * 代码库描述
         * @example `测试内容`
         */
        description: string;
        /**
         * 代码仓库可见性
         * 0 - 私有，仅代码库成员可见
         * 10 - 企业内公开，企业成员可见
         * @example `0`
         */
        visibilityLevel: number;
        /**
         * 待导入代码库地址（http协议），例如github平台上的代码库地址
         * @example `https://github.com/a/b.git`
         */
        importUrl: string;
        /**
         * 导入时使用的账号
         * @example `codeup-test`
         */
        importAccount: string;
        /**
         * 导入时账号的token
         * @example `xxxxx`
         */
        importToken: string;
        /**
         * importToken字段的传输格式，使用明文或rsa加密
         * 可选值：text（明文） / rsa（rsa加密）
         * @example `text`
         */
        importTokenEncrypted: string;
        /**
         * 是否导入示例项目
         * 可选值：true / false
         * @example `true`
         */
        importDemoProject: boolean;
        /**
         * 代码库头像地址
         * @example `https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c3f67f1bea827c4/w/100/h/100`
         */
        avatarUrl: string;
        /**
         * 自动创建readme类型
         * EMPTY - 仅创建README.md
         * USER_GUIDE - 包含新手引导
         * @example `USER_GUIDE`
         */
        readmeType: string;
        /**
         * 导入代码库类型
         * GIT - Git库
         * SVN - SVN库
         * @example `GIT`
         */
        importRepoType: string;
        /**
         * 初始化标准智能化服务
         * 可选值：true / false
         * @example `true`
         */
        initStandardService: boolean;
        /**
         * gitignore模板类型
         * @example `Java`
         */
        gitignoreType: string;
        /**
         * 是否启用加密
         * 可选值：true / false
         * @example `false`
         */
        isCryptoEnabled: boolean;
        /**
         * 本地导入代码库的远程地址
         * @example `""`
         */
        localImportUrl: string;
    };
}
