export interface GetAppSecretResponse {
    /**
     * 请求ID。
     * @example `EE46FC3C-3BDE-4771-B531-27B7B6EB533D`
     */
    RequestId: string;
    /**
     * 应用密钥信息。
     */
    AppSecret: {
        /**
         * 应用密钥内容。
         * @example `ai78ZmmxnlUG1jXlBZRDFKos9DIjY4m17Q7dCpMwn1rqXsTGb1X1XmrmveMp****`
         */
        AppSecretValue: string;
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
         * @example `2020-10-26T02:52:31Z`
         */
        CreateDate: string;
    };
}
