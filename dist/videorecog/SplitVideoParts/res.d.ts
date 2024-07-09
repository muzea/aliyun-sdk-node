export interface SplitVideoPartsResponse {
    /**
     * 请求ID。
     * @example `A00A3C17-61D5-1489-860D-B709F83A7C40`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。该数据需要在异步任务执行成功后，通过调用[GetAsyncJobResult](~~607824~~)接口，对其Result字段进行JSON反序列化之后得到。
     */
    Data: {
        /**
         * 针对视频镜头转场维度进行拆条。
         */
        Elements: {
            /**
             * 该片段的起始时刻，单位：秒。
             * @example `10.06`
             */
            BeginTime: number;
            /**
             * 该片段的结束时刻，单位：秒。
             * @example `17.3`
             */
            EndTime: number;
            /**
             * 片段序号。
             * @example `1`
             */
            Index: number;
        }[];
        /**
         * 针对视频主题进行拆条。
         */
        SplitVideoPartResults: {
            /**
             * 拆条起始时间点。
             * @example `0.33`
             */
            BeginTime: number;
            /**
             * 拆条结束时间点。
             * @example `6.3`
             */
            EndTime: number;
            /**
             * 拆条主题。
             * @example `you like to do my work in the world.`
             */
            Theme: string;
            /**
             * 拆条类型，电商直播场景暂时只返回默认值`直播`。
             * @example `直播`
             */
            Type: string;
            /**
             * 拆条采用的算法。
             * @example `multimodal`
             */
            By: string;
        }[];
    };
    /**
     * 提交异步任务后的提示信息。
     * @example `该调用为异步调用，任务已提交成功，请以requestId的值作为jobId参数调用同类目下GetAsyncJobResult接口查询任务执行状态和结果。`
     */
    Message: string;
}
