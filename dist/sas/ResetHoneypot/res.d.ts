export interface ResetHoneypotResponse {
    /**
     * 蜜罐数据。
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
         * @example `ruoyi`
         */
        HoneypotImageName: string;
        /**
         * 蜜罐自定义参数ID。
         * @example `868a7579-00b5-4a74-999d-8bd3f411****`
         */
        PresetId: string;
        /**
         * 蜜罐状态列表。
         */
        State: string[];
        /**
         * 蜜罐镜像显示名称。
         * @example `RuoYi`
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
     * @example `A57C711B-AA15-55B2-8F61-4D09CEXXXXX`
     */
    RequestId: string;
}
