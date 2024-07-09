export interface GenerateUploadConfigResponse {
    /**
     * 请求唯一标识
     * @example `1813ceee-7fe5-41b4-87e5-982a4d18cca5`
     */
    RequestId: string;
    /**
     * 是否成功：true 成功，false 失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码
     * @example `NoData`
     */
    Code: string;
    /**
     * 错误说明
     * @example `success`
     */
    Message: string;
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 业务数据
     */
    Data: {
        /**
         * 如果这个为空则 postUrl 为上传服务的上传地址
         * @example `https://bucket-name.oss-cn-hangzhou.aliyuncs.com`
         */
        PostUrl: string;
        /**
         * 系统内唯一标识
         * @example `oss://default/oss-bucket-name/aimiaobi/2021/07/01/1625126400000/1.docx`
         */
        FileKey: string;
        /**
         * 表单提交数据
         */
        FormDatas: any;
    };
}
