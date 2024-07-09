export interface CreateTaskOrderByEventReportRequest {
    /**
     * 扩展信息
     */
    "Extinfo"?: {
        /**
         * 扩展信息value值
         * @example `扩展信息value值`
         */
        Value: string;
        /**
         * 扩展信息名称
         * @example `扩展信息名称`
         */
        Name: string;
    }[];
    /**
     * 提交人userId
     * @example `1830426056957812`
     */
    "CreateUserId": string;
    /**
     * 告警所属业务
     * @example `123`
     */
    "Business"?: string;
    /**
     * 告警描述
     */
    "EventBody"?: {
        /**
         * 当前告警描述信息
         * @example `告警内容`
         */
        EventDesc: string;
        /**
         * 事件级别
         * @example `info,warn,alarm,critical`
         */
        EventLevel: string;
        /**
         * 事件上报时间
         * @example `123456`
         */
        EventTime: string;
        /**
         * 事件源标识，自定义和TAM在云企配置的Location指标一致
         */
        EventLocation: {
            /**
             * domian域名
             * @example `flv13.bn.netease.com`
             */
            Domain: string;
        };
        /**
         * 事件id
         * @example `j9uwe-34328987`
         */
        EventId: string;
    };
    /**
     * 提交人姓名
     * @example `小明`
     */
    "CreateRealName": string;
    /**
     * 告警关联主群id
     * @example `cid+lUpHxTIXt7DYqJDcpVxlA==`
     */
    "OpenGroupId": string;
    /**
     * 监控集如：视频业务的质量监控
     * @example `监控集如：视频业务的质量监控 123`
     */
    "MonitorCongregation"?: string;
    /**
     * 建单入群人员
     * @example `123,456`
     */
    "JoinChildGroupUserIds"?: string;
    /**
     * 问题分类
     * @example `3270`
     */
    "ProductType": string;
    /**
     * 当eventLevel为warn时，必传
     * @example `紧急性原因描述`
     */
    "ImportantDesc"?: string;
}
