export interface UpdateGroupRequest {
    /**
     * 企业标识，也称企业ID，字符串形式，可在云效访问链接中获取，如https://devops.aliyun.com/organization/【OrganizationId】
     * @example `1e9903d8b3f1xxxxxf9286ef5`
     */
    "organizationId": string;
    /**
     * 个人访问令牌。
     * 使用阿里云AK+SK或使用STS临时授权方式不需要传该字段
     * @example `f0b1e61dxxxxxxx975a93f9129d2513`
     */
    "accessToken"?: string;
    /**
     * 请求Body
     */
    "body": {
        /**
         * 代码组完整路径（含父路径）
         * @example `org/group/subgroup/here`
         */
        pathWithNamespace: string;
        /**
         * 代码组名称
         * @example `codeup_group`
         */
        name: string;
        /**
         * 代码组路径
         * @example `codeup_group`
         */
        path: string;
        /**
         * 代码组的可见性
         * - 0：私有
         * - 10：企业可见
         * @example `10`
         */
        visibilityLevel: number;
        /**
         * 代码组描述
         * @example `描述信息的具体内容`
         */
        description: string;
        /**
         * 代码组的头像地址
         * @example `https://tcs-devops.aliyuncs.com/thumbnail/112afcb7a6a35c3f67f1bea827c4/w/100/h/100`
         */
        avatarUrl: string;
    };
}
