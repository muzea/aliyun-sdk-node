export interface RefreshIntegrationConfigKeyResponse {
    /**
     * Id of the request
     * @example `601FA6A2-AC5C-4B59-BE11-378F887A6A11`
     */
    requestId: string;
    /**
     * data
     */
    data: {
        /**
         * 集成密钥
         * @example `859FA6A2-AC5C-4B09-BE23-986F887H6A232`
         */
        key: string;
    };
}
