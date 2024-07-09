export interface ListFpShotDBResponse {
    FpShotDBList: {
        /**
         * DNA库列表。
         */
        FpShotDB: {
            /**
             * DNA库的状态。默认值：**offline**（离线）。**active**表示DNA库可用。可取值：
             * - **offline**：离线。
             * - **active**：在线。
             * - **paused**：暂停。
             * - **deleted**：删除。
             * @example `active`
             */
            Status: string;
            /**
             * DNA库描述。
             * @example `这是一个文本DNA库`
             */
            Description: string;
            /**
             * DNA库名称。
             * @example `test-****`
             */
            Name: string;
            /**
             * DNA库模型ID。⽂本DNA ModelId为**11**，视频DNA ModelId为**12**，音频DNA ModelId为**13**，图片DNA ModelId为**14**。
             * @example `11`
             */
            ModelId: number;
            /**
             * DNA库ID。
             * @example `88c6ca184c0e47098a5b665e2a12****`
             */
            FpDBId: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `25818875-5F78-4A13-BEF6-D7393642CA58`
     */
    RequestId: string;
    NonExistIds: {
        /**
         * 不存在的DNA库ID列表。
         */
        String: string[];
    };
}
