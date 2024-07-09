export interface StartHoneypotResponse {
    /**
     * 蜜罐数据。
     */
    Data: {
        /**
         * 蜜罐ID。
         * @example `123`
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
         * 蜜罐状态列表。
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
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `20456DD5-5CBF-5015-9173-12CA4246B***`
     */
    RequestId: string;
}
