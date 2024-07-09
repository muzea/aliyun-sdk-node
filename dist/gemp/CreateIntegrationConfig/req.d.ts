export interface CreateIntegrationConfigRequest {
    /**
     * body
     */
    "body"?: {
        /**
         * 监控源id
         * @example `监控源id`
         */
        monitorSourceId: number;
        /**
         * 幂等号
         * @example `601FA6A2-AC5C-4B59-BE11-378F887A6A11`
         */
        clientToken: string;
    };
}
