export interface UpdateRepositoryMemberRequest {
    /**
     * 代码库ID
     * @example `889910`
     */
    "repositoryId": number;
    /**
     * 阿里云账号ID
     * @example `1232456789123467`
     */
    "aliyunPk": string;
    /**
     * 请求入参
     */
    "body"?: {
        /**
         * 权限类型
         * 20-浏览者
         * 30-开发者
         * 40-管理员
         * @example `30`
         */
        accessLevel: number;
        /**
         * 任务过期时间
         * @example `2020-08-08 08:08:08`
         */
        expireAt: string;
        /**
         * 成员类型
         * TEAMS - 部门
         * USERS - 员工
         * @example `USERS`
         */
        memberType: string;
        /**
         * 关联ID
         * @example `10010`
         */
        relatedId: string;
        /**
         * 待修改的目标仓库信息
         */
        relatedInfos: {
            /**
             * 关联id
             * @example `10011`
             */
            relatedId: string;
            /**
             * 关联sourceId
             * @example `24790`
             */
            sourceId: number;
            /**
             * 关联sourceType
             * 可选值：Project / Namespace / Organization
             * @example `Project`
             */
            sourceType: string;
        }[];
    };
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
}
