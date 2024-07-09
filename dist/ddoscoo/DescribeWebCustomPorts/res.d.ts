export interface DescribeWebCustomPortsResponse {
    /**
     * 本次请求的ID。
     * @example `0bcf28g5-d57c-11e7-9bs0-d89d6717dxbc`
     */
    RequestId: string;
    /**
     * 网站业务自定义端口信息。
     */
    WebCustomPorts: {
        /**
         * 协议类型。取值：
         * - **http**
         * - **https**
         * @example `http`
         */
        ProxyType: string;
        /**
         * 可选端口范围。
         */
        ProxyPorts: string[];
    }[];
}
