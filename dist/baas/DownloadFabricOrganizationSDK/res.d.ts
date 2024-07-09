export interface DownloadFabricOrganizationSDKResponse {
    /**
     * 请求ID
     * @example `1890FA4F-067A-4CE9-AC9B-2BD2E58FB5D3`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码
     * @example `200`
     */
    ErrorCode: number;
    Result: {
        /**
         * 文件解压后的路径
         * @example `dir/file`
         */
        Path: string;
        /**
         * base64转码过的文件内容，需要用base64解码才能得到文件原内容
         * @example `base64string`
         */
        Content: string;
    }[];
}
