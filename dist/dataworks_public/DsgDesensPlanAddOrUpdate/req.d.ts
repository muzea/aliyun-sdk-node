export interface DsgDesensPlanAddOrUpdateRequest {
    /**
     * 需要新增或编辑的脱敏规则集合。
     */
    "DesensRules": {
        /**
         * 脱敏规则ID。您可调用[DsgDesensPlanQueryList](~~2786578~~)接口查询。
         * @example `123`
         */
        Id: number;
        /**
         * 敏感字段类型。
         * @example `phone`
         */
        DataType: string;
        /**
         * 脱敏规则名称。
         * @example `phone_hash`
         */
        RuleName: string;
        /**
         * 脱敏规则的生效状态。取值如下：
         * - 0：失效。
         * - 1：生效。
         * @example `1`
         */
        Status: number;
        /**
         * 二级脱敏场景。
         */
        SceneIds: number[];
        /**
         * 脱敏规则的负责人。
         * @example `test_user`
         */
        Owner: string;
        /**
         * 是否添加水印。取值如下：
         * - true：是
         * - false：否
         * @example `true`
         */
        CheckWatermark: boolean;
        /**
         * 脱敏规则。
         */
        DesensPlan: {
            /**
             * 脱敏规则中配置的脱敏方式。取值如下：
             * - 哈希：hash
             * - 假名：mapping
             * - 掩盖：mask
             * - 字符替换：charreplacement
             * - 区间变换：intervalselect
             * - 取整：decimalpoint
             * - 置空：emptydesens
             * @example `hash`
             */
            DesensPlanType: string;
            /**
             * 脱敏规则参数。
             */
            ExtParam: any;
        };
    }[];
}
