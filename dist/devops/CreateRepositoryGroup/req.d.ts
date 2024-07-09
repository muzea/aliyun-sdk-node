export interface CreateRepositoryGroupRequest {
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
     * 请求Body
     */
    "body": {
        /**
         * 代码组名称
         * @example `test-create-group`
         */
        name: string;
        /**
         * 代码组路径
         * @example `test-create-group`
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
         * 父路径ID
         * @example `26842`
         */
        parentId: number;
        /**
         * 代码组的描述信息
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
