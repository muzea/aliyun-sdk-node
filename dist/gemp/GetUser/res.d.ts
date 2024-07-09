export interface GetUserResponse {
    /**
     * Id of the request
     * @example `c26f36de-1ec8-496a-a828-880676c5ef81`
     */
    requestId: string;
    /**
     * 用户
     */
    data: {
        /**
         * 用户ID
         * @example `63`
         */
        userId: number;
        /**
         * ramId
         * @example `1344383`
         */
        ramId: string;
        /**
         * 是否当前用户
         * @example `true`
         */
        isEditableUser: boolean;
        /**
         * ram 账号类型 0主账号 1子账号
         * @example `SUB`
         */
        accountType: string;
        /**
         * email
         * @example `5678***@qq.com`
         */
        email: string;
        /**
         * 用户昵称
         * @example `张珊`
         */
        username: string;
        /**
         * 用户手机号
         * @example `1390000****`
         */
        phone: string;
        /**
         * 创建时间
         * @example `2021-09-09 09:09:09`
         */
        createTime: string;
        /**
         * 是否关联
         * @example `RELATE`
         */
        isRelated: string;
        /**
         * 所属服务组
         */
        serviceGroups: {
            /**
             * 服务组名称
             * @example `山口组`
             */
            name: string;
            /**
             * 服务组ID
             * @example `10000`
             */
            serviceGroupId: number;
        }[];
        /**
         * 角色ID列表
         */
        roleIdList: number[];
        /**
         * 角色名称列表
         */
        roleNameList: string[];
    };
}
