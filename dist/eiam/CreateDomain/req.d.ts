export interface CreateDomainRequest {
    /**
     * 实例ID。
     * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
     */
    "InstanceId": string;
    /**
     * 域名。
     * @example `www.example.com`
     */
    "Domain": string;
    /**
     * 备案信息参数。
     */
    "Filing"?: {
        /**
         * 域名关联的备案号。
         * @example `浙xx-xxxxxx`
         */
        IcpNumber: string;
    };
}
