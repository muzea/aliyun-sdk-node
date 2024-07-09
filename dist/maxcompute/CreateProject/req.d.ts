export interface CreateProjectRequest {
    /**
     * 请求体参数
     * @example `{
        "name":"project_name",
        "comment":"",
        "productType":"payasyougo/subscription/dev",
        "defaultQuota":"quota_nick_name",
        "properties":{
            "sqlMeteringMax":"",
            "typeSystem":"",
            "encryption":{
                "enable":true,
                "algorithm":"",
                "key":""
            }
        }
    }`
     */
    "body"?: string;
}
