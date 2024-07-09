export interface CreateImageRequest {
    /**
     * 实例ID。
     * @example `i-5rr1bnyrc4tswr8cq3w6y****`
     */
    "InstanceId"?: string;
    /**
     * 镜像名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，但不能以`http://`或`https://`开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
     * @example `ImageName`
     */
    "ImageName": string;
    /**
     * 镜像打包上传成功后是否自动释放实例，仅支持构建机。
     * - true：释放实例时，该镜像随实例一起释放。
     * - false ：释放实例时，保留该镜像，不随实例一起释放。
     * - 为空则表示默认为false。
     * @example `false`
     */
    "DeleteAfterImageUpload"?: string;
    /**
     * 快照ID。
     * @example `s-bp67acfmxazb4p****`
     */
    "SnapshotId"?: string;
}
