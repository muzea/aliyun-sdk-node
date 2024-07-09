export interface CompleteMultipartUploadRequest {
    /**
     * Bucket名称。
     * @example `examplebucket`
     */
    "bucket": string;
    /**
     * Object完整路径。
     * @example `exampledir/exampleobject.txt`
     */
    "key": string;
    /**
     * 此次MultipartUpload事件的唯一标识。
     * @example `0004B9895DBBB6E****`
     */
    "uploadId": string;
    /**
     * 指定对返回的Key进行编码，目前只支持URL编码。
     * Key使用UTF-8字符，但XML 1.0标准不支持解析一些控制字符，例如ASCII码值从0到10的字符。当Key中包含XML 1.0标准不支持的控制字符时，您可以通过指定Encoding-type对返回的Key进行编码。
     * 默认值：无
     * 有效值：url
     */
    "encoding-type"?: any;
    /**
     * 指定CompleteMultipartUpload操作时是否覆盖同名Object。
     * - 不指定x-oss-forbid-overwrite或者指定x-oss-forbid-overwrite为false时，表示允许覆盖同名Object。
     * - 指定x-oss-forbid-overwrite为true时，表示禁止覆盖同名Object。
     * >
     * - 当目标Bucket的版本控制状态为“开启”或“暂停”时，x-oss-forbid-overwrite请求Header设置无效，即允许覆盖同名Object。
     * - 设置x-oss-forbid-overwrite请求Header会导致QPS处理性能下降，如果您有大量的操作需要使用x-oss-forbid-overwrite请求Header（QPS > 1000），请工单联系我们进行确认，避免影响您的业务。
     * @example `true`
     */
    "x-oss-forbid-overwrite"?: string;
    /**
     * 指定是否列举当前UploadId已上传的所有Part。
     * - 如果指定了x-oss-complete-all:yes，则OSS会列举当前UploadId已上传的所有Part，然后按照PartNumber的序号排序并执行CompleteMultipartUpload操作。执行CompleteMultipartUpload过程中无法检测正在上传或者漏传的Part，因此用户需要自己确保Part的完整性。
     * - 如果指定了x-oss-complete-all:yes，则不允许继续指定body，否则报错。
     * - 如果指定了x-oss-complete-all:yes，response的格式保持不变。
     * @example `yes`
     */
    "x-oss-complete-all"?: string;
    /**
     * 保存CompleteMultipartUpload请求内容的请求体。
     */
    "body"?: {
        /**
         * 保存CompleteMultipartUpload请求内容的容器。
         */
        CompleteMultipartUpload: any;
    };
}
