export interface ListAppSecretIdsResponse {
    AppSecrets: {
        /**
         * 应用密钥信息。
         */
        AppSecret: {
            /**
             * 应用ID。
             * @example `472457090344041****`
             */
            AppId: string;
            /**
             * 应用密钥ID。
             * @example `2efd5004-005c-4f05-83c6-5b1dd176****`
             */
            AppSecretId: string;
            /**
             * 创建时间。
             * @example `2020-10-26T03:18:39Z`
             */
            CreateDate: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `5F2FD500-7173-47D6-BD2F-EB60879B4F16`
     */
    RequestId: string;
}
