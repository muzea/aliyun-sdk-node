export interface DeleteGroupIdRequest {
    /**
     * 您需要删除的Group ID。
     * @example `GID_test`
     */
    "GroupId": string;
    /**
     * 您需要删除的Group ID所在实例的ID。
     * @example `mqtt-cn-0pp1ldu****`
     */
    "InstanceId": string;
}
