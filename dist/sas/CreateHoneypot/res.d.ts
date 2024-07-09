export interface CreateHoneypotResponse {
    /**
     * 蜜罐信息。
     */
    Data: {
        /**
         * 蜜罐ID。
         * @example `9bf8cd373112263d4bc102fc5dba9d9f812ee05d4d35c487d330d52e937f****`
         */
        HoneypotId: string;
        /**
         * 蜜罐自定义名称。
         * @example `ruoyi`
         */
        HoneypotName: string;
        /**
         * 蜜罐管理节点名称。
         * @example `managerNodename`
         */
        ControlNodeName: string;
        /**
         * 蜜罐镜像名称。
         * @example `tcp_proxy`
         */
        HoneypotImageName: string;
        /**
         * 蜜罐自定义参数ID。
         * @example `ddh3731641137fe4b72b245346a2721d4b6tdgg3731641137fe4b72b245346a2721***`
         */
        PresetId: string;
        /**
         * 蜜罐状态。
         */
        State: string[];
        /**
         * 蜜罐镜像显示名称。
         * @example `HoneyDisplayName`
         */
        HoneypotImageDisplayName: string;
        /**
         * 管理节点唯一ID。
         * @example `a882e590-b87b-45a6-87b9-d0a3e5a0****`
         */
        NodeId: string;
    };
    /**
     * 是否调用成功。取值：
     * - **true**：调用成功。
     * - **false**：调用失败。
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
     * @example `29874225-EAAC-5415-8501-32DD20FD29F6`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
