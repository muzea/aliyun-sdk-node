export interface CreateProjectMemberRequest {
    /**
     * DataWorks工作空间的ID。
     * @example `27`
     */
    "ProjectId": number;
    /**
     * 待添加的用户ID。
     * @example `1234`
     */
    "UserId": string;
    /**
     * 幂等串，建议使用UUID。
     * @example `1AFAE64E-D1BE-432B-A9****`
     */
    "ClientToken"?: string;
    /**
     * 角色code，非必填，当不为空，则用户一并添加到此角色中。
     * @example `role_project_guest`
     */
    "RoleCode"?: string;
}
