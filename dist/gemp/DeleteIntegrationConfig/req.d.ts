export interface DeleteIntegrationConfigRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 集成配置id
         * @example `100`
         */
        integrationConfigId: number;
        /**
         * 幂等id
         * @example `601FA6A2-AC5C-4B59-BE11-378F887A6A11`
         */
        clientToken: string;
    };
}
