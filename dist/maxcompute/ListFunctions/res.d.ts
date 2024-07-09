export interface ListFunctionsResponse {
    /**
     * 请求id。
     * @example `0be3e0b716671885050924814e3623`
     */
    requestId: string;
    /**
     * 返回数据。
     */
    data: {
        /**
         * 各个函数的信息。
         */
        functions: {
            /**
             * 显示名称
             * @example `getdate`
             */
            displayName: string;
            /**
             * 函数名称。
             * @example `getdate`
             */
            name: string;
            /**
             * 所有者。
             * @example `odpsowner`
             */
            owner: string;
            /**
             * 函数schema。
             * @example `abc`
             */
            schema: string;
            /**
             * 函数关联的资源名称。
             * @example `abc`
             */
            resources: string;
            /**
             * 创建时间，单位毫秒
             * @example `1664505167000`
             */
            creationTime: number;
            /**
             * 函数所在的类。
             * @example `abc`
             */
            class: string;
        }[];
        /**
         * 设定结果从marker之后按字母排序的第一个开始返回。
         * @example `cHlvZHBzX3VkZl8xMDExNV8xNDU3NDI4NDkzKg==`
         */
        marker: string;
        /**
         * 每页返回的最大结果数。
         * @example `10`
         */
        maxItem: number;
    };
}
