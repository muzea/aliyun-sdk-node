export interface ListUsersRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 人员名称
         * @example `张三`
         */
        username: string;
        /**
         * 人员手机号
         * @example `1887879****`
         */
        phone: string;
        /**
         * Ram账号ID
         * @example `1344383`
         */
        ramId: string;
        /**
         * 下拉场景 ALL_USERS  用户列表场景USER_LIST
         * @example `USER_LIST`
         */
        scene: number;
        /**
         * clientToken
         * @example `c26f36de-1ec8-496a-a828-880676c5ef81`
         */
        clientToken: string;
        /**
         * 分页参数
         * @example `1`
         */
        pageNumber: number;
        /**
         * 分页参数
         * @example `10`
         */
        pageSize: number;
        /**
         * 移动应用渠道
         * @example `DINGDING`
         */
        synergyChannel: string;
    };
}
