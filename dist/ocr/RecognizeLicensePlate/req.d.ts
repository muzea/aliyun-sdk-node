export interface RecognizeLicensePlateRequest {
    /**
     * 车牌识别能力目前支持的地域（Region）有上海和深圳，当您开通服务时选择的是上海地域，推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。当您开通服务时选择的是深圳地域时，仅支持深圳地域OSS链接进行调用。
     * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/ocr/RecognizeLicensePlate/cpsb1.jpg`
     */
    "ImageURL": string;
}
