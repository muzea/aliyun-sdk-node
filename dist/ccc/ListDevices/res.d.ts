export interface ListDevicesResponse {
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应信息。
     * @example `无`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `EEEE671A-3E24-4A04-81E6-6C4F5B39DF75`
     */
    RequestId: string;
    /**
     * 响应参数列表。
     */
    Params: string[];
    /**
     * 设备列表。
     */
    Data: {
        /**
         * 坐席分机号。
         * @example `8032****`
         */
        Extension: string;
        /**
         * 设备注册过期时间，格式为Unix时间戳，单位毫秒，如果设备过期未重新注册，则会导致设备离线。
         * @example `1609118499750`
         */
        Expires: number;
        /**
         * 设备地址信息。
         * @example `sip:8032****@33.89.XX.XX:64189;transport=tcp;registering_acc=18_134_23_4`
         */
        Contact: string;
        /**
         * 设备ID，浏览器WebRTC软电话或实体话机设备的标识ID，同一时间只允许一种设备注册。
         * @example `ACC-YUNBS-1.0.10-****`
         */
        DeviceId: string;
        /**
         * 坐席ID。
         * @example `agent@ccc-test`
         */
        UserId: string;
        /**
         * 设备发起的注册信令中的Call ID。
         * @example `d7b818c3-8d3a-732f-bc9e-1782wa16****`
         */
        CallId: string;
        /**
         * 实例ID。
         * @example `ccc-test`
         */
        InstanceId: string;
        DeviceType: string;
    }[];
}
