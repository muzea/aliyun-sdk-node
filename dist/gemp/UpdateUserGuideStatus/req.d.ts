export interface UpdateUserGuideStatusRequest {
    /**
     * A short description of struct
     * @example `FD200FAE-E98F-496E-BFE6-4CE61E59A2E9`
     */
    "body"?: {
        /**
         * 幂等校验
         * @example `FD200FAE-E98F-496E-BFE6-4CE61E59A2E9`
         */
        clientToken: string;
        /**
         * INCIDENT_GUIDE	事件线 INCIDENT_GUIDE配置人员 USER_GUIDE 服务组 SERVICE_GROUP_GUIDE 服务 SERVICE_GUIDE 集成配置 MONITOR_GUIDE 流转规则 ROUTE_RULE_GUIDE 通知订阅 NOTICE_GUIDE
         * @example `SERVICE_GROUP_GUIDE`
         */
        guideAction: string;
    };
}
