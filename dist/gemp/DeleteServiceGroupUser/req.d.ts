export interface DeleteServiceGroupUserRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 服务组ID
         * @example `66666`
         */
        serviceGroupId: number;
        /**
         * 老的用户ID
         * @example `777777`
         */
        oldUserId: number;
        /**
         * 新的用户
         * @example `88888`
         */
        newUserId: number;
        /**
         * 删除服务组成员
         * @example `true`
         */
        removeUser: boolean;
        /**
         * 幂等号
         * @example `xxxxxx`
         */
        clientToken: string;
    };
}
