export interface SetVsStreamsNotifyUrlConfigRequest {
    /**
     * 您的加速域名。
     * @example `example.com`
     */
    "DomainName": string;
    /**
     * 设置直播流信息推送到的URL地址。
     * > 必须以 http:// 或者 https:// 开头。
     * @example `http://xxx.com/xx`
     */
    "NotifyUrl": string;
    /**
     * 鉴权类型，取值范围：
     * - **no_auth**（关闭）
     * - **type_a**（A方式）
     * - **type_b**（B方式）
     * - **type_c**（C方式）
     * @example `type_a`
     */
    "AuthType"?: string;
    /**
     * 播放域名关联的主Key，用于生成鉴权URL。
     * > 通过 [DescribeVsDomainConfigs](https://help.aliyun.com/document_detail/464513.html) 接口查询对应的AuthKey信息。
     * @example `ocs*****ace`
     */
    "AuthKey"?: string;
}
