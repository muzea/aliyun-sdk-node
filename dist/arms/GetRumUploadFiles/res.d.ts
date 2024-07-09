export interface GetRumUploadFilesResponse {
    /**
     * Id of the request
     * @example `2983BEF7-4A0D-47A2-94A2-8E9C5E63****`
     */
    RequestId: string;
    /**
     * 状态码。200为成功，其他状态码为异常。
     * @example `200`
     */
    Code: number;
    /**
     * 调用失败时返回的信息。
     * @example `内部错误，请联系管理员。`
     */
    Message: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 查询是否成功：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 文件列表。
     */
    Data: {
        /**
         * 文件名称。
         * @example `test.js.map`
         */
        FileName: string;
        /**
         * 文件唯一ID。
         * @example `cxxxerfewrfwerfwerffvrt`
         */
        Uuid: string;
        /**
         * 文件大小，单位：字节。
         * @example `1000`
         */
        Size: string;
        /**
         * 上一次修改文件时间的时间戳。
         * @example `1682863151000`
         */
        LastModifiedTime: any;
        /**
         * 文件版本号。
         * @example `1.0.0`
         */
        VersionId: string;
    }[];
}
