export interface ObtainApplicationClientSecretRequest {
    /**
     * 实例ID。
     * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
     */
    "InstanceId": string;
    /**
     * 应用ID。
     * @example `app_mkv7rgt4d7i4u7zqtzev2mxxxx`
     */
    "ApplicationId": string;
    /**
     * 应用的客户端密钥ID。
     * @example ` sci_k52x2ru63rlkflina5utgkxxxx`
     */
    "SecretId": string;
}
