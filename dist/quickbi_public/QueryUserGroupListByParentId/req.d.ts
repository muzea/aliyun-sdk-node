export interface QueryUserGroupListByParentIdRequest {
    /**
     * 父用户组ID。
     * - 当输入父用户组ID时，可以获取该ID下的子用户组信息。
     * - 当输入-1时，可以获取根目录下的子用户组信息。
     * @example `3d2c23d4-2b41-4af8-a1f5-f6390f32****`
     */
    "ParentUserGroupId": string;
}
