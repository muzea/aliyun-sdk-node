export interface CreateIncidentRequest {
    /**
     * body
     */
    "body"?: {
        /**
         * 事件级别：P1，P2，P3，P4
         * @example `P1`
         */
        incidentLevel: string;
        /**
         * 幂等校验token
         * @example `2b63cdef-7ac3-4892-a76d-0f3389ef729f`
         */
        clientToken: string;
        /**
         * 服务id
         * @example `12312`
         */
        relatedServiceId: number;
        /**
         * 影响等级：HIGH，LOW
         * @example `LOW`
         */
        effect: string;
        /**
         * 事件标题
         * @example `事件标题A`
         */
        incidentTitle: string;
        /**
         * 分配对象id
         * @example `12312`
         */
        assignUserId: number;
        /**
         * 事件描述
         * @example `事件描述B`
         */
        incidentDescription: string;
        /**
         * 通知渠道
         * SMS（短信）EMAIL（邮件）
         * PHONE（电话）WEIXIN_GROUP（企微群）DING_GROUP（钉钉群）WEBHOOK（群通知）
         */
        channels: string[];
        /**
         * 12000
         * @example `服务组id`
         */
        serviceGroupId: number;
    };
}
