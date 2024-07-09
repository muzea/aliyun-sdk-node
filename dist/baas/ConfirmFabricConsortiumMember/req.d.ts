export interface ConfirmFabricConsortiumMemberRequest {
    /**
     * 联盟ID。
     * @example `consortium-aaaaaa-akpcsjjac2jd`
     */
    "ConsortiumId": string;
    /**
     * 组织列表。
     */
    "Organization": {
        /**
         * 组织的ID列表。
         * @example `peers-aaaaaa1-1oxw31d046jtl`
         */
        OrganizationId: string;
    }[];
}
