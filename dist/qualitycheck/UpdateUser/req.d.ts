export interface UpdateUserRequest {
    /**
     * 该接口可批量修改用户的角色，所以入参jsonStr的值是List类型，可参考示例值；完整JSON字符串具体内容参见以下详细信息。
     * @example `[{"aliUid":"2951869706989****","roleName":"ADMIN"},{"aliUid":"2557461687048****","roleName":"ADMIN"}]`
     */
    "JsonStr": string;
    /**
     * 业务空间Id
     */
    "BaseMeAgentId"?: number;
}
