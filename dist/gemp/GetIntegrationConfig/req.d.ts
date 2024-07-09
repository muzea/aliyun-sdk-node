export interface GetIntegrationConfigRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 集成配置id
         * @example `68`
         */
        integrationConfigId: number;
        /**
         * 幂等标识
         * @example `601FA6A2-AC5C-4B59-BE11-378F887A6A11`
         */
        clientToken: string;
    };
}
