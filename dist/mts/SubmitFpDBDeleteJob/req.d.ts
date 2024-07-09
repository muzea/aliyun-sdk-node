export interface SubmitFpDBDeleteJobRequest {
    /**
     * 管道ID，用于绑定消息通知。可以通过**MPS控制台** > **全局设置** > **管道**获取。
     * @example `fb712a6890464059b1b2ea7c8647****`
     */
    "PipelineId"?: string;
    /**
     * DNA库ID，可以从[提交新建DNA库](~~170149~~)的返回参数中获取。
     * @example `88c6ca184c0e47098a5b665e2a12****`
     */
    "FpDBId": string;
    /**
     * 用户自定义数据，支持中英文、数字等，最大长度128个字节。
     * @example `example data`
     */
    "UserData"?: string;
    /**
     * 操作类型，支持类型：
     * - **Purge**：清空DNA库，即删除DNA库中所有内容，不会删除DNA库。
     * - **Delete**：删除DNA库，即删除此DNA库。其中，modelId在[11, 14]内的新版本指纹库仅支持删除操作。
     * - 默认值：**Purge**。
     * @example `Purge`
     */
    "DelType"?: string;
}
