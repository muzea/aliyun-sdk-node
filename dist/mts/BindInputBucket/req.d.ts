export interface BindInputBucketRequest {
    /**
     * 需要绑定的输入媒体Bucket名称，不超过64个字节。可以通过**MPS控制台**>**工作流管理**>**媒体Bucket**获取。
     * > Bucket名称只允许小写字母、数字、中划线（-），且不能以中划线开头或结尾。
     * @example `example-bucket-****`
     */
    "Bucket": string;
    /**
     * OSS防盗链设置。更多信息请参见[防盗链](~~31869~~)。
     * > - MPS设置的防盗链不会对OSS文件防盗链生效。若OSS没有设置防盗链，则MPS也无需设置。
     *    > - 此处添加的Referer须为OSS侧防盗链中包含的Referer。如果您在OSS侧设置了多个Referer，MPS侧只需设置一个即可。
     * @example `http://www.example.com`
     */
    "Referer"?: string;
}
