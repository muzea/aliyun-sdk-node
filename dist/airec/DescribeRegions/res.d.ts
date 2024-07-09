export interface DescribeRegionsResponse {
    /**
     * 返回结果
     */
    result: {
        /**
         * 实例所在的区域。
         * @example `cn-beijing`
         */
        regionId: string;
        /**
         * 接入点地址
         * @example `47.109.94.218`
         */
        endpoint: string;
        /**
         * 开通状态:
         * NotOpen 未开通
         * Processing 开通中
         * Running 运行中
         * @example `Running`
         */
        status: string;
        /**
         * 区域名称
         * @example `xxx`
         */
        localName: string;
        /**
         * 控制台地址
         * @example `xxx`
         */
        consoleUrl: string;
    }[];
    /**
     * 错误码
     * @example `200`
     */
    code: string;
    /**
     * 请求ID
     * @example `16B78383-2803-4964-9605-37B30C073B0E`
     */
    requestId: string;
    /**
     * 错误详情
     * @example `successful`
     */
    message: string;
}
