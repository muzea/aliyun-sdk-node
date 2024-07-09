export interface CreateUserRequest {
    /**
     * JSON数组格式，可一次性添加多个用户，详见下方请求入参示例。
     * @example `[{"userName":"zhangsan","aliUid":"2498141917****","displayName":"张三","description":"","roleName":"QUALITY_INSPECTOR"}]`
     */
    "JsonStr": string;
    /**
     * 业务空间Id
     */
    "BaseMeAgentId"?: number;
}
