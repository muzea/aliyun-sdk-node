export interface GenerateUploadFilePolicyResponse {
    /**
     * 签名
     * @example `jykxhmskIF24sLlxc1GafU/eQMU=`
     */
    Signature: string;
    /**
     * 上传文件的url
     * @example `https://`
     */
    FileUrl: string;
    /**
     * OSS Endpoint。
     * @example `//companyapply.oss-cn-zhangjiakou.aliyuncs.com/`
     */
    Host: string;
    /**
     * 请求id
     * @example `EB809CAB-82F7-5843-A42F-356770CD4914`
     */
    RequestId: string;
    /**
     * 过期时间
     * @example `1638169824405`
     */
    ExpireTime: string;
    /**
     * oss上传策略
     * @example `eyJleHBpcmF0aW9uIjoiMjAyMS0xMi0wNlQwNjoxOTowMi40MjdaIiwiY29uZGl0aW9ucyI6W1siZXEiLCIkYnVja2V0IiwibXNlYS1jYWlzaHVpIl1dfQ==`
     */
    EncodedPolicy: string;
    /**
     * 上传文件的路径
     * @example `company_apply_card/company_change_city/1577930895198750/1638170049657`
     */
    FileDir: string;
    /**
     * OSSAccessKeyId
     * @example `hObpgEXoca42qH3V`
     */
    AccessId: string;
}
