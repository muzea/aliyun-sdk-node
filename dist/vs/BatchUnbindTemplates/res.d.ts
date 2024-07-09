export interface BatchUnbindTemplatesResponse {
    /**
     * 请求ID。
     * @example `90B377DF-C874-5BBD-B957-42C4C06AFECE`
     */
    RequestId: string;
    /**
     * 结果列表。
     */
    Results: {
        /**
         * 错误信息。
         * > 仅当操作出错时存在。
         * @example `some error`
         */
        Error: string;
        /**
         * 模板类型。
         * @example `snapshot`
         */
        TemplateType: string;
        /**
         * 实例ID。
         * @example `323*****994-cn-qingdao`
         */
        InstanceId: string;
        /**
         * 实例类型。
         * @example `group`
         */
        InstanceType: string;
        /**
         * 模板ID。
         * @example `323*****998-cn-qingdao`
         */
        TemplateId: string;
    }[];
}
