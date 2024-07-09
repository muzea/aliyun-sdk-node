export interface ListIntegrationConfigTimelinesRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 集成配置id
         * @example `101`
         */
        integrationConfigId: number;
        /**
         * 分页参数
         * @example `1`
         */
        pageNumber: number;
        /**
         * 分页参数
         * @example `10`
         */
        pageSize: number;
        /**
         * 幂等标识
         * @example `601FA6A2-AC5C-4B59-BE11-378F887A6A11`
         */
        clientToken: string;
    };
}
