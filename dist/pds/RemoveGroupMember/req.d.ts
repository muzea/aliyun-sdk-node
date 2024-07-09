export interface RemoveGroupMemberRequest {
    /**
     * A short description of struct
     */
    "domain_id": string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 目标群组ID，表示从哪个群组下移除成员
         * @example `3e5***2c2`
         */
        group_id: string;
        /**
         * 成员类型，当前只能移除用户，群组移除可以通过删除群组完成
         * - user（用户）
         * 注意：群组只能作为一个群组的成员，不能同时成为多个群组的成员。 用户可以同时成为多个群组的成员
         * @example `user`
         */
        member_type: string;
        /**
         * 成员ID， 当member\_type为user时，此字段填对应的userID。
         * @example `2e4***1b1`
         */
        member_id: string;
    };
}
