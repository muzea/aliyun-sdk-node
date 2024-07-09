export interface CreateProjectRequest {
    /**
     * 请求体参数。
     * @example `test-project`
     */
    "body": {
        /**
         * Project描述。
         * @example `this is test`
         */
        description: string;
        /**
         * Project名称在阿里云地域内全局唯一，创建后不可修改。其命名规则如下：
         * - Project名称必须全局唯一。
         * - 只能包括小写字母、数字和短划线（-）。
         * - 必须以小写字母或者数字开头和结尾。
         * - 长度为3-63字符。
         * @example `test-project`
         */
        projectName: string;
        /**
         * 资源组ID。
         * @example `rg-aekzf******sxby`
         */
        resourceGroupId: string;
        /**
         * 容灾类型。
         * - LRS：本地冗余存储。
         * - ZRS：同城冗余存储。
         * @example `LRS`
         */
        dataRedundancyType: string;
    };
}
