export interface ExtractFingerPrintResponse {
    /**
     * 请求ID。
     * @example `D21978CC-C1E7-4A7A-A1B2-D5896BDC7ADF`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 指纹提取结果图像的Base64编码字符串。
         * @example `/9j/4AAQSkZJRgABAQAAAQABAAD****`
         */
        FingerPrint: string;
    };
}
