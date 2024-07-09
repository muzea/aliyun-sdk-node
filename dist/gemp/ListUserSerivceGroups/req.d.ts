export interface ListUserSerivceGroupsRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 用户ID
         * @example `123`
         */
        userId: number;
        /**
         * clientToken
         * @example `2b63cdef-7ac3-4892-a76d-0f3389ef729f`
         */
        clientToken: string;
    };
}
