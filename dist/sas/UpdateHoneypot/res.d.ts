export interface UpdateHoneypotResponse {
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
         * @example `hyl-phpmyadmin`
         */
        HoneypotName: string;
        /**
         * 蜜罐镜像名称。
         * @example `webpage`
         */
        HoneypotImageName: string;
        /**
         * 蜜罐自定义参数ID。
         * @example `868a7579-00b5-4a74-999d-8bd3f411e8a3`
         */
        PresetId: string;
        /**
         * 蜜罐状态。
         */
        State: string[];
        /**
         * 蜜罐镜像显示名称。
         * @example `Webmin`
         */
        HoneypotImageDisplayName: string;
        /**
         * 管理节点唯一ID。
         * @example `a882e590-b87b-45a6-87b9-d0a3e5a0****`
         */
        NodeId: string;
    };
    /**
     * 接口调用是否成功。取值：
     * - **true**：成功
     * - **false**：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果代码，**200**表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 请求结果返回信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `3B323ADD-6CF8-51F6-9047-2F0A4E3F5EFD`
     */
    RequestId: string;
    /**
     * 请求数据结果的HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
