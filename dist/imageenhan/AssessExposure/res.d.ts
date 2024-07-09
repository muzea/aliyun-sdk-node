export interface AssessExposureResponse {
    /**
     * 请求ID。
     * @example `4EF3C65B-C3CC-425B-AFB3-2FE6B98C578B`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 图像曝光度评分，取值范围0~1。评分越高表示曝光度越大。
         * @example `0.1`
         */
        Exposure: number;
    };
}
