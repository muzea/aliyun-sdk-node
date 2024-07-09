export interface DetectWorkwearRequest {
    /**
     * 着装参数设置
     */
    "Clothes"?: {
        /**
         * 设定最多识别多少人体。最大值为5。
         * @example `1`
         */
        MaxNum: number;
        /**
         * 设定阈值。取值范围0.0~1.0，数值越大，要求和样本数据相似度越高，默认0.4。
         * @example `0.4`
         */
        Threshold: number;
    };
    /**
     * 图像URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * @example `https://viapi-test.oss-cn-shanghai.aliyuncs.com/test-team/zhangchaorun/tiyan/xxxx.jpg`
     */
    "ImageUrl"?: string;
    /**
     * 1
     */
    "Labels"?: string[];
}
