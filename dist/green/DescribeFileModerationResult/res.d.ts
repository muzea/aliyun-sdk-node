export interface DescribeFileModerationResultResponse {
    /**
     * Id of the request
     * @example `6CF2815C-C8C7-4A01-B52E-FF6E24F53492`
     */
    RequestId: string;
    /**
     * 返回码。返回200代表成功。
     * @example `200`
     */
    Code: number;
    /**
     * 错误信息
     * @example `OK`
     */
    Message: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 数据ID。
         * @example `26769ada6e264e7ba9aa048241e12be9`
         */
        DataId: string;
        /**
         * 文件下载URL路径。
         * @example `https://detect-obj.oss-cn-hangzhou.aliyuncs.com/sample/xxxx.pdf`
         */
        Url: string;
        /**
         * 可选，文档类型
         * @example `doc`
         */
        DocType: string;
        /**
         * 检测结果列表
         */
        PageResult: {
            /**
             * 页码。
             * @example `1`
             */
            PageNum: number;
            /**
             * 图片地址
             * @example `https://detect-obj.oss-cn-hangzhou.aliyuncs.com/sample/xxxx.jpg`
             */
            ImageUrl: string;
            /**
             * 文本内容保存地址
             * @example `https://detect-obj.oss-cn-hangzhou.aliyuncs.com/sample/xxxx.txt`
             */
            TextUrl: string;
            /**
             * 图片检测结果
             */
            ImageResult: {
                /**
                 * 描述
                 * @example `这个是标题`
                 */
                Description: string;
                /**
                 * 调用的服务
                 * @example `baselineCheck`
                 */
                Service: string;
                /**
                 * 位置信息
                 */
                Location: {
                    /**
                     * 坐标点的X值。
                     * @example `11`
                     */
                    X: number;
                    /**
                     * 坐标点的Y值。
                     * @example `22`
                     */
                    Y: number;
                    /**
                     * 坐标点的W值。
                     * @example `33`
                     */
                    W: number;
                    /**
                     * 坐标点的H值。
                     * @example `44`
                     */
                    H: number;
                };
                /**
                 * 标签信息
                 */
                LabelResult: {
                    /**
                     * 标签
                     * @example `nonlabel`
                     */
                    Label: string;
                    /**
                     * 分险分
                     * @example `25.0`
                     */
                    Confidence: number;
                }[];
            }[];
            /**
             * 文本审核结果。
             */
            TextResult: {
                /**
                 * 描述
                 * @example `这是一个标题`
                 */
                Description: string;
                /**
                 * 服务
                 * @example `chat_detection`
                 */
                Service: string;
                /**
                 * 文本内容
                 * @example `吧啦吧啦`
                 */
                Text: string;
                /**
                 * 文本分段信息
                 * @example `[0,999]`
                 */
                TextSegment: string;
                /**
                 * 标签的值。
                 * @example `porn`
                 */
                Labels: string;
                /**
                 * 命中风险关键词
                 * @example `xxx`
                 */
                RiskWords: string;
                /**
                 * 命中风险详情
                 * @example `xxx`
                 */
                RiskTips: string;
            }[];
        }[];
    };
}
