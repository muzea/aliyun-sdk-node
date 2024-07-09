export interface DisassociateResourceShareRequest {
    /**
     * 共享单元ID。
     * @example `rs-6GRmdD3X****`
     */
    "ResourceShareId": string;
    /**
     * 资源列表。
     */
    "Resources"?: {
        /**
         * 共享资源类型。
         * N的取值范围：1~5，即每次最多移除5个共享资源。
         * 支持共享的资源类型，请参见[支持资源共享的云服务](~~450526~~)。
         * > Resources.N.ResourceId与Resources.N.ResourceType成对出现，需要同时设置。
         * @example `VSwitch`
         */
        ResourceType: string;
        /**
         * 共享资源ID。
         * N的取值范围：1~5，即每次最多移除5个共享资源。
         * > Resources.N.ResourceId与Resources.N.ResourceType成对出现，需要同时设置。
         * @example `vsw-bp183p93qs667muql****`
         */
        ResourceId: string;
    }[];
    /**
     * 资源使用者。
     * @example `172050525300****`
     */
    "Targets"?: string[];
    /**
     * 共享单元归属者。取值：
     * - Self（默认值）：共享单元归属于当前账号。适用于资源目录内共享时，资源所有者移除共享资源或资源使用者场景。
     * - OtherAccounts：共享单元归属于其他账号。适用于资源目录外共享时，资源使用者主动退出共享单元场景。
     * @example `Self`
     */
    "ResourceOwner"?: string;
}
