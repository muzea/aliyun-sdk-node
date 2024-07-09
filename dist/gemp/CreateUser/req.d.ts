export interface CreateUserRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 用户ramId
         * @example `4787654378343`
         */
        ramId: number;
        /**
         * 手机号
         * @example `188898989892`
         */
        phone: string;
        /**
         * 用户名称
         * @example `张珊1`
         */
        username: string;
        /**
         * 邮箱
         * @example `5678@qq.com`
         */
        email: string;
        /**
         * 幂等标识
         * @example `c26f36de-1ec8-496a-a828-880676c5ef81`
         */
        clientToken: string;
        roleIdList: number[];
    };
}
