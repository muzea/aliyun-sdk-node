export interface ListUsersResponse {
    /**
     * id of the request
     * @example `c26f36de-1ec8-496a-a828-880676c5ef81`
     */
    requestId: string;
    /**
     * data
     */
    data: {
        /**
         * 用户id
         * @example `1234`
         */
        userId: number;
        /**
         * 子账号ramId
         * @example `53624523`
         */
        ramId: number;
        /**
         * 用户名
         * @example `张珊`
         */
        username: string;
        /**
         * 手机
         * @example `1390000****`
         */
        phone: string;
        /**
         * 邮箱
         * @example `2345****@qq.com`
         */
        email: string;
        /**
         * 是否可编辑
         * @example `true`
         */
        isEditableUser: number;
        /**
         * 账户类型
         * @example `SUB`
         */
        accountType: number;
        /**
         * 移动应用账户
         * @example `23456tre`
         */
        appAccount: string;
        /**
         * 移动应用协同渠道
         * @example `DINGDING`
         */
        synergyChannel: string;
        /**
         * 是否关联
         * @example `RELATED关联  NOT_RELATED 未关联`
         */
        isRelated: string;
        isOperation: number;
        isRam: number;
        roleIdList: number[];
        roleNameList: string[];
    }[];
    /**
     * 总条数
     * @example `100`
     */
    totalCount: number;
    /**
     * 分页
     * @example `1`
     */
    pageNumber: number;
    /**
     * 分页
     * @example `10`
     */
    pageSize: number;
}
