export interface CreateFabricConsortiumMemberRequest {
    /**
     * 联盟ID
     * @example `consortium-aaaaaa-akpcsjjac2jd`
     */
    "ConsortiumId": string;
    /**
     * 邀请码
     * @example `200`
     */
    "Code": string;
    /**
     * 组织列表。
     */
    "Organization": {
        /**
         * 组织ID
         * @example `peers-aaaaaa1-1oxw31d046jtl`
         */
        OrganizationId: string;
    }[];
}
