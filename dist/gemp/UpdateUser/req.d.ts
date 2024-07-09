export interface UpdateUserRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 人员ramid
         * @example `2243564`
         */
        ramId: number;
        /**
         * 手机号
         * @example `18887878****`
         */
        phone: string;
        /**
         * 用户名
         * @example `张珊`
         */
        username: string;
        /**
         * 邮箱
         * @example `78799****@qq.com`
         */
        email: string;
        /**
         * 用户ID
         * @example `111`
         */
        userId: number;
        /**
         * 幂等号
         * @example `c26f36de-1ec8-496a-a828-880676c5ef81`
         */
        clientToken: string;
        roleIdList: number[];
    };
}
