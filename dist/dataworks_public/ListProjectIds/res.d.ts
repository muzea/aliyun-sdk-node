export interface ListProjectIdsResponse {
    /**
     * 请求ID。
     * @example `0b57ff7216278945532771749d****`
     */
    RequestId: string;
    /**
     * 返回的DataWorks工作空间ID列表。
     * 返回结果为目标阿里云账号所拥有角色权限的DataWorks工作空间的ID列表，此处仅以一个工作空间ID示例。
     */
    ProjectIds: number[];
}
