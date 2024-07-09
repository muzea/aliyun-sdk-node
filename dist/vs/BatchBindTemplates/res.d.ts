export interface BatchBindTemplatesResponse {
    /**
     * 请求ID。
     * @example `20D0DFCE-5DB7-5D83-BD82-8482F2327636`
     */
    RequestId: string;
    /**
     * 结果列表。
     */
    Results: {
        /**
         * 错误信息。
         * >  仅当操作出错时存在。
         * @example `some error`
         */
        Error: string;
        /**
         * 实例ID。
         * @example `323*****994-cn-qingdao	`
         */
        InstanceId: string;
        /**
         * 实例类型。
         * @example `group`
         */
        InstanceType: string;
        /**
         * 模板ID。
         * @example `323*****998-cn-qingdao	`
         */
        TemplateId: string;
    }[];
}
