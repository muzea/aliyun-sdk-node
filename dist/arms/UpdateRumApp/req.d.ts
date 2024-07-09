export interface UpdateRumAppRequest {
    /**
     * 应用ID。
     * @example `b5xxxxs@d8deedfa9bf****`
     */
    "Pid": string;
    /**
     * 应用描述信息。
     * @example `测试`
     */
    "Description"?: string;
    /**
     * 是否收藏，true：收藏，false：不收藏。
     * @example `true`
     */
    "IsSubscribe"?: boolean;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 应用别名。
     * @example `应用别名。`
     */
    "Nickname"?: string;
    /**
     * 是否重启应用，true：重启，false：不重启。
     * @example `true`
     */
    "Restart"?: boolean;
    /**
     * 是否停止应用，true：停止，false：不停止。
     * @example `true`
     */
    "Stop"?: boolean;
    /**
     * 是否第二天重启应用，true：重启，false：不重启。
     * @example `true`
     */
    "AutoRestart"?: boolean;
    /**
     * 设置应用服务域名，支持创建、修改、删除服务域名配置
     * @example `{\"Op\":\"Update\",\"Domain\":\"example.com\",\"Config\":{\"Description\":\"这是描述bbb\",\"Tracing\":\"true\",\"PropagatorTypes\":[\"sw8\"]}}`
     */
    "ServiceDomainOperationJson"?: string;
    "BonreeSDKConfigJson"?: string;
}
