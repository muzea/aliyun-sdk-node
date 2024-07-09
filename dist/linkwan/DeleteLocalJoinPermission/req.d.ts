export interface DeleteLocalJoinPermissionRequest {
    "IotInstanceId"?: string;
    /**
     * 要删除的专用入网凭证的ID。
     * @example `123`
     */
    "JoinPermissionId": string;
}
