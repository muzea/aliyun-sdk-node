export interface DeregisterDelegatedAdministratorRequest {
    /**
     * 资源目录中的成员账号UID。
     * @example `181761095690****`
     */
    "AccountId": string;
    /**
     * 可信服务的标识。
     * 具体信息，请参见[支持的可信服务](~~208133~~)中的`可信服务标识`列。
     * @example `cloudfw.aliyuncs.com`
     */
    "ServicePrincipal": string;
}
