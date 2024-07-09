export interface AddImageResponse {
    /**
     * 错误信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `E0845DE6-52AF-4B50-9F15-51ED4044E6AB`
     */
    RequestId: string;
    /**
     * 错误码。
     * - 0：成功。
     * - 非0：失败。
     * @example `0`
     */
    Code: number;
    /**
     * 类目预测、主体识别结果等信息。
     */
    PicInfo: {
        /**
         * 主体识别结果。图片的主体区域，格式为`x1,x2,y1,y2`，其中`x1,y1`是左上角的点，`x2,y2`是右下角的点。若用户请求中指定了主体区域，则以请求中为准。
         * @example `94,691,206,650`
         */
        Region: string;
        /**
         * 类目预测结果。若用户请求中指定了类目，则以请求中为准。
         * @example `88888888`
         */
        CategoryId: number;
    };
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
}
