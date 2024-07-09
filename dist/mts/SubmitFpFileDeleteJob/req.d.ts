export interface SubmitFpFileDeleteJobRequest {
    /**
     * 管道ID，用于绑定消息通知，可以通过**MPS控制台** > **全局设置** > **管道**获取。
     * @example `ed450ea0bfbd41e29f80a401fb4d****`
     */
    "PipelineId"?: string;
    /**
     * DNA库ID，可以从[提交新建DNA库](~~170149~~)的返回参数中获取。
     * @example `88c6ca184c0e432bbf5b665e2a15****`
     */
    "FpDBId": string;
    /**
     * 用户自定义数据，支持中英文、数字等，最大长度128个字节。
     * @example `example data`
     */
    "UserData"?: string;
    /**
     * 需要删除的文件ID，用半角逗号（,）分隔，一次最多删除200个。可以从[查询DNA库文件列表](~~209266~~)的返回参数中获取。
     * @example `41e6536e4f2250e2e9bf26cdea19****`
     */
    "FileIds"?: string;
    /**
     * 需要删除的文件PrimaryKey，用半角逗号（,）分隔，一次最多删除200个。可以从[查询DNA库文件列表](~~209266~~)的返回参数中获取。
     * > 此参数当前仅支持华北2（北京）、华东1（杭州）、华东2（上海）地域使用。
     * @example `24e0fba7188fae707e146esa54****`
     */
    "PrimaryKeys"?: string;
}
