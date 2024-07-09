export interface GetFunctionCodeResponse {
    /**
     * 函数代码包的CRC64值。
     * @example `1234567890`
     */
    checksum: string;
    /**
     * 获取函数代码包的URL。
     * @example `http://func-code.oss-cn-shanghai.aliyuncs.com/1a2b3c4d5e6f`
     */
    url: string;
}
