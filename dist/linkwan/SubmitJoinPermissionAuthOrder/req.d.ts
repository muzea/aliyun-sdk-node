export interface SubmitJoinPermissionAuthOrderRequest {
    /**
     * 要授权的专用入网凭证ID。
     * @example `123`
     */
    "JoinPermissionId": string;
    /**
     * 要授权的开发者的阿里云账号ID。
     * @example `some_user`
     */
    "RenterAliyunId": string;
}
