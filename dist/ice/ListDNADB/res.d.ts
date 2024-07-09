export interface ListDNADBResponse {
    /**
     * DNA库列表。
     */
    DBList: {
        /**
         * DNA库状态。默认值：**offline**（离线）。**active**表示DNA库可用。可取值：
         * - **offline**：离线。
         * - **active**：在线。
         * - **deleted**：删除。
         * @example `active`
         */
        Status: string;
        /**
         * DNA库描述。
         * @example `这是一个视频DNA库。`
         */
        Description: string;
        /**
         * DNA库名称。
         * @example `example-name`
         */
        Name: string;
        /**
         * DNA库模型。包含：
         * - **Video**：视频
         * - **Audio**：音频
         * - **Image**：图片
         * - **Text**：文本【仅上海区域支持】
         * @example `Video`
         */
        Model: number;
        /**
         * DNA库Id。
         * @example `88c6ca184c0e47098a5b665e2a12****`
         */
        DBId: string;
    }[];
    /**
     * 请求ID。
     * @example `25818875-5F78-4A13-BEF6-D7393642CA58`
     */
    RequestId: string;
}
