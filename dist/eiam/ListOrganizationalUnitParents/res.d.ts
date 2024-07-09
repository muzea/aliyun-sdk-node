export interface ListOrganizationalUnitParentsResponse {
    /**
     * 请求ID。
     * @example `0441BD79-92F3-53AA-8657-F8CE4A2B912A`
     */
    RequestId: string;
    /**
     * 父组织列表。
     */
    Parents: {
        /**
         * 组织ID。
         * @example `ou_4lag76zc2km5ssg5vsmm2lznvu`
         */
        OrganizationalUnitId: string;
        /**
         * 父组织ID。
         * @example `ou_x3beoyepv2ls5iwuge3xhjkwbm`
         */
        ParentId: string;
    }[];
}
