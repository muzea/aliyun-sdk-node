export interface UpdateRoamingJoinPermissionRequest {
    /**
     * 要更新的泛在入网凭证的ID。
     * @example `123`
     */
    "JoinPermissionId": string;
    /**
     * 自定义入网凭证名称，用于更新旧名称。
     * @example `泛在凭证1`
     */
    "JoinPermissionName"?: string;
    /**
     * class A的接收窗口延时，单位为ms。
     * @example `1`
     */
    "RxDelay"?: string;
    /**
     * 工作速率。
     * @example `4`
     */
    "DataRate"?: string;
}
