export interface UpdateGroupRequest {
    "domain_id": string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 待修改的群组ID
         * @example `2e43ec8427dd45f19431b7504649a1b4`
         */
        group_id: string;
        /**
         * 修改后的群组名称
         * @example `test group`
         */
        group_name: string;
        /**
         * 修改后的描述
         * @example `test group description`
         */
        description: string;
    };
}
