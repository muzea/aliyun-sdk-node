export interface ListConfigTemplatesResponse {
    /**
     * 请求ID。
     * @example `4D9F-DR94-FD****************`
     */
    RequestId: string;
    /**
     * 接口状态或POP错误码。
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息。
     * @example `success`
     */
    Message: string;
    /**
     * 查询结果。
     */
    Data: {
        /**
         * 当前分页号。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页大小。
         * @example `10`
         */
        PageSize: number;
        /**
         * 配置模板总数。
         * @example `100`
         */
        TotalSize: number;
        /**
         * 配置模板列表。
         */
        Result: {
            /**
             * 配置模板ID。
             * @example `3d84efaf-37d9-49fb-a3a8-b38d5c2b460c`
             */
            Id: string;
            /**
             * 配置模板名称。
             * @example `config-tmpl-1`
             */
            Name: string;
            /**
             * 模板数据格式。
             * @example `JSON`
             */
            Format: string;
            /**
             * 模板描述。
             * @example `测试配置模板`
             */
            Description: string;
            /**
             * 模板内容。
             * @example `{"name":"William"}`
             */
            Content: string;
            /**
             * 创建时间。
             * @example `1638171689626`
             */
            GmtCreate: number;
            /**
             * 更新时间。
             * @example `1638171689626`
             */
            GmtModified: number;
        }[];
    };
}
