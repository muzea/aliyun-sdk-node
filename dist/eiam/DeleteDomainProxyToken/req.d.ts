export interface DeleteDomainProxyTokenRequest {
    /**
     * 实例ID。
     * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
     */
    "InstanceId": string;
    /**
     * 域名ID。
     * @example `dm_examplexxxxx`
     */
    "DomainId": string;
    /**
     * 域名代理Token ID。
     * @example `pt_examplexxxx
    `
     */
    "DomainProxyTokenId": string;
}
