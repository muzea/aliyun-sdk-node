export interface TaggingImageResponse {
    /**
     * 请求ID。
     * @example `70ED13B0-BC22-576D-9CCF-1CC12FEAC477`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 输出打标结果，最多输出5个打标结果，如果某个类别标签未输出，则对应的置信度`confidence`为零。
         */
        Tags: {
            /**
             * 标签名称。具体取值请[下载Label文件](https://viapi-oss.oss-cn-shanghai.aliyuncs.com/doc/imagerecog/label.txt)查看。
             * @example `沙发`
             */
            Value: string;
            /**
             * 标签名称对应的置信度，取值范围0~100。
             * @example `65`
             */
            Confidence: number;
        }[];
    };
}
