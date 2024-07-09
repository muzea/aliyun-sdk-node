export interface ListIncidentsResponse {
    /**
     * requestId
     * @example `FD200FAE-E98F-496E-BFE6-4CE61E59A2E9`
     */
    requestId: string;
    /**
     * data
     */
    data: {
        /**
         * 事件Id
         * @example `12321`
         */
        incidentId: number;
        /**
         * 流转规则ID
         * @example `123`
         */
        routeRuleId: number;
        /**
         * 流转规则名称
         * @example `规则A`
         */
        routeRuleName: string;
        /**
         * 事件状态：0（已分派）、1（已响应）、2（已完结）
         * @example `0`
         */
        incidentStatus: string;
        /**
         * 事件级别：P1、P2、P3、P4
         * @example `P4`
         */
        incidentLevel: string;
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
         * 影响等级：HIGH 、LOW
         * @example `HIGH`
         */
        effect: string;
        /**
         * 分派的用户ID
         * @example `21312`
         */
        assignUserId: number;
        /**
         * 分派的用户姓名
         * @example `小明`
         */
        assignUserName: string;
        /**
         * 分派人手机号
         * @example `1390000****`
         */
        assignUserPhone: string;
        /**
         * 事件标题
         * @example `事件A`
         */
        incidentTitle: string;
        /**
         * 创建时间
         * @example `2020-10-1 00:00:00`
         */
        createTime: string;
        /**
         * 事件来源：是（手动）、 否（自动）
         * @example `true`
         */
        isManual: boolean;
        /**
         * 事件编号
         * @example `I3000021`
         */
        incidentNumber: string;
        /**
         * 服务删除字段：1（正常）、0（删除）
         * @example `1`
         */
        relServiceDeleteType: number;
        /**
         * 规则删除字段：1（正常）、0（删除）
         * @example `1`
         */
        relRouteRuleDeleteType: number;
        /**
         * 分派的用户是否生效：1（生效）、0（失效）
         * @example `008`
         */
        assignToWhoIsValid: number;
    }[];
    /**
     * 总数
     * @example `60`
     */
    totalCount: number;
    /**
     * 页
     * @example `1`
     */
    pageNumber: number;
    /**
     * 行
     * @example `10`
     */
    pageSize: number;
}
