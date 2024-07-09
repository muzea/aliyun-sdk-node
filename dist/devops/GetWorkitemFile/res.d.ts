export interface GetWorkitemFileResponse {
    /**
     * Id of the request
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS`
     */
    requestId: string;
    /**
     * 错误信息
     * @example `error`
     */
    errorMsg: string;
    /**
     * 错误码
     * @example `success`
     */
    errorCode: string;
    /**
     * true 接口调用成功，false 接口调用失败
     * @example `true`
     */
    success: string;
    /**
     * 文件对象
     */
    workitemFile: {
        /**
         * 文件id
         * @example `sddrdfdf123df`
         */
        id: string;
        /**
         * 文件名称
         * @example `ddc.pdf`
         */
        name: string;
        /**
         * 文件扩展名
         * @example `pdf`
         */
        suffix: string;
        /**
         * 文件内容大小，单位：bytes
         * @example `10001`
         */
        size: number;
        /**
         * 下载的url
         * @example `http://tmaestro-oss.oss-cn-hongkong.aliyuncs.com/thread_1682129288279.log`
         */
        url: string;
    };
}
