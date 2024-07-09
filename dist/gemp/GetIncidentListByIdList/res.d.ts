export interface GetIncidentListByIdListResponse {
    /**
     * Id of the request
     * @example `C4BE3837-1A13-413B-A225-2C88188E8A43`
     */
    requestId: string;
    /**
     * data
     */
    data: {
        /**
         * 事件ID
         * @example `3213`
         */
        incidentId: number;
        /**
         * 流转规则ID
         * @example `10000`
         */
        routeRuleId: number;
        /**
         * 流转规则名称
         * @example `规则A`
         */
        routeRuleName: string;
        /**
         * 事件状态 0已分派 1已响应 2已完结
         * @example `FINISHE`
         */
        incidentStatus: string;
        /**
         * 关联服务ID
         * @example `213123`
         */
        relatedServiceId: number;
        /**
         * 关联服务名称
         * @example `服务A`
         */
        relatedServiceName: string;
        /**
         * 影响等级 高：HIGH 低 LOW
         * @example `LOW`
         */
        effect: string;
        /**
         * 分派的用户ID
         * @example `12312`
         */
        assignUserId: number;
        /**
         * 分派的用户姓名 (用户表获取)
         * @example `小明`
         */
        assignUserName: string;
        /**
         * 分派的用户手机号
         * @example `139****1111`
         */
        assignUserPhone: string;
        /**
         * 事件标题
         * @example `事件标题`
         */
        incidentTitle: string;
        /**
         * 创建时间
         * @example `2010-03-09 15:53:45`
         */
        createTime: string;
        /**
         * 事件来源 是=手动 否=自动
         * @example `true`
         */
        isManual: boolean;
        /**
         * 是否升级 是 否
         * @example `true`
         */
        isUpgrade: boolean;
        /**
         * 事件描述
         * @example `事件描述`
         */
        incidentDescription: string;
        /**
         * 故障ID
         * @example `12312`
         */
        problemId: number;
        /**
         * 持续时间
         * @example `3000000`
         */
        durationTime: string;
        /**
         * 通知渠道
         */
        notifyChannels: string[];
        /**
         * 关联服务组名称
         * @example `服务组A`
         */
        relatedServiceGroupName: string;
        /**
         * 关联服务id
         * @example `13000`
         */
        relatedServiceGroupId: number;
        /**
         * 服务删除字段
         * @example `1`
         */
        relServiceDeleteType: number;
        /**
         * 规则删除字段
         * @example `1`
         */
        relRouteRuleDeleteType: number;
        /**
         * 分派的用户是否生效，1生效，0失效
         * @example `1`
         */
        assignToWhoIsValid: number;
        /**
         * 关联服务组是否生效，1生效，0失效
         * @example `1`
         */
        relServiceGroupIsValid: number;
        /**
         * 默认分配人名称
         * @example `小明`
         */
        defaultAssignToWhoName: string;
        /**
         * 关联服务描述
         * @example `关联服务描述`
         */
        relatedServiceDescription: string;
        /**
         * 事件级别 P1 P2 P3 P4
         * @example `P4`
         */
        incidentLevel: string;
        /**
         * 事件编号
         * @example `I13002001`
         */
        incidentNumber: string;
        /**
         * 故障编号
         * @example `P1231231`
         */
        problemNumber: string;
        /**
         * 默认分配人id
         * @example `1212`
         */
        defaultAssignToWho: number;
        /**
         * 默认分配人删除状态
         * @example `1`
         */
        defaultAssignToWhoIsValid: number;
    }[];
}
