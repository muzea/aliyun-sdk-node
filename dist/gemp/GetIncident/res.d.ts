export interface GetIncidentResponse {
    /**
     * requestId
     * @example `2b63cdef-7ac3-4892-a76d-0f3389ef7291`
     */
    requestId: string;
    /**
     * data
     */
    data: {
        /**
         * 事件Id
         * @example `3213`
         */
        incidentId: number;
        /**
         * 流转规则ID
         * @example `3123`
         */
        routeRuleId: number;
        /**
         * 流转规则名称
         * @example `流转规则A`
         */
        routeRuleName: string;
        /**
         * 关联服务ID
         * @example `312312`
         */
        relatedServiceId: number;
        /**
         * 关联服务名称
         * @example `服务A`
         */
        relatedServiceName: string;
        /**
         * 关联服务描述
         * @example `关联服务描述`
         */
        relatedServiceDescription: string;
        /**
         * 事件状态：ASSIGNED（已分派）、RESPONDED（已响应）、FINISHED（已完结）
         * @example `FINISHE`
         */
        incidentStatus: string;
        /**
         * 事件级别：P1、P2、P3、P4
         * @example `P4`
         */
        incidentLevel: string;
        /**
         * 影响等级：HIGH 、LOW
         * @example `LOW`
         */
        effect: string;
        /**
         * 分派的用户ID
         * @example `12312`
         */
        assignUserId: number;
        /**
         * 分派的用户姓名（用户表获取）
         * @example `小明`
         */
        assignUserName: string;
        /**
         * 分派的用户手机号
         * @example `1390000****`
         */
        assignUserPhone: string;
        /**
         * 事件编号
         * @example `I3443831000000016247759753663894`
         */
        incidentNumber: string;
        /**
         * 事件标题
         * @example `事件标题`
         */
        incidentTitle: string;
        /**
         * 创建时间
         * @example `2020-01-10 00:00:00`
         */
        createTime: string;
        /**
         * 事件来源：是（手动）、 否（自动）
         * @example `true`
         */
        isManual: boolean;
        /**
         * 是否升级
         * @example `true`
         */
        isUpgrade: boolean;
        /**
         * 事件描述
         * @example `事件描述`
         */
        incidentDescription: string;
        /**
         * 故障Id
         * @example `232113`
         */
        problemId: number;
        /**
         * 故障编号
         * @example `3332113231453321`
         */
        problemNumber: string;
        /**
         * 持续时间
         * @example `3000000`
         */
        durationTime: number;
        /**
         * 通知渠道
         * @example `1 短信  2  邮件  3  电话  4 企微群 5 钉钉群 6飞书 7 群通知 8 slack`
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
         * 分派的用户是否生效：1（生效）、0（失效）
         * @example `1`
         */
        assignToWhoIsValid: number;
        /**
         * 关联服务组是否生效：1（生效）、0（失效）
         * @example `1`
         */
        relServiceGroupIsValid: number;
        /**
         * 默认分配人名称
         * @example `小明`
         */
        defaultAssignToWhoName: string;
        /**
         * 默认分配人id
         * @example `1212`
         */
        defaultAssignToWho: number;
        /**
         * 默认分配人删除状态 1正常 0删除
         * @example `1`
         */
        defaultAssignToWhoIsValid: number;
    };
}
