export interface AddNodeToGroupRequest {
    /**
     * 节点的DevEUI。
     * @example `0000000000000000`
     */
    "DevEui": string;
    /**
     * 节点的PIN Code。
     * @example `123456`
     */
    "PinCode": string;
    /**
     * 节点分组ID。
     * @example `123`
     */
    "NodeGroupId": string;
}
