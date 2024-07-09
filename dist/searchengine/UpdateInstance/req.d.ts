export interface UpdateInstanceRequest {
    /**
     * 实例id
     * @example `ha-cn-pl32rf0****`
     */
    "instanceId"?: string;
    /**
     * 请求结构。
     * @example `{}`
     */
    "body"?: {
        /**
         * 实例相关的规格信息列表。
         */
        components: {
            /**
             * 规格code，和售卖参数保持一致
             * @example `searcherdocsizesum`
             */
            code: string;
            /**
             * 值
             * @example `200`
             */
            value: string;
        }[];
        /**
         * UPGRAGE： 提升实例规格
         * DOWNGRADE: 降低实例规格
         * @example `UPGRAGE`
         */
        orderType: string;
        /**
         * 实例描述信息。
         * @example `实例描述`
         */
        description: string;
    };
}
