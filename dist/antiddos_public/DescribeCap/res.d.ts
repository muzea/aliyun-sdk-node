export interface DescribeCapResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `C728D7E9-9A39-52E0-966B-5C33118BDBB0`
     */
    RequestId: string;
    /**
     * DDoS攻击事件发生时抓取的流量数据的下载链接。
     */
    CapUrl: {
        /**
         * 流量数据的下载链接。
         * @example `http://beaver-pack****.oss-cn-hangzhou.aliyuncs.com/ddos-2021112511-121.89.XX.XX.cap?Expires=1637824408&OSSAccessKeyId=LTAIXu2lJhw3****&Signature=KKSzOMSUajtwcqfqxkU1nK69d4****`
         */
        Url: string;
    };
}
