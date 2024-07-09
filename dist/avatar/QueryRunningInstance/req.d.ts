export interface QueryRunningInstanceRequest {
    /**
     * 从虚拟数字人开放平台中获取的TenantId
     * @example `9185`
     */
    "TenantId": number;
    /**
     * 代表一个业务配置
     */
    "App": {
        /**
         * App ID。在业务配置详情页的右下角可以看到开发者信息AppId
         * @example `ALIPUB5748B17121450`
         */
        AppId: string;
    };
    /**
     * 会话 SessionID，通过“启动一个数字人(StartInstance)”API的返回值获取。
     * * 传入参数表示查询该SessionID对应的实例的运行状态。
     * * 不传参数表示查询所有实例的运行状态。
     * @example `76898bd3b90b4a65b1c078d8824a2e9c`
     */
    "SessionId"?: string;
}
