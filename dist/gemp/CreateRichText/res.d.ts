export interface CreateRichTextResponse {
    /**
     * Id of the request
     * @example `10REQUES-AC5C-4B59-BE11-378F117A6A88`
     */
    requestId: string;
    /**
     * data
     */
    data: {
        /**
         * 资源id
         * @example `1231`
         */
        instanceId: number;
        /**
         * 资源类型
         * @example `0 事件 1告警 2 故障`
         */
        instanceType: number;
        /**
         * 富文本内容
         * @example `这是一个富文本`
         */
        richText: string;
    };
}
