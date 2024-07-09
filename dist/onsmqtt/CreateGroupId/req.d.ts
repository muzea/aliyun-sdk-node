export interface CreateGroupIdRequest {
    /**
     * 您需创建的Group ID。取值说明如下：
     * - 以 "GID_" 或者 "GID-" 开头，只能包含字母、数字、连字符（-）和下划线（_），长度限制在 7~64 字符之间。
     * - Group ID 一旦创建，则无法修改，详情请参见[名词解释](~~42420~~)。
     * @example `GID_test`
     */
    "GroupId": string;
    /**
     * 创建的Group ID所在的实例ID。
     * @example `mqtt-cn-0pp1ldu****`
     */
    "InstanceId": string;
}
