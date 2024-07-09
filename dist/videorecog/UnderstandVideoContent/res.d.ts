export interface UnderstandVideoContentResponse {
    /**
     * 请求ID。
     * @example `71EC3F13-F0CA-4558-AC7F-A351106F59F2`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     * 该数据需要在异步任务执行成功后，通过调用[GetAsyncJobResult](~~607824~~)接口，对其Result字段进行JSON反序列化之后得到。
     */
    Data: {
        /**
         * 标签。目前仅输出`sceneInfo`（场景）和`humanInfo`（人）。
         */
        TagInfo: any;
        /**
         * 视频信息。
         */
        VideoInfo: {
            /**
             * 视频的宽度。单位：像素。
             * @example `720`
             */
            Width: number;
            /**
             * 视频的高。单位：像素。
             * @example `1280`
             */
            Height: number;
            /**
             * 视频的时长。单位：毫秒。
             * @example `43380`
             */
            Duration: number;
            /**
             * 视频的帧率。单位：帧。
             * @example `25.0`
             */
            Fps: number;
        };
    };
    /**
     * 提交异步任务后的提示信息。
     * @example `该调用为异步调用，任务已提交成功，请以requestId的值作为jobId参数调用同类目下GetAsyncJobResult接口查询任务执行状态和结果。`
     */
    Message: string;
}
