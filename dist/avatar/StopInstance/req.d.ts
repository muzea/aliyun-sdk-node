export interface StopInstanceRequest {
    /**
     * 从虚拟数字人开放平台的对应业务配置的开发者信息中获取的TenantId
     * @example `234234`
     */
    "TenantId"?: number;
    /**
     * 会话 SessionID。通过“启动一个数字人”API的返回值获取。
     * @example `9adb569b-f66b-4e92-8b9d-62aa626f8318`
     */
    "SessionId"?: string;
}
