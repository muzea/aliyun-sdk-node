export interface ReturnJoinPermissionRequest {
    /**
     * 要归还的入网凭证ID。
     * @example `123`
     */
    "JoinPermissionId": string;
    /**
     * 要归还的入网凭证类型。
     * @example `LOCAL`
     */
    "JoinPermissionType": string;
}
