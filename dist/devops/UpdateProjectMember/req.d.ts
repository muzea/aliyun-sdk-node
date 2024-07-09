export interface UpdateProjectMemberRequest {
    /**
     * 企业标识，也称企业id，字符串形式，可在云效访问链接中获取，如https:// devops.aliyun.com/organization/【OrganizationId】
     * @example `5ebbc0228123212b59xxxxx`
     */
    "organizationId": string;
    /**
     * 添加的用户信息
     */
    "body": {
        /**
         * 角色id，例如管理员：project.admin，参与人：project.participant，或者其他自定义角色，id可以从https:// devops.aliyun.com/projex/api/workspace/role/list?targetType=Space&targetIdentifier=【spaceIdentifier】接口中获取到，其中spaceIdentifier为需要查询的项目id
         * @example `project.admin`
         */
        roleIdentifier: string;
        /**
         * 用户aliyunPk，也就是阿里云账号Id
         * @example `19xx7043xxxxxxx914`
         */
        userIdentifier: string;
        /**
         * 用户类型，这里为单用户user
         * @example `user`
         */
        userType: string;
        /**
         * 资源类型，这里为Space
         * @example `Space`
         */
        targetType: string;
        /**
         * 资源id，也就是项目id
         * @example `5e70xxxxxxcd000xxxxe96`
         */
        targetIdentifier: string;
    };
    /**
     * 项目id，同spaceIdentifier
     * @example `5e70xxxxxxcd000xxxxe96`
     */
    "projectId": string;
}
