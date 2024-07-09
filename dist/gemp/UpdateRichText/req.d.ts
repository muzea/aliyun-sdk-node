export interface UpdateRichTextRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 富文本id
         * @example `123112313`
         */
        richTextId: number;
        /**
         * 资源id
         * @example `123123`
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
