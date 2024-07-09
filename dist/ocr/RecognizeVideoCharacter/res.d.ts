export interface RecognizeVideoCharacterResponse {
    /**
     * 请求ID。
     * @example `D3F5BA69-79C4-46A4-B02B-58C4EEBC4C33`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     * 该数据需要在异步任务执行成功后，通过调用[GetAsyncJobResult](~~607824~~)接口，对其Result字段进行JSON反序列化之后得到。
     */
    Data: {
        /**
         * 视频宽度分辨率，单位像素。
         * @example `1920`
         */
        Width: number;
        /**
         * 视频高度分辨率，单位像素。
         * @example `1080`
         */
        Height: number;
        /**
         * 视频帧的集合，空信息的帧不展示。
         */
        Frames: {
            /**
             * 帧时间戳，单位毫秒。
             * @example `6124533574`
             */
            Timestamp: number;
            /**
             * 文字区域元素列表
             */
            Elements: {
                /**
                 * 文字区域概率，概率值的范围为\[0.0,1.0]。
                 * @example `0.99`
                 */
                Score: number;
                /**
                 * 文字内容。
                 * @example `在桃花盛开的地方`
                 */
                Text: string;
                /**
                 * 文字区域位置信息。
                 */
                TextRectangles: {
                    /**
                     * 文字区域角度，角度范围\[-180, 180]。
                     * @example `-90`
                     */
                    Angle: number;
                    /**
                     * 文字区域左上角X坐标。
                     * @example `213`
                     */
                    Left: number;
                    /**
                     * 文字区域左上角Y坐标。
                     * @example `98`
                     */
                    Top: number;
                    /**
                     * 文字区域宽度，单位像素。
                     * @example `46`
                     */
                    Width: number;
                    /**
                     * 文字区域高度，单位像素。
                     * @example `213`
                     */
                    Height: number;
                }[];
            }[];
        }[];
        /**
         * 输入视频文件OSS地址。
         * @example `oss://my-bucket/a/b/c.mp4`
         */
        InputFile: string;
    };
    /**
     * 提交异步任务后的提示信息。
     * @example `该调用为异步调用，任务已提交成功，请以requestId的值作为jobId参数调用同类目下GetAsyncJobResult接口查询任务执行状态和结果。`
     */
    Message: string;
}
