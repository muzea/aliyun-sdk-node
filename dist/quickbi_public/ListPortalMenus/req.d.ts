export interface ListPortalMenusRequest {
    /**
     * 数据门户的ID。
     * @example `0d173abb53e84c8ca7495429163b****`
     */
    "DataPortalId": string;
    /**
     * Quick BI中的用户ID。传入时列表仅展示用户有权限的菜单。
     * @example `1234567***`
     */
    "UserId"?: string;
}
