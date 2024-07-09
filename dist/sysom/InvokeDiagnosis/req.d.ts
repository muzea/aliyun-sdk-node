export interface InvokeDiagnosisRequest {
    /**
     * 请求体参数
     */
    "body"?: {
        /**
         * 诊断类型，用于区分不同类型的诊断
         * @example `memgraph`
         */
        service_name: string;
        /**
         * 诊断通道（目前固定为ecs通道）
         * @example `ecs`
         */
        channel: string;
        /**
         * 诊断参数，不同类型的诊断要求传递不同的诊断参数，每种诊断所需的参数参见下面的请求参数补充说明。
         * ><notice>请传递 json 格式的字符串></notice>
         * @example `{
            "instance": "i-wz9gdv7qmdhusamc4dl01",
            "uid": "xxxxxxxxxxxxxx",
            "region": "cn-shenzhen"
        }`
         */
        params: string;
    };
}
