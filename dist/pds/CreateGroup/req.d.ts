export interface CreateGroupRequest {
    "domain_id": string;
    /**
     * 请求体参数。
     */
    "body"?: {
        /**
         * 群组名，长度1～128个字符
         * @example `test group`
         */
        group_name: string;
        /**
         * 描述信息，长度0～1024个字符
         * @example `test group description`
         */
        description: string;
        /**
         * 是否是根群组，根群组不能加入其他任何群组，一般用于组织架构的顶层组织
         * @example `false`
         */
        is_root: boolean;
        /**
         * 需要加入的父群组ID，传入此字段时，创建完群组后，系统会将此群组自动加入到指定的父群组
         * @example `2e43ec8427dd45f19431b7504649a1b3`
         */
        parent_group_id: string;
    };
}
