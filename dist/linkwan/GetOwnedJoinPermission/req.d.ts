export interface GetOwnedJoinPermissionRequest {
    "IotInstanceId"?: string;
    /**
     * 要获取的入网凭证的ID。
     * @example `123`
     */
    "JoinPermissionId": string;
}
