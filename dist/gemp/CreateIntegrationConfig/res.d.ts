export interface CreateIntegrationConfigResponse {
    /**
     * id of the request
     * @example `601FA6A2-AC5C-4B59-BE11-378F887A6A11`
     */
    requestId: string;
    /**
     * data
     */
    data: {
        /**
         * 集成配置id
         * @example `101`
         */
        integrationConfigId: number;
    };
}
