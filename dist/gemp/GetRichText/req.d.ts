export interface GetRichTextRequest {
    /**
     * A short description of struct
     */
    "body"?: {
        /**
         * 资源id
         * @example `12221才`
         */
        richTextId: number;
        /**
         * 资源类型
         * @example `INCIDENT 事件 ALERT告警 PROBLEM故障`
         */
        instanceId: number;
        /**
         * INCIDENT 事件、ALERT 报警、PROBLEM 故障
         * @example `INCIDENT`
         */
        instanceType: string;
    };
}
