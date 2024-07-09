export interface ExtractFingerPrintRequest {
    /**
     * 图像URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * > **ImageURL**与**ImageData**二选一，当URL方式与Base64编码方式共存时，URL方式优先。文件的Base64编码处理操作，请参见[文件Base64处理](~~468191~~)。
     * @example `https://viapi-test.oss-cn-shanghai.aliyuncs.com/test-team/xuhan/ExtractFingerPrint.png`
     */
    "ImageURL"?: string;
    /**
     * 图像的Base64编码字符串。文件的Base64编码处理操作，请参见[文件Base64处理](~~468191~~)。
     * > **ImageURL**与**ImageData**二选一，当URL方式与Base64编码方式共存时，URL方式优先。
     * @example `iVBORw0KGgoAAAANSUhEUgAAASUAA****`
     */
    "ImageData"?: string;
}
