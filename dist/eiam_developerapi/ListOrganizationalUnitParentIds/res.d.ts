export interface ListOrganizationalUnitParentIdsResponse {
    /**
     * 先代组织ID列表，顺序层级从上到下，只展示在授权范围内的组织ID。
     * @example `[ou_xxx001]`
     */
    parentIds: string[];
}
