export interface ListAvailableHoneypotResponse {
    /**
     * 蜜罐镜像信息列表。
     */
    Data: {
        /**
         * 蜜罐镜像名称。
         * @example `ruoyi`
         */
        HoneypotImageName: string;
        /**
         * 蜜罐镜像展示名称。
         * @example `RuoYi`
         */
        HoneypotImageDisplayName: string;
        /**
         * 蜜罐镜像ID。
         * @example `sha256:007095d6de9c7a343e9fc1f74a7efc9c5de9d5454789d2fa505a1b3fc62****`
         */
        HoneypotImageId: string;
        /**
         * 蜜罐镜像版本。
         * @example `1.0.2`
         */
        HoneypotImageVersion: string;
        /**
         * 蜜罐镜像类型。
         * @example `Web`
         */
        HoneypotImageType: string;
        /**
         * 蜜罐支持的协议。
         * @example `tcp`
         */
        Proto: string;
        /**
         * 蜜罐服务端口。
         * @example `27017.0`
         */
        ServicePort: string;
        /**
         * 蜜罐支持的端口。为JSON格式。包含以下字段：
         * - **log_type**：日志类型
         * - **proto**：支持协议
         * - **description**：说明
         * - **ports**：支持端口集合
         * - **port_str**：支持端口字符串
         * - **type**：类型
         * @example `[{"log_type":"web","proto":"tcp","description":"webServerPort","ports":[80.0],"port_str":"80","type":"web"}]`
         */
        Multiports: string;
        /**
         * 蜜罐配置参数模板。
         * @example `{}`
         */
        Template: string;
    }[];
    /**
     * 蜜罐镜像信息数量。
     * @example `22`
     */
    Count: number;
    /**
     * 接口调用是否成功。取值：
     * - **true**：接口调用成功。
     * - **false**：接口调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果代码，**200**表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 错误码的详细信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `6C24D883-984D-52FD-BB66-5F89F86E4837`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
