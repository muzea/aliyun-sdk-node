export interface UpdateRepositoryRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `60de7a6852743a5162b5f957`
     */
    "organizationId": string;
    /**
     * 个人访问令牌。
     * 使用阿里云AK+SK或使用STS临时授权方式不需要传该字段
     * @example `c3c09f1230187a879678da43c973d069`
     */
    "accessToken"?: string;
    /**
     * 代码库ID
     * @example `2080398`
     */
    "repositoryId": number;
    /**
     * 请求Body
     */
    "body"?: {
        /**
         * 代码库ID
         * @example `2080398`
         */
        id: number;
        /**
         * 代码库名称
         * @example `codeup`
         */
        name: string;
        /**
         * 代码库路径
         * @example `codeup-demo`
         */
        path: string;
        /**
         * 代码库描述
         * @example `codeup描述信息`
         */
        description: string;
        /**
         * 默认分支
         * @example `master`
         */
        defaultBranch: string;
        /**
         * 是否开启issues
         * 可选值：true / false
         * @example `true`
         */
        issuesEnabled: boolean;
        /**
         * 是否开启代码合并
         * 可选值：true / false
         * @example `true`
         */
        mergeRequestsEnabled: boolean;
        /**
         * 是否开启构建
         * 可选值：true / false
         * @example `true`
         */
        buildsEnabled: boolean;
        /**
         * 是否开启wiki
         * 可选值：true / false
         * @example `true`
         */
        wikiEnabled: boolean;
        /**
         * 是否开启snippets
         * @example `false`
         */
        snippetsEnabled: boolean;
        /**
         * 代码仓库可见性
         * 0：私有，仅代码库成员可见
         * 10：企业内公开，企业成员可见
         * @example `0`
         */
        visibilityLevel: number;
        /**
         * 是否检查邮箱
         * 可选值：true / false
         * @example `true`
         */
        checkEmail: boolean;
        /**
         * 头像地址
         * @example `https://xxxx`
         */
        avatar: string;
        /**
         * 是否开启克隆下载控制
         * 可选值：true / false
         * @example `false`
         */
        openCloneDownloadControl: boolean;
        /**
         * 被允许的拉取代码角色列表
         */
        projectCloneDownloadRoleList: {
            /**
             * 角色代码
             * 15：空间成员
             * 60：空间管理员
             * 70：空间拥有者
             * @example `15`
             */
            roleCode: number;
            /**
             * 是否允许
             * 可选值：true / false
             * @example `true`
             */
            allowed: boolean;
        }[];
        /**
         * 被允许的拉取代码方法列表
         */
        projectCloneDownloadMethodList: {
            /**
             * clone下载权限码
             * `project:ssh-clone` ：允许ssh clone
             * `project:http-clone`：允许http clone
             * `project:download`：允许下载
             * @example `project:download`
             */
            permissionCode: string;
            /**
             * 是否允许
             * 可选值：true / false
             * @example `true`
             */
            allowed: boolean;
        }[];
        /**
         * 仓库主要编程语言（需管理员权限）
         * @example `Java`
         */
        adminSettingLanguage: string;
    };
}
