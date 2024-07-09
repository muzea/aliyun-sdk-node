export interface FetchFileResponse {
    /**
     * 返回数据。
     * @example `425F351C-3F8E-5218-A520-B6311D0D****
    `
     */
    Data: string;
    /**
     * 请求唯一ID，如果遇到问题请提供这个请求ID，由工作人员为您排查。
     * @example `425F351C-3F8E-5218-A520-B6311D0D****`
     */
    RequestId: string;
}
