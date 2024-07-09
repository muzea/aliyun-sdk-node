export interface UploadServerCertificateRequest {
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 资源的标签键。N的取值范围：**1~20**。一旦输入该值，则不允许为空字符串。
         * 最多支持64个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 资源的标签值。N的取值范围：**1~20**。一旦输入该值，可以为空字符串。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 服务器证书部署的地域ID。
     * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 阿里云签发证书ID。
     * >如果使用阿里云签发证书，该参数必选。
     * @example `775****`
     */
    "AliCloudCertificateId"?: string;
    /**
     * 阿里云签发证书名称。
     * 您可以通过调用[GetUserCertificateDetail - 获取证书详情](~~465112~~)接口查询证书名称。
     * >如果使用阿里云签发证书，该参数必选。
     * @example `cloudcertificate`
     */
    "AliCloudCertificateName"?: string;
    /**
     * 阿里云签发证书所属的地域ID。
     * >如果使用阿里云签发证书，该参数必选。
     * @example `cn-hangzhou`
     */
    "AliCloudCertificateRegionId"?: string;
    /**
     * 需要上传的公钥证书。
     * >如果上传非阿里云签发证书，该参数必选。
     * @example `-----BEGIN CERTIFICATE----- MIIGDTCC****** -----END CERTIFICATE-----`
     */
    "ServerCertificate"?: string;
    /**
     * 需要上传的私钥。
     * >如果上传非阿里云签发证书，该参数必选。
     * @example `-----BEGIN RSA PRIVATE KEY----- MIIEogIB****** -----END RSA PRIVATE KEY-----`
     */
    "PrivateKey"?: string;
    /**
     * 要上传的非阿里云签发的服务器证书的名称。长度限制为1~80个字符，允许包含中文、字母、数字、短划线（-）、正斜线（/）、半角句号（.）、下划线（_）和星号（*）。
     * >如果上传非阿里云签发证书，该参数必选。
     * @example `mycert01`
     */
    "ServerCertificateName"?: string;
    /**
     * 资源组ID。
     * @example `rg-atstuj3rto****`
     */
    "ResourceGroupId"?: string;
}
