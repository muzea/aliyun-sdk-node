export interface CreateWmBaseImageResponse {
    /**
     * 本次请求的ID。
     * @example `58D6B23E-E5DA-5418-8F61-51A3B5A30049`
     */
    RequestId: string;
    /**
     * 透明图信息。
     */
    Data: {
        /**
         * 透明图ID，相同的ID表示图片内容完全一致。
         * @example `fafb432cdede9b20640e12105845386e-496883833-8242409229217337*****`
         */
        ImageId: string;
        /**
         * 可用于下载图片的临时URL。
         * @example `https://example.com/test-*****.png`
         */
        ImageUrl: string;
        /**
         * 图片临时URL的有效截止时间，格式为Unix时间戳，单位为秒。
         * @example `17185*****`
         */
        ImageUrlExp: number;
    };
}
