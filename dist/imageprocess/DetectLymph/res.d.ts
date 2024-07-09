export interface DetectLymphResponse {
    /**
     * 请求ID。
     * @example `59598577-13C6-12A2-8CBF-A4DA4C9280A1`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。该数据需要在异步任务执行成功后，通过调用[GetAsyncJobResult](~~607824~~)接口，对其Result字段进行JSON反序列化之后得到。
     */
    Data: {
        /**
         * 病灶描述。
         */
        Lesions: {
            /**
             * 置信度，取值范围0~1。
             * > 使用时建议选择置信度大于0.5的数据。
             * @example `0.6298`
             */
            Score: number;
            /**
             * 关键帧。
             * > 关键帧为病灶短径最大的横轴位切面。
             * @example `7`
             */
            KeySlice: number;
            /**
             * 病灶3D标识框坐标（X1,Y1,Z1,X2,Y2,Z2）。
             */
            Boxes: number[];
            /**
             * 长径和短径长度，单位：毫米。
             */
            Diametermm: number[];
            /**
             * 实体肿瘤疗效评价标准，即利用长短径来评判疗效。
             */
            Recist: number[][];
        }[];
    };
    /**
     * 提交异步任务后的提示信息。
     * @example `该调用为异步调用，任务已提交成功，请以requestId的值作为jobId参数调用同类目下GetAsyncJobResult接口查询任务执行状态和结果。`
     */
    Message: string;
}
