export interface ImportFpShotJobRequest {
    /**
     * 导库⽂件的OSS地址，JSON对象。例如：`{"Bucket":"example-bucket","Location":"oss-cn-shanghai","Object":"example.txt"}`。
     * > OSS的地域需要与当前MPS所在地域保持一致。
     * @example `{"Bucket":"example-bucket","Location":"oss-cn-shanghai","Object":"example.txt"}`
     */
    "Input": string;
    /**
     * 管道ID，可以通过**MPS控制台** > **全局设置** > **管道**获取。⽤于区分业务，绑定消息通知。若不传，则使⽤默认管道，不绑定消息通知。
     * @example `ae687c02fe944327ba9631e50da2****`
     */
    "PipelineId"?: string;
    /**
     * 导库配置，JSON对象。 例如：`{"SaveType":"onlysave"}`。其中`SaveType`表示存储类型，取值包括：
     * - **save**：去重入库。
     * - **onlysave**：仅入库。
     * @example `{"SaveType":"onlysave"}`
     */
    "FpImportConfig": string;
    /**
     * 用户自定义数据，支持中英文、数字、特殊符号。最大长度128字节。
     * @example `{"Chapter":"平凡的****​/平凡的****第⼆部/第⼆部第47章.txt"}`
     */
    "UserData"?: string;
    /**
     * DNA库ID，⽤于批量导⼊⽂本特征，⼀个库只能并⾏处理⼀个导库任务。可以从[提交新建DNA库](~~170149~~)的返回参数中获取。
     * @example `88c6ca184c0e47098a5b665e2a12****`
     */
    "FpDBId": string;
}
