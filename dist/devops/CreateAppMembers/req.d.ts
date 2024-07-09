export interface CreateAppMembersRequest {
    /**
     * 企业标识，也称企业id
     * @example `66c0c9fffeb86b450c199fcd`
     */
    "organizationId"?: string;
    /**
     * 应用名
     * @example `testApp`
     */
    "appName"?: string;
    /**
     * 请求结构体
     */
    "body"?: {
        /**
         * 添加成员的角色列表
         */
        roleNames: string[];
        /**
         * 添加的成员列表
         */
        playerList: {
            /**
             * 成员id，类型为User时为成员的阿里云UID
             * @example `1332695887xxxxxx`
             */
            id: string;
            /**
             * 成员类型，目前只支持User
             * @example `User`
             */
            type: string;
        }[];
    };
}
