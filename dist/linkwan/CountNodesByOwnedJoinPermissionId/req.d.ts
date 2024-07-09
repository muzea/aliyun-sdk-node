export interface CountNodesByOwnedJoinPermissionIdRequest {
    /**
     * 入网凭证ID。
     * @example `123`
     */
    "JoinPermissionId": string;
    /**
     * 模糊匹配节点的DevEUI。
     * @example `0000000000000000`
     */
    "FuzzyDevEui"?: string;
}
