export interface CreateRichTextRequest {
    /**
     * body
     */
    "body"?: {
        /**
         * 资源id
         * @example `12221`
         */
        instanceId: number;
        /**
         * 资源类型
         * @example `INCIDENT 事件 ALERT告警 PROBLEM故障`
         */
        instanceType: string;
        /**
         * 文本内容
         * @example `这是一个富文本`
         */
        richText: string;
    };
}
