export interface UploadCACertificateRequest {
    /**
     * 标签列表。
     * @example `UploadCACertificate`
     */
    "Tag"?: {
        /**
         * 监听的标签键。N的取值范围：**1**~**20**。一旦传入该值，则不允许为空字符串。最多支持128个字符，不能以`aliyun`或`acs:`开头，不能包含`http://`或`https://`。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 实例的标签值。N的取值范围：**1~20**。一旦输入该值，可以为空字符串。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceJoshua`
         */
        Value: string;
    }[];
    /**
     * CA证书的地域。
     * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 要上传CA证书的内容。
     * @example `test`
     */
    "CACertificate": string;
    /**
     * CA证书名称。
     * @example `mycacert01`
     */
    "CACertificateName"?: string;
    /**
     * 企业资源组ID。
     * @example `rg-atst******`
     */
    "ResourceGroupId"?: string;
}
