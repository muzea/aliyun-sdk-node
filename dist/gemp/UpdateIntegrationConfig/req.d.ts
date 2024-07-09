export interface UpdateIntegrationConfigRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 集成配置id
         * @example `103`
         */
        integrationConfigId: number;
        /**
         * accessKey
         * @example `601FA6A2-AC5C-4B59-BE11-378F887A6A11`
         */
        accessKey: string;
        /**
         * 幂等id
         * @example `601FA6A2-AC5C-4B59-BE11-378F987A6A98`
         */
        clientToken: string;
    };
}
