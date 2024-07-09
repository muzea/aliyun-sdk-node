export interface ScanTextRequest {
    /**
     * 1
     */
    "Tasks": {
        /**
         * 指定检测的对象，JSON数组中的每个元素是一个文字检测任务结构体。
         * > - N个Task会折算为N次调用进行计费。
         * - 算法识别效果问题请通过钉钉群（23109592）加入阿里云视觉智能开放平台咨询群联系我们。
         * @example `维修管道，联系weixin`
         */
        Content: string;
    }[];
    /**
     * 1
     */
    "Labels": {
        /**
         * 指定文本检测的应用场景，可选值包括：
         * - spam：文字垃圾内容识别
         * - politics：文字敏感内容识别
         * - abuse：文字辱骂内容识别
         * - terrorism：文字暴恐内容识别
         * - porn：文字鉴黄内容识别
         * - flood：文字灌水内容识别
         * - contraband：文字违禁内容识别
         * - ad：文字广告内容识别
         * @example `ad`
         */
        Label: string;
    }[];
}
