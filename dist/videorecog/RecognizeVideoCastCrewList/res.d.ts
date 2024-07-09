export interface RecognizeVideoCastCrewListResponse {
    /**
     * 请求ID。
     * @example `EE5B1A95-064F-1C5E-A6FE-FEE0D734A632`
     */
    RequestId: string;
    /**
     * 返回的数据内容。
     * 该数据需要在异步任务执行成功后，通过调用[GetAsyncJobResult](~~607824~~)接口，对其Result字段进行JSON反序列化之后得到。
     */
    Data: {
        /**
         * 3帧/秒文本识别结果，只展示前100个结果。更详细的3帧/秒完整识别结果请参见OcrResultsUrl。
         */
        OcrResults: {
            /**
             * 详细内容。
             */
            DetailInfo: {
                /**
                 * 文本位置矩形框坐标，坐标顺序为\[xmin,ymin,xmax,ymax]。
                 */
                Boxes: number[];
                /**
                 * 文本单个字符对应识别置信度，取值范围0~1.0。
                 */
                CharProbs: number[][];
                /**
                 * 视频帧序号。
                 * @example `17`
                 */
                FrameIndex: number;
                /**
                 * 文本位置矩形框点坐标\[左上，右上，右下，左下]。
                 */
                Position: {
                    /**
                     * 水平方向坐标，对应视频宽度，单位：像素。
                     * @example `266`
                     */
                    X: number;
                    /**
                     * 垂直方向坐标，对应视频高度，单位：像素。
                     * @example `440`
                     */
                    Y: number;
                }[];
                /**
                 * 文本识别结果置信度，取值范围：0~100。
                 * > Score=100×TextProb。
                 * @example `92.07685702563117`
                 */
                Score: number;
                /**
                 * 文本识别结果置信度，取值范围：0~1.0。
                 * @example `0.9207685702563116`
                 */
                TextProb: number;
                /**
                 * 视频帧时间戳，单位：秒。
                 * @example `0.28`
                 */
                TimeStamp: number;
                /**
                 * 跟踪分配ID序号。
                 * @example `1`
                 */
                TrackId: number;
                /**
                 * 文本识别结果。
                 * @example `总策划`
                 */
                Text: string;
            }[];
            /**
             * 视频帧截止时间戳，单位：秒。
             * @example `0.28`
             */
            EndTime: number;
            /**
             * 视频帧开始时间戳，单位：秒。
             * @example `0.28`
             */
            StartTime: number;
        }[];
        /**
         * 视频clip级文本识别结果，只展示前100个结果。更详细完整识别结果请参见OcrVideoResultsUrl。
         */
        VideoOcrResults: {
            /**
             * 详细内容。
             */
            DetailInfo: {
                /**
                 * 文本位置矩形框坐标，坐标顺序为\[xmin,ymin,xmax,ymax]。
                 */
                Boxes: number[];
                /**
                 * 文本位置矩形框点坐标\[左上，右上，右下，左下]。
                 */
                Position: {
                    /**
                     * 水平方向坐标，对应视频宽度，单位：像素。
                     * @example `269`
                     */
                    X: number;
                    /**
                     * 垂直方向坐标，对应视频高度，单位：像素。
                     * @example `423`
                     */
                    Y: number;
                }[];
                /**
                 * 文本识别结果置信度，取值范围：0~100。
                 * @example `92.07685702563117`
                 */
                Score: number;
                /**
                 * 文本识别结果。
                 * @example `总顾问`
                 */
                Text: string;
                /**
                 * 文本类型。取值如下：
                 * - 0：正常字幕
                 * - 1：滚动字幕
                 * - 2：定长标识性字幕
                 * @example `0`
                 */
                TextType: number;
            }[];
            /**
             * 视频帧截止时间戳，单位：秒。
             * @example `0.92`
             */
            EndTime: number;
            /**
             * 视频帧开始时间戳，单位：秒。
             * @example `0.92`
             */
            StartTime: number;
        }[];
        /**
         * 字幕识别结果。
         */
        SubtitlesResults: {
            /**
             * 字幕识别中英文全部识别结果。
             */
            SubtitlesAllResults: any;
            /**
             * 中英文字幕识别对应的标准SRT格式文件下载地址。
             * @example `url`
             */
            SubtitlesAllResultsUrl: string;
            /**
             * 字幕识别中文识别结果。
             */
            SubtitlesChineseResults: any;
            /**
             * 中文字幕识别对应的标准SRT格式文件下载地址。
             * @example `url1`
             */
            SubtitlesChineseResultsUrl: string;
            /**
             * 字幕识别英文识别结果。
             * @example `hello`
             */
            SubtitlesEnglishResults: any;
            /**
             * 英文字幕识别对应的标准SRT格式文件下载地址。
             * @example `url2`
             */
            SubtitlesEnglishResultsUrl: string;
        }[];
        /**
         * 演职员表识别结果。
         */
        CastResults: {
            /**
             * 详细内容。
             */
            DetailInfo: any;
            /**
             * 视频帧截止时间戳，单位：秒。
             * @example `0.6`
             */
            EndTime: number;
            /**
             * 视频帧截止时间戳，单位：秒。
             * @example `0.6`
             */
            StartTime: number;
        }[];
        /**
         * OcrResults结果的详细完整内容，即3帧/秒的识别结果。
         * @example `http://vibktprfx-prod-prod-media-ai-cn-shanghai.oss-cn-shanghai.aliyuncs.com/video-ocr/1665475907_bGHMygKsFw.json?Expires=1665477707&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=6KQb9OXQldsg30w%2FNurHwAbjiJs%3D`
         */
        OcrResultsUrl: string;
        /**
         * OcrVideoResults结果的详细完整内容。
         * @example `http://vibktprfx-prod-prod-media-ai-cn-shanghai.oss-cn-shanghai.aliyuncs.com/video-ocr/1665475907_VSRvetTHon.json?Expires=1665477707&OSSAccessKeyId=LTAI4FoLmvQ9urWXgSRp****&Signature=wfQviVVSyVRLPVlHDKXi6cTefHY%3D`
         */
        OcrVideoResultsUrl: string;
    };
    /**
     * 提交异步任务后的提示信息。
     * @example `该调用为异步调用，任务已提交成功，请以requestId的值作为jobId参数调用同类目下GetAsyncJobResult接口查询任务执行状态和结果。`
     */
    Message: string;
}
