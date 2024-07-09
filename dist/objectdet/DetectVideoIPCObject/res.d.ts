export interface DetectVideoIPCObjectResponse {
    /**
     * 请求ID。
     * @example `35B11E1B-800C-4598-B5AA-577E3BDBD917`
     */
    RequestId: string;
    /**
     * 提交异步任务后的提示信息。
     * @example `该调用为异步调用，任务已提交成功，请以requestId的值作为jobId参数调用同类目下GetAsyncJobResult接口查询任务执行状态和结果。`
     */
    Message: string;
    /**
     * 返回的结果数据内容。该数据需要在异步任务执行成功后，通过调用[GetAsyncJobResult](~~607824~~)接口，对其Result字段进行JSON反序列化之后得到。
     */
    Data: {
        /**
         * 视频宽度分辨率，单位像素。
         * @example `1280`
         */
        Width: number;
        /**
         * 视频高度分辨率，单位像素。
         * @example `720`
         */
        Height: number;
        /**
         * 视频帧的集合，未检测到目标的帧不列出。
         */
        Frames: {
            /**
             * 时间戳，单位秒。
             * @example `6124533574`
             */
            Time: number;
            /**
             * 检测到的目标集合，如果没有目标则为空。
             */
            Elements: {
                /**
                 * 检测框对应的物体名称。取值如下：
                 * - PERSON：人
                 * - VEHICLE：车辆
                 * - PET：宠物
                 * @example `PERSON`
                 */
                Type: string;
                /**
                 * 左上角X轴坐标，单位像素。
                 * @example `289`
                 */
                X: number;
                /**
                 * 左上角Y轴坐标，单位像素。
                 * @example `271`
                 */
                Y: number;
                /**
                 * 检测框宽度，单位像素。
                 * @example `100`
                 */
                Width: number;
                /**
                 * 检测框高度，单位像素。
                 * @example `156`
                 */
                Height: number;
                /**
                 * 检测框的置信度，取值范围为\[0.0,1.0]。
                 * @example `0.7812`
                 */
                Score: number;
            }[];
        }[];
        /**
         * 输入文件信息。
         * @example `oss://viapi-test/viapi-3.0domepic/objectdet/DetectVideoIPCObject/DetectVideoIPCObject4.mp4`
         */
        InputFile: string;
    };
}
