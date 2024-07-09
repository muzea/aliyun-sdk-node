export interface GetUserWorkspaceRequest {
    /**
     * 演练所属的命名空间
     * @example `default`
     */
    "Namespace"?: string;
    /**
     * 演练所属地域ID
     * @example `cn-hangzhou`
     */
    "AhasRegionId"?: string;
}
