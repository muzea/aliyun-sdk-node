export interface GetRichTextResponse {
    /**
     * Id of the request
     * @example `4361a0e1-6747-4834-96ce-0c4840fd3812`
     */
    requestId: string;
    /**
     * data
     */
    data: {
        /**
         * 资源id
         * @example `123123`
         */
        instanceId: number;
        /**
         * 富文本内容
         * @example `这是一个富文本`
         */
        richText: string;
        /**
         * 资源类型
         * @example `0 事件 1告警 2 故障`
         */
        instanceType: number;
    };
}
