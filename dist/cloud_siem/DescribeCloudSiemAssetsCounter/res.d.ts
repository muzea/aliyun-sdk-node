export interface DescribeCloudSiemAssetsCounterResponse {
    /**
     * 请求返回值。
     * @example `123456`
     */
    Data: {
        /**
         * 资产类型。取值：
         * - ip：ip
         * - domain：域名
         * - url：url
         * - process：进程
         * - file：文件
         * - host：主机
         * @example `domain`
         */
        AssetType: string;
        /**
         * 资产数量。
         * @example `1`
         */
        AssetNum: number;
    }[];
    /**
     * 请求是否成功。取值：
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求返回消息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `9AAA9ED9-78F4-5021-86DC-D51C7511****`
     */
    RequestId: string;
}
